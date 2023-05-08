import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcCheckboxComponent } from '../bc-checkbox/bc-checkbox.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, BcCheckboxComponent, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  form = new FormBuilder().group({
    input1: [null, Validators.required],
    input2: [true, Validators.required],
    input3: {value: true, disabled: true},
    input4: {value: null, disabled: true},
  })

}
