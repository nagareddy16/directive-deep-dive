import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host:{
    '(click)': 'onConfirmPageLeave($event)'
  }
})
export class SafeLinkDirective {
  queryParam = input('myApp');

  constructor() { }

  onConfirmPageLeave(event : MouseEvent){
    const wantsToLeave = window.confirm("Do you wan to leave the app");

    if(wantsToLeave){
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }

}
