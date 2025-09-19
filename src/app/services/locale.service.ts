import { Injectable, signal } from '@angular/core';

type LocaleType = 'en' | 'es' | 'fr';


@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale = signal<LocaleType>('en');

  constructor() { 
    const savedLocale = localStorage.getItem('locale') as LocaleType ?? 'en';
    this.currentLocale.set(savedLocale);
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(newLocale: LocaleType) {
    this.currentLocale.set(newLocale)
    localStorage.setItem('locale', newLocale);
    window.location.reload();
  }

}
