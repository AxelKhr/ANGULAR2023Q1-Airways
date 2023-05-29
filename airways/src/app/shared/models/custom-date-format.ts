export interface ICustomDateFormat {
  parse: {
    dateInput: string;
  };
  display: {
    dateInput: string;
    monthLabel?: string;
    monthYearLabel: string;
    dateA11yLabel: string;
    monthYearA11yLabel: string;
  };
}
