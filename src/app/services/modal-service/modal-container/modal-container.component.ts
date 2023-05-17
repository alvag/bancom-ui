import { Component, ViewChild, Type, ComponentRef, OnDestroy } from '@angular/core';
import { Modal } from '../models/modal.model';
import { AdDirective } from '../add-host.directive';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
})
export class ModalContainerComponent implements OnDestroy {
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  isShown = false;
  width = '560px';
  classModal = '';
  isClosable?: boolean;
  modalId = Math.random().toString(36).substring(7);
  componentRef?: ComponentRef<Modal>;

  ngOnDestroy(): void {
    const modal = document.getElementById(this.modalId);
    if (modal) {
      modal.removeEventListener('click', this.handleClick.bind(this));
    }
    document.removeEventListener('keyup', this.handleKeyUp);
    sessionStorage.removeItem('modalId');
  }

  handleKeyUp({ key }: KeyboardEvent): void {
    if (key === 'Escape') {
      const modalId = sessionStorage.getItem('modalId');
      const modal = modalId && document.getElementById(modalId);
      modal && modal?.click();
    }
  }

  handleClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).id === this.modalId && this.isClosable) {
      this.componentRef?.instance.close();
    }
  }

  createModal<T extends Modal>(
    component: Type<T>,
    width = '560px',
    classModal = '',
    isClosable?: boolean
  ): ComponentRef<Modal> {
    this.isClosable = isClosable;
    isClosable && this.initListeners();
    this.width = width;
    this.classModal = classModal;
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(component);

    setTimeout(() => {
      this.isShown = true;
    }, 200);

    return this.componentRef;
  }

  initListeners(): void {
    const modal = document.getElementById(this.modalId);
    if (modal) {
      sessionStorage.setItem('modalId', this.modalId);
      modal.addEventListener('click', this.handleClick.bind(this));
      document.addEventListener('keyup', this.handleKeyUp);
    }
  }
}
