import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-switch-page',
  templateUrl: './switch-page.component.html',
  styleUrls: ['./switch-page.component.scss'],
})
export class SwitchPageComponent {
  form = new FormBuilder().group({
    switch1: [true],
    switch2: [false],
    switch3: { value: true, disabled: true },
    switch4: { value: false, disabled: true },
  });
}
