import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal('william');
  nameUpper = signal('WILLIAM');
  fullName = signal('WilliaM FEal');

  currentDate = signal(new Date());

  tickingEffect = effect(onCleanup => {
    const interval = setInterval(() => {
      this.currentDate.set(new Date());
    }, 1000);
   
    onCleanup(() => {
      clearInterval(interval)
    })
  }); 
}
