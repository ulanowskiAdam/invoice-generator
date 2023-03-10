import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  getTodayDate() {
    const today = new Date();
    return today.toLocaleDateString();
  }

  futureDate() {
    const today = new Date();
    const futureDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
    return futureDate.toLocaleDateString();
  }
}
