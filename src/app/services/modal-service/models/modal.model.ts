import { ModalRef } from './modal-ref.model';

export abstract class Modal {

  data?: {[key: string]: unknown}

  modalInstance?: ModalRef;

  close(output?: unknown): void {
    this.modalInstance?.close(output);
  }

  dismiss(output?: unknown): void {
    this.modalInstance?.dismiss(output);
  }

}
