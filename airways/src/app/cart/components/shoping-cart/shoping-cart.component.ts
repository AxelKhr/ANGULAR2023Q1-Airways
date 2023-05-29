/* eslint-disable no-underscore-dangle */
import {
  Component, OnInit, OnDestroy, ViewChild,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppSelectors } from 'src/app/redux/selectors';
import { IPassengerModel } from 'src/app/shared/models/passenger.model';
import { ISavedOrderModel } from 'src/app/shared/models/order.model';
import { AppActions } from 'src/app/redux/actions';

interface ICountEntry {
  0: string;
  1: number;
}

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss'],
})
export class ShopingCartComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  displayedColumns: string[] = [
    'checkbox',
    'column1',
    'column2',
    'column3',
    'column4',
    'column5',
    'column6',
    'menu',
  ];

  dataSource = new MatTableDataSource<ISavedOrderModel>();

  // db: ISavedOrderModel[] | null = null;
  db: ISavedOrderModel[] = [];

  selectedItems: ISavedOrderModel[] = [];

  promoCode = '';

  isCart = true;

  currency$ = this.store.select(AppSelectors.settings.selectCurrency);

  selectedCount = 0;

  selectedIndex = 0;

  ordersSubscr!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit() {
    this.isCart = this.route.snapshot.data['isCart'];

    this.dataSource = new MatTableDataSource(this.db);

    if (this.isCart) {
      this.ordersSubscr = this.store.select(AppSelectors.orders.selectOrdersList)
        // eslint-disable-next-line @ngrx/no-store-subscription
        .subscribe({
          next: (value) => {
            this.db = [...value];
            this.dataSource.data = this.db;
          },
        });
    } else {
      this.store.dispatch(AppActions.orders.ordersPayedLoad());
      this.ordersSubscr = this.store.select(AppSelectors.orders.selectPayedOrdersList)
        // eslint-disable-next-line @ngrx/no-store-subscription
        .subscribe({
          next: (value) => {
            this.db = [...value];
            this.dataSource.data = this.db;
          },
        });
    }

    if (!this.isCart) {
      this.displayedColumns = [
        'column1',
        'column2',
        'column3',
        'column4',
        'column5',
        'column6',
      ];
    }

    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'column1':
          return item.routes[0]?.flights[0]?.numberRace || '';
        case 'column3':
          return item.roundTrip === 1 ? 'Round Trip' : 'One way';
        case 'column4':
          return item.routes[0]?.flights[0]?.departureDateTime || '';
        case 'column5':
          return item.passengers.length;
        case 'column6':
          return parseFloat(this.getTotalCost(item));
        default:
          return '';
      }
    };
  }

  ngOnDestroy(): void {
    if (this.ordersSubscr) {
      this.ordersSubscr.unsubscribe();
    }
  }

  getPassengerCounts(passengers: IPassengerModel[]): ICountEntry[] {
    const counts = {
      Adult: 0,
      Children: 0,
      Infant: 0,
    };

    passengers.forEach((passenger) => {
      if (passenger.type === 'Adult') {
        counts.Adult++;
      } else if (passenger.type === 'Children') {
        counts.Children++;
      } else if (passenger.type === 'Infant') {
        counts.Infant++;
      }
    });
    return Object.entries(counts);
  }

  getTotalCost(element: ISavedOrderModel): string {
    const { routes } = element;
    const { passengers } = element;

    let totalCost = 0;
    for (const passenger of passengers) {
      for (const route of routes) {
        const { ticketsCost } = route;

        if (passenger.type === 'Adult') {
          totalCost += parseFloat(ticketsCost.adult.totalCost);
        } else if (passenger.type === 'Children') {
          totalCost += parseFloat(ticketsCost.children.totalCost);
        } else if (passenger.type === 'Infant') {
          totalCost += parseFloat(ticketsCost.infant.totalCost);
        }
      }
    }

    return totalCost.toFixed(2);
  }

  toggleItemSelection(item: ISavedOrderModel): void {
    const index = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems.splice(index, 1);
    }
    this.updateSelectedCount();
  }

  getSelectedTotalCost(): number {
    let totalCost = 0;

    for (const item of this.selectedItems) {
      const { routes } = item;
      const { passengers } = item;

      for (const passenger of passengers) {
        for (const route of routes) {
          const { ticketsCost } = route;

          if (passenger.type === 'Adult') {
            totalCost += parseFloat(ticketsCost.adult.totalCost);
          } else if (passenger.type === 'Children') {
            totalCost += parseFloat(ticketsCost.children.totalCost);
          } else if (passenger.type === 'Infant') {
            totalCost += parseFloat(ticketsCost.infant.totalCost);
          }
        }
      }
    }

    return parseFloat(totalCost.toFixed(2));
  }

  getAirportName(code: string): Observable<string> {
    return this.store.select(AppSelectors.general.selectCityByCode(code));
  }

  getDiscountedPrice(totalCost: number): number {
    let discount = 0;

    if (this.isPromoCodeValid()) {
      if (this.promoCode === 'cod10') {
        discount = 0.1;
      } else if (this.promoCode === 'cod20') {
        discount = 0.2;
      }
    }

    const discountedPrice = totalCost - totalCost * discount;
    return discountedPrice;
  }

  sortData(event: Sort): void {
    const data = this.dataSource.data.slice();

    if (!event.active || event.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const valueA = this.dataSource.sortingDataAccessor(a, event.active);
      const valueB = this.dataSource.sortingDataAccessor(b, event.active);

      return (valueA < valueB ? -1 : 1) * (event.direction === 'asc' ? 1 : -1);
    });
  }

  isPromoCodeValid(): boolean {
    return this.promoCode === 'cod10' || this.promoCode === 'cod20';
  }

  applyPromoCode(code: string): void {
    this.promoCode = code;
  }

  updateSelectedCount(): void {
    this.selectedCount = this.selectedItems.length;
  }

  setSelectedIndex(index: number): void {
    this.selectedIndex = index;
  }

  editItem(index: number) {
    // (index);
  }

  deleteItem(index: number) {
    const order = this.dataSource.data[index];
    this.store.dispatch(AppActions.orders.orderDelete({ orderId: order._id }));
  }

  payment() {
    if (this.selectedItems.length > 0) {
      const ordersId = this.selectedItems.map((el) => el._id);
      this.store.dispatch(AppActions.orders.orderPay({ ordersId }));
    }
  }

  addNewTrip() {
    this.router.navigate(['/']);
  }
}
