import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card.model';

@Injectable()
export class CardService {
  private static readonly URL = 'cards';
  private api = '';

  constructor(
    private httpClient: HttpClient) {
    this.api = environment.api;
  }

  public GetCards(): Observable<Card[]> {
    const url = `${this.api}${CardService.URL}`;

    return this.httpClient.get<Card[]>(url);
  }
}
