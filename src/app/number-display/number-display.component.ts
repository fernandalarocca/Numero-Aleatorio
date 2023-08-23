import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-display',
  template: '<p>Número aleatório: {{ number }}</p>',
})
export class NumberDisplayComponent {
  @Input() number: number | undefined;
}
