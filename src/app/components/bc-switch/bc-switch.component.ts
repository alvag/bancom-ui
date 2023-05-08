import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'bc-switch',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './bc-switch.component.html',
  styleUrls: ['./bc-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BcSwitchComponent,
      multi: true,
    },
  ],
})
export class BcSwitchComponent implements ControlValueAccessor {
  @Input() label = ' ';
  isChecked = false;
  disabled = false;

  onChange = (_: boolean) => {};
  onTouch = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(checked: boolean): void {
    this.isChecked = checked;
  }

  onChecked(checked: boolean) {
    this.onChange(checked);
    this.onTouch();
  }
}
