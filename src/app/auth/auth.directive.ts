import { AuthService } from './auth.service';
import { Permission } from './auth.model';
import { Directive, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);

  constructor() { 
    effect(() => {
      if(this.authService.activePermission() === this.userType()){
        console.log("Show Element.");
      }else {
        console.log("Don't show Element");
      }
    });
  }

}
