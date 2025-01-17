import { LogDirective } from './log.directive';
import { AuthService } from './auth/auth.service';
import { Component, computed, inject } from '@angular/core';
import { LearningPathComponent } from "./learning-path/learning-path.component";
import { AuthComponent } from "./auth/auth.component";
import { NgIf } from '@angular/common';
import { AuthDirective } from './auth/auth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LearningPathComponent, AuthComponent, NgIf, AuthDirective, LogDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private authService = inject(AuthService); 

  isAdmin = computed(() => this.authService.activePermission() === 'admin'); 
}
