import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-random-number',
  template: `
    <button (click)="generateRandomNumber()">Gerar número aleatório</button>
    <app-number-display [number]="randomNumber"></app-number-display>
  `,
})
export class RandomNumberComponent implements OnInit {
  randomNumber: number | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  generateRandomNumber() {
    this.randomNumber = this.dataService.getRandomNumber();
  }
}
