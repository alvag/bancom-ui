import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from '../../../services/modal-service/models/modal.model';

@Component({
  selector: 'app-test-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent extends Modal implements OnInit {
  ngOnInit() {
    console.log(this.data);
  }

}
