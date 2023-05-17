import { Directive, HostListener, ElementRef, Input } from '@angular/core';

/**
 * alpha numeric directive
 */
@Directive({
  selector: '[appAlphaNumeric]',
})
export class AlphaNumericDirective {
  /**
   * an: alpha numeric
   * n: numeric
   * a: letters
   */
  @Input() alphaNumericType: 'an' | 'n' | 'a' = 'an';

  /** regular expression for letters */
  alphabet = /^[a-zA-ZáéíóúÁÉÍÓÚÑñ ]*$/;

  /** regular expression for letters and numbers */
  alphaNumeric = /^[a-zA-ZáéíóúÁÉÍÓÚÑñ0-9 ]*$/;

  /** regular expression for numbers */
  numeric = /^\d*$/;

  /**
   * Constructor
   * @param el
   */
  constructor(private el: ElementRef) {}

  /**
   * on key press
   * @param event
   */
  @HostListener('keypress', ['$event']) onKeyPress(event: { key: string }): boolean {
    switch (this.alphaNumericType) {
      case 'a':
        return new RegExp(this.alphabet).test(event.key);
      case 'n':
        return new RegExp(this.numeric).test(event.key);
      default:
        return new RegExp(this.alphaNumeric).test(event.key);
    }
  }

  /**
   * block paste
   */
  @HostListener('paste', ['$event']) blockPaste(): void {
    setTimeout(() => {
      switch (this.alphaNumericType) {
        case 'a':
          this.el.nativeElement.value = this.filter(this.el.nativeElement.value, this.alphabet);
          break;
        case 'n':
          this.el.nativeElement.value = this.filter(this.el.nativeElement.value, this.numeric);
          break;
        default:
          this.el.nativeElement.value = this.filter(this.el.nativeElement.value, this.alphaNumeric);
      }
    }, 1);
  }

  /**
   * filter
   * @param value
   * @param regEx
   */
  filter(value: string, regEx: RegExp): string {
    if (value) {
      const arr: string[] = [];
      value.split('').forEach(n => {
        if (regEx.test(n)) {
          arr.push(n);
        }
      });
      return arr.join('');
    }
    return value;
  }
}
