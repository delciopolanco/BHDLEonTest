import { Component } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent {

  public cards: Card[];
  public isLoading: boolean = true;

  public slideOpts = {
    speed: 100
  };

  constructor(private cardService: CardService) {
    this.getCards();
  }

  async getCards() {
    this.cards = await this.cardService.GetCards().toPromise();
    this.isLoading = false;
  }

}
