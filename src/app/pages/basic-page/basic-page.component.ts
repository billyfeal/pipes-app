import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localeService = inject(LocaleService);

  nameLower = signal('william');
  nameUpper = signal('WILLIAM');
  fullName = signal('WilliaM FEal');

  currentDate = signal(new Date());
  currentLocale = this.localeService.getLocale;

  tickingEffect = effect(onCleanup => {
    const interval = setInterval(() => {
      this.currentDate.set(new Date());
    }, 1000);
   
    onCleanup(() => {
      clearInterval(interval)
    })
  }); 
}
