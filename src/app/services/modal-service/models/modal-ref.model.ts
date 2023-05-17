import { ComponentRef } from  '@angular/core';

import { Modal } from './modal.model';
import { ModalContainerComponent } from '../modal-container/modal-container.component';
import { Observable, Subject } from 'rxjs';

export class ModalRef {

  private result$ = new Subject<any>();

  constructor(
    private modalContainer: ComponentRef<ModalContainerComponent>,
    private modal: ComponentRef<Modal>,
  ) {
    this.modal.instance.modalInstance = this;
  }

  close(output: any): void {
    this.result$.next(output);
    this.destroy$();
  }

  dismiss(output: any): void {
    this.result$.error(output);
    this.destroy$();
  }

  onResult(): Observable<any> {
    return this.result$.asObservable();
  }

  private destroy$(): void {
    this.modal.destroy();
    this.modalContainer.destroy();
    this.result$.complete();
  }

}