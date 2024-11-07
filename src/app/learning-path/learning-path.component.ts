import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';

@Component({
  selector: 'app-learning-path',
  standalone: true,
  templateUrl: './learning-path.component.html',
  styleUrl: './learning-path.component.css',
  imports: [SafeLinkDirective]
})
export class LearningPathComponent {

  constructor(){
    console.log("Safe link to use");
  }
}
