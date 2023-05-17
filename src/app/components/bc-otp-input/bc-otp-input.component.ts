import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { DirectivesModule } from '../../directives/directives.module';

@Component({
  selector: 'bc-otp-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DirectivesModule],
  templateUrl: './bc-otp-input.component.html',
  styleUrls: ['./bc-otp-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BcOtpInputComponent,
      multi: true
    }
  ]
})
export class BcOtpInputComponent implements ControlValueAccessor, OnInit {

  @Input() length = 6;
  @Output() validValue = new EventEmitter<string>();

  inputs: FormControl[] = [];

  value?: number | string;
  onChange = (_: number | string) => {};
  onTouch = () => {};

  ngOnInit(): void {
    for (let i = 0; i < this.length; i++) {
      this.inputs.push(
        new FormControl({value: '', disabled: i > 0}, [Validators.required, Validators.minLength(1), Validators.maxLength(1)])
      );
    }
  }

  writeValue(value: string | number): void {
    this.value = value;
  }
  registerOnChange( fn: ( _: number | string ) => void ): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }


  nextInput(i: number) {
    if (this.inputs[i] && this.inputs[i].valid) {
      this.inputs[i + 1] && this.inputs[i + 1].enable();
      const nextInput = this.getElementById(i + 1);
      nextInput?.focus();
      nextInput?.select();
    }

    this.getOtpValue();
  }

  getOtpValue() {
    const value = this.inputs.map(input => input.value).join('');
    if (this.value !== value) {
      this.value = value;
      this.onChange(value);

      if (this.value.length === this.length) {
        this.validValue.emit(this.value);
      }
    }
    this.onTouch();
  }

  getElementById(id: number) {
    return document.getElementById(`otp-input-${id}`) as HTMLInputElement;
  }

  onBack(e: KeyboardEvent, i: number) {
    if (e.key === "Backspace") {
      this.inputs[i].setValue('');
      if (i > 0) {
        const prevInput = this.getElementById(i - 1);
        prevInput?.focus();
        prevInput?.select();
      }
    }
  }
}
