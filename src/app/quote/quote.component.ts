import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: 'Be the flame, not the moth' },
    { id: 2, name: 'Above all, be the heroine of your life, not the victim.' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
