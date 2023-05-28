import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppSelectors } from 'src/app/redux/selectors';
import { ICountryCodeModel } from 'src/app/shared/models/country-code.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  parentForm!: FormGroup;

  contactsForm: FormGroup;

  countryCodesSubscr!: Subscription;

  countryCodes: ICountryCodeModel[] = [];

  constructor(private parent: FormGroupDirective, formBuilder: FormBuilder, private store: Store) {
    this.contactsForm = formBuilder.group({
      countryCode: [null, Validators.required],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
    });
  }

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.parentForm.addControl('contacts', this.contactsForm);

    this.countryCodesSubscr = this.store.select(AppSelectors.general.selectCountryCodes)
      // eslint-disable-next-line @ngrx/no-store-subscription
      .subscribe((values) => { this.countryCodes = [...values]; });
  }

  ngOnDestroy(): void {
    if (this.countryCodesSubscr) {
      this.countryCodesSubscr.unsubscribe();
    }
  }

  get countryCode() {
    return this.contactsForm.get('countryCode');
  }

  get phoneNumber() {
    return this.contactsForm.get('phoneNumber');
  }

  get email() {
    return this.contactsForm.get('email');
  }
}
