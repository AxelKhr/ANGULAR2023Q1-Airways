import { Component, Input } from '@angular/core';
import { IFareByTypeModel } from 'src/app/booking/models/fare.model';

@Component({
  selector: 'app-fare-type',
  templateUrl: './fare-type.component.html',
  styleUrls: ['./fare-type.component.scss'],
})
export class FareTypeComponent {
  @Input() fare: IFareByTypeModel = {
    count: 0,
    fare: 0,
    tax: 0,
    totalCost: 0,
  };

  @Input() name = '';
}
