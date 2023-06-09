import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ErrorTypeMessageInterface {
  required?: string;
  email?: string;
  pattern?: string;
  minlength?: string;
}

interface ErrorValueInterface {
  requiredLength?: string;
  size?: string;
  type?: string;
  email?: string;
}

@Component({
  selector: 'bc-control-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss'],
})
export class ControlMessagesComponent {
  @Input() control!: AbstractControl | null;
  @Input() customMessages!: ErrorTypeMessageInterface;
  @Input() showMessage = true;
  @Input() messageClass = '';

  get message(): string {
    let message = '';
    if (this.control) {
      for (const errorName in this.control.errors) {
        // eslint-disable-next-line no-prototype-builtins
        if (this.control.errors.hasOwnProperty(errorName) && this.control.touched) {
          message =
            this.customMessages && this.getValue(errorName)
              ? this.getValue(errorName)
              : this.getMessage(errorName, this.control.errors[errorName]);
        }
      }
    }
    return message;
  }

  getValue(errorName: string): string {
    const error = Object.entries(this.customMessages).find(x => x[0] === errorName);
    return error ? error[1] : null;
  }

  isInvalid(control: AbstractControl | null): boolean | null {
    return control && control.errors && control.touched;
  }

  getMessage(errorName: string, errorValue: ErrorValueInterface): string {
    let msg = '';
    switch (errorName) {
      case 'required':
        msg = 'Campo obligatorio';
        break;
      case 'email':
        msg = 'El correo no es válido';
        break;
      case 'pattern':
        msg = 'No cumple con el formato permitido';
        break;
      case 'minlength':
        msg = `Debe tener al menos ${errorValue.requiredLength} caracteres`;
        break;
      case 'maxlength':
        msg = `Sólo se permiten ${errorValue.requiredLength} caracteres`;
        break;
      case 'file':
        if (errorValue.size) {
          msg = `Máximo ${errorValue.size} MB`;
        } else if (errorValue.type) {
          msg = `Solo se permiten archivos de tipo ${errorValue.type}`;
        }
        break;
      default:
        return '';
    }

    return msg;
  }
}
