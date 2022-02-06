import { Component, } from '@angular/core';
import { Quote } from './quote';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faCoffee = faCoffee;
}
