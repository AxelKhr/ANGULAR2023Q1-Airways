import { Directive, AfterViewInit, Input } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Directive({
  selector: '[appMatMenuClass]',
})
export class MatMenuClassDirective implements AfterViewInit {
  @Input('appMatMenuClass') class = '';

  constructor(private menu: MatMenu) { }

  ngAfterViewInit(): void {
    this.menu.overlayPanelClass = `${this.class}`;
  }
}
