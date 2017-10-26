import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pfm-reveal-card',
  templateUrl: './reveal-card.component.html',
  styleUrls: ['./reveal-card.component.scss'],
})
export class RevealCardComponent {

  @Input() revealed: boolean = false;
  @Input() size: string = 'medium';
  // TODO allow dynamic height based on larger card (front/back)

}
