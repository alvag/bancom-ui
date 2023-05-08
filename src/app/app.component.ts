import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bancom-ui';
  form = new FormBuilder().group({
    input1: [null, Validators.required],
    input2: [true, Validators.required],
    input3: {value: true, disabled: true},
    input4: {value: null, disabled: true},
  });

  items = [
    {
      id: 1,
      name: 'Item 1'
    },
    {
      id: 2,
      name: 'Item 2'
    },
    {
      id: 3,
      name: 'Item 3'
    },
    {
      id: 4,
      name: 'Item 4'
    },
    {
      id: 5,
      name: 'Item 5'
    }
  ]


  handleClick() {
    console.log(this.form.value);
  }
}
