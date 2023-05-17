import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bc-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bc-select.component.html',
  styleUrls: ['./bc-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BcSelectComponent,
      multi: true,
    },
  ],
})
export class BcSelectComponent implements ControlValueAccessor {
  @Input() items: any[] = [];
  @Input() label?: string;
  @Input() value?: string;
  @Input() selectedValue?: any;
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  inputName = Math.random().toString(36).substring(7);

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

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  onSelect(item: any) {
    this.onChange(item);
    this.onTouch();
  }
}
