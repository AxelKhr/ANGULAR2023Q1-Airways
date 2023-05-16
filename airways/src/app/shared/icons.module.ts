import { NgModule } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [MaterialModule],
})
export class IconsModule {
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
  ) {
    this.matIconRegistry.addSvgIcon('account', this.setPath('./assets/account.svg'));
    this.matIconRegistry.addSvgIcon('cart', this.setPath('./assets/basket.svg'));
    this.matIconRegistry.addSvgIcon('info', this.setPath('./assets/inputinfo.svg'));
    this.matIconRegistry.addSvgIcon('info-error', this.setPath('./assets/inputinfo-error.svg'));
    this.matIconRegistry.addSvgIcon('tick', this.setPath('./assets/tick-symbol.svg'));
    this.matIconRegistry.addSvgIcon('wheelchair', this.setPath('./assets/wheelchair.svg'));
    this.matIconRegistry.addSvgIcon('luggage', this.setPath('./assets/luggage.svg'));
    this.matIconRegistry.addSvgIcon('passenger-ico', this.setPath('./assets/passenger-ico.svg'));
    this.matIconRegistry.addSvgIcon('contact-ico', this.setPath('./assets/contact-ico.svg'));
    this.matIconRegistry.addSvgIcon('arrow-down', this.setPath('./assets/arrow-down.svg'));
    this.matIconRegistry.addSvgIcon('step-complete', this.setPath('./assets/step-complete.svg'));
    this.matIconRegistry.addSvgIcon('step-edit', this.setPath('./assets/step-edit.svg'));
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
