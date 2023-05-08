import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bc-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bc-checkbox.component.html',
  styleUrls: ['./bc-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BcCheckboxComponent,
      multi: true,
    },
  ],
})
export class BcCheckboxComponent implements ControlValueAccessor {
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
