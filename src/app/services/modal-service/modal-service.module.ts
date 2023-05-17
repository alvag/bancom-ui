import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalService } from './modal-service.service';
import { AdDirective } from './add-host.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalContainerComponent,
    AdDirective
  ]
})
export class ModalServiceModule {
  static forRoot() {
    return {
      ngModule: ModalServiceModule,
      providers: [
        ModalService
      ]
    }
  }
}
