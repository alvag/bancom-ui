import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bc-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bc-input.component.html',
  styleUrls: ['./bc-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BcInputComponent,
      multi: true,
    },
  ],
})
export class BcInputComponent implements ControlValueAccessor {
  @Input() placeholder = ' ';
  @Input() isReadOnly = false;
  value?: string | number;
  disabled = false;
  onChange = (_: any) => {};
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

  writeValue(value: string | number): void {
    this.value = value;
  }

  onInput() {
    this.onChange(this.value);
    this.onTouch();
  }
}
