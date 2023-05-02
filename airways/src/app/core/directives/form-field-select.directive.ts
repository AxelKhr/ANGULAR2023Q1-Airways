/* eslint-disable no-underscore-dangle */
import {
  Directive, AfterViewInit, Input, ElementRef, Renderer2, OnChanges,
} from '@angular/core';
import { MatFormField } from '@angular/material/form-field';

@Directive({
  selector: '[appFormFieldStyle]',
})
export class FormFieldSelectDirective implements OnChanges, AfterViewInit {
  @Input('appFormFieldStyle') fieldRef!: MatFormField;

  @Input() borderColor = '';

  @Input() textColor = '';

  @Input() backgroundColor = '';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    this.setStyle();
  }

  ngAfterViewInit() {
    this.setStyle();
  }

  getElement(selector: string) {
    return this.fieldRef._elementRef.nativeElement.querySelector(selector) as HTMLElement;
  }

  setStyle() {
    const fieldInfix = this.getElement('.mat-mdc-form-field-infix');
    this.renderer.setStyle(fieldInfix, 'min-height', '40px');
    this.renderer.setStyle(fieldInfix, 'padding-top', '8px');
    this.renderer.setStyle(fieldInfix, 'padding-bottom', '8px');

    const selectValue = this.getElement('.mat-mdc-select-value');
    this.renderer.setStyle(selectValue, 'color', this.textColor);

    const selectArrow = this.getElement('.mat-mdc-select-arrow');
    this.renderer.setStyle(selectArrow, 'color', this.textColor);

    this.renderer.setStyle(this.fieldRef._elementRef.nativeElement, 'background-color', this.backgroundColor);

    const el = this.getElement('.mdc-notched-outline');
    if (el) {
      this.renderer.setStyle(el, 'border-color', this.borderColor);
      el.style.setProperty('--mdc-theme-primary', this.borderColor);

      const borders = this.fieldRef._elementRef.nativeElement.querySelectorAll('.mdc-notched-outline > div') as NodeList;
      borders.forEach((item) => {
        this.renderer.setStyle(item, 'border-color', this.borderColor);
      });
    }
  }
}
