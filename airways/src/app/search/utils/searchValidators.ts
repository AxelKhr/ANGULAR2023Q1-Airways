import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

export function endDateRequired(control: FormControl) {
  if (!control.parent) {
    return null;
  }
  // eslint-disable-next-line eqeqeq
  if (
    control.parent?.get('isRound')?.value === 'true'
    || control.parent?.get('isRound')?.value === '1'
  ) {
    return Validators.required(control);
  }
  return null;
}

export function validatePassengers(group: FormGroup): ValidationErrors | null {
  const isAdult = group.controls['adult'].value === 0;
  const isChild = group.controls['child'].value === 0;
  const isInfant = group.controls['infant'].value === 0;

  if (isAdult && isChild && isInfant) {
    return { noPassangers: true };
  }
  return null;
}

export function validateDestination(
  control: FormControl,
): ValidationErrors | null {
  const selection = control.value;
  if (typeof selection === 'string') {
    return { incorrect: true };
  }
  return null;
}
