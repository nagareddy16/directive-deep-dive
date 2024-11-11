import { LogDirective } from './log.directive';
import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host:{
    '(click)': 'onConfirmPageLeave($event)'
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
  queryParam = input('myApp');
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() { }

  onConfirmPageLeave(event : MouseEvent){
    const wantsToLeave = window.confirm("Do you wan to leave the app");

    if(wantsToLeave){
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }

}
