import { Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class ContactDetailsComponent implements OnInit {
  parentForm!: FormGroup;

  contactsForm: FormGroup;

  countryCodes = [
    {
      country: 'Australia',
      code: '+61',
    },
    {
      country: 'Austria',
      code: '+43',
    },
    {
      country: 'Azerbaijan',
      code: '+994',
    },
  ];

  selectedCode = this.countryCodes[0];

  constructor(private parent: FormGroupDirective, formBuilder: FormBuilder) {
    this.contactsForm = formBuilder.group({
      countryCode: [null, Validators.required],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]*$/),
          Validators.minLength(8),
          Validators.maxLength(8),
        ],
      ],
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
    });
  }

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.parentForm.addControl('contacts', this.contactsForm);
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
