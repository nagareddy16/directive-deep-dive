import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host:{
    '(click)': 'onConfirmPageLeave($event)'
  }
})
export class SafeLinkDirective {

  constructor() { }

  onConfirmPageLeave(event : MouseEvent){
    const wantsToLeave = window.confirm("Do you wan to leave the app");

    if(wantsToLeave){
      return;
    }

    event.preventDefault();
  }

}
