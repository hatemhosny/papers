import { Component, Input } from '@angular/core';

@Component({
  selector: 'pfm-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent {

  @Input() flipped: boolean = false;
  @Input() size: string = 'medium';
  // TODO allow dynamic height based on larger card (front/back)

}
