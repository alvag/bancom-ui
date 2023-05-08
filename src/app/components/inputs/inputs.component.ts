import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcInputComponent } from '../bc-input/bc-input.component';
import { ControlMessagesComponent } from '../control-messages/control-messages.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule, BcInputComponent, ControlMessagesComponent, ReactiveFormsModule],
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {

  form = new FormBuilder().group({
    input1: [null, Validators.required],
    input2: { value: '456', disabled: true },
    input3: { value: '', disabled: true },
    input4: [null, Validators.required],
  });

  handleClick() {
    console.log(this.form.getRawValue());
    this.form.markAllAsTouched();
  }

  onClickSuffix() {
    console.log('onClickSuffix');
  }

}
