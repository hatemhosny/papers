import { RevealCardComponent } from '../reveal-card/reveal-card.component';
import { NbCardComponent } from '@nebular/theme/components/card/card.component';
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

interface ICard {
  size: string;
  status: string;
  accent: string;
}

@Component({
  selector: 'pfm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() size: string = '';
  @Input() status: string = '';
  @Input() accent: string = '';

}
