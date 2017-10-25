import { Component, Input } from '@angular/core';

@Component({
  selector: 'pfm-reveal-card',
  templateUrl: './reveal-card.component.html',
  styleUrls: ['./reveal-card.component.scss'],
})
export class RevealCardComponent {

  @Input() revealed: boolean = false;

}
