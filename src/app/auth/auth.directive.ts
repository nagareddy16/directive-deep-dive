import { AuthService } from './auth.service';
import { Permission } from './auth.model';
import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  constructor() { 
    effect(() => {
      if(this.authService.activePermission() === this.userType()){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }else {
        this.viewContainer.clear();
      }
    });
  }

}
