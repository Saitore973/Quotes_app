import { Component, } from '@angular/core';
import { Quote } from './quote';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes: Quote[] = [
    { id: 1, name: 'Be the flame, not the moth' },
    { id: 2, name: 'Above all, be the heroine of your life, not the victim.' },

  ];

  
}
