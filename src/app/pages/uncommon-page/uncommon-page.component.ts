import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'William',
  gender: 'male',
  age: 42,
  location: 'California'
}

const client2 = {
  name: 'Melisa',
  gender: 'female',
  age: 30,
  location: 'New York'
}


@Component({
  selector: 'uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18nSelect
  client = signal(client1);

  genderMap = {
    male: 'He is',
    female: 'She is',
    other: 'They are'
  }  

  changeClient(): void {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  // i18nPlural
  clients = signal<string[]>(['William', 'Melisa', 'Juan', 'Ana', 'Laura', 'Carlos']);

  clientCountMap = {
    '=0': 'There is no client waiting.',
    '=1': 'There is one client waiting.',
    other: 'There are # clients waiting.'
  }

  delCleint(): void {
    this.clients.update(prev => prev.slice(1));
  }

  //AsyncPipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data loaded from promise');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    tap(value => console.log('Interval value', value))
  );

 }
