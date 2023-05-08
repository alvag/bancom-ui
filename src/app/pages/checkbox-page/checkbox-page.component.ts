import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox-page',
  templateUrl: './checkbox-page.component.html',
  styleUrls: ['./checkbox-page.component.scss']
})
export class CheckboxPageComponent {
  form = new FormBuilder().group({
    input1: [null, Validators.required],
    input2: [true, Validators.required],
    input3: { value: true, disabled: true },
    input4: { value: null, disabled: true },
  });
}
