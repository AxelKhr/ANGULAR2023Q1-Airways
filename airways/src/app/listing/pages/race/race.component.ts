import { Component, OnInit } from '@angular/core';
import { jsonData, airports } from './data';

interface IResponsiveOption {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
}

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent implements OnInit {
  db = JSON.parse(jsonData);

  data: any = { ...this.db };

  hideCalendar = false;

  buttonText = 'Select';

  activeRoute = 2; // активная карточка

  currentDate = new Date();

  responsiveOptions: IResponsiveOption[] = [
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '440px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnInit() {
    const windowWidth = window.innerWidth;
    this.setOldDates(this.data.routes);
    this.setActiveRoute(windowWidth);
    this.setInitialActive();
  }

  setOldDates(data: any): void {
    const today = this.currentDate.getDate();
    const firstItem = data[0];
    const firstItemDate = new Date(firstItem.departureDate);
    const hasTodayDate = firstItemDate.getDate() === today;

    if (hasTodayDate) {
      const additionalItems = [];
      for (let i = 2; i >= 1; i -= 1) {
        const previousDate = new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          today - i,
        ).toISOString();
        const newItem = {
          ...firstItem,
          departureDate: previousDate,
          flights: [],
        };
        additionalItems.push(newItem);
      }

      data.splice(0, 0, ...additionalItems);
    }
  }

  compareDates(departureDate: string): boolean {
    const currentDate = new Date();
    const formattedDepartureDate = new Date(departureDate);
    return formattedDepartureDate < new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    );
  }

  setInitialActive(): void {
    this.data.routes[this.activeRoute].isActive = true;
  }

  setActiveRoute(windowWidth: number): void {
    if (windowWidth < 440) {
      this.activeRoute = 0;
    } else if (windowWidth < 768) {
      this.activeRoute = 1;
    } else {
      this.activeRoute = 2;
    }
  }

  setActive(route: any): void {
    this.activeRoute = this.data.routes.findIndex((r: any) => r === route);
    this.data.routes.forEach((r: any) => (r.isActive = false));
    route.isActive = true;
  }

  getMin(num1: number, num2: number | undefined) {
    if (num2 === undefined) {
      return 0;
    }
    if (num1 < num2) {
      return 0;
    }
    return 1;
  }

  getColor(opacity: number, freeSeats: number, totalSeats: number): string {
    if (freeSeats < 10) {
      return `rgba(179, 38, 30, ${opacity})`;
    }
    if ((freeSeats / totalSeats) * 100 < 50) {
      return `rgba(241, 201, 51, ${opacity})`;
    }
    return `rgba(46, 125, 50, ${opacity})`;
  }

  getAirportName(code: string): string {
    const airport = airports.find((a) => a.code === code);
    if (!airport) {
      return code;
    }
    const airportName = airport.name
      .replace(/International/g, '')
      .replace(/Airport/g, '')
      .trim();
    return airportName;
  }

  getAirportTimezone(code: string): string {
    const airport = airports.find((a) => a.code === code);
    if (!airport) {
      return '';
    }
    const airportZone = airport.timezone;
    const timeZoneSign = airportZone >= 0 ? '+' : '-';
    const timeZoneValue = Math.abs(airportZone);
    return timeZoneSign + timeZoneValue;
  }

  buttonClick(): void {
    this.hideCalendar = !this.hideCalendar;
    this.buttonText = this.hideCalendar ? 'Edit' : 'Select';
  }
}
