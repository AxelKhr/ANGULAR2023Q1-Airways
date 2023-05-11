import { NgModule } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
  ],
})
export class IconsModule {
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
  ) {
    this.matIconRegistry.addSvgIcon('account', this.setPath('./assets/account.svg'));
    this.matIconRegistry.addSvgIcon('cart', this.setPath('./assets/basket.svg'));
    this.matIconRegistry.addSvgIcon('step-complete', this.setPath('./assets/step-complete.svg'));
    this.matIconRegistry.addSvgIcon('step-edit', this.setPath('./assets/step-edit.svg'));
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
