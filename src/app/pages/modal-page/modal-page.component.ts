import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal-service/modal-service.service';
import { TestModalComponent } from './test-modal/test-modal.component';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {

  constructor(private modalService: ModalService) {
  }
  ngOnInit() {

  }



  openModal() {

    const modalFef = this.modalService.open(TestModalComponent, {
      classModal: 'modal-test',
      width: '800px',
      isClosable: true,
      data: {
        test: 123
      }
    });

    modalFef.onResult().subscribe((result) => {
      console.log(result);
    });
  }
}
