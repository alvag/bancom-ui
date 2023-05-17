import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, Injectable, Type } from '@angular/core';

import { Modal } from './models/modal.model';
import { ModalRef } from './models/modal-ref.model';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { IModalData } from './models/interfaces';

@Injectable()
export class ModalService {

  private modalContainer!: HTMLElement;
  private modalContainerFactory!: ComponentFactory<ModalContainerComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef
  ) {
    this.setupModalContainerFactory();
  }

  open<T extends Modal>(component: Type<T>, inputs?: IModalData): ModalRef {
    this.setupModalContainerDiv();

    const modalContainerRef = this.appRef.bootstrap(this.modalContainerFactory, this.modalContainer);

    const { data, width, classModal, isClosable } = inputs || {};
    const modalComponentRef = modalContainerRef.instance.createModal(component, width, classModal, isClosable);

    modalComponentRef.instance.data  = data;

    return new ModalRef(modalContainerRef, modalComponentRef);
  }

  private setupModalContainerDiv(): void {
    this.modalContainer = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(this.modalContainer);
  }

  private setupModalContainerFactory(): void {
    this.modalContainerFactory = this.componentFactoryResolver.resolveComponentFactory(ModalContainerComponent);
  }

}
