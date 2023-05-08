import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.scss'],
})
export class SelectPageComponent {
  items = [
    {
      id: 1,
      name: 'Item 1',
    },
    {
      id: 2,
      name: 'Item 2',
    },
    {
      id: 3,
      name: 'Item 3',
    },
    {
      id: 4,
      name: 'Item 4',
    },
    {
      id: 5,
      name: 'Item 5',
    },
  ];

  form = new FormBuilder().group({
    input1: [1, Validators.required],
    input2: [null, Validators.required],
    input3: { value: 2, disabled: true },
    input4: { value: null, disabled: true },
  });
}
