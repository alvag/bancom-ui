import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs-page',
  templateUrl: './inputs-page.component.html',
  styleUrls: ['./inputs-page.component.scss']
})
export class InputsPageComponent {
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
