import { Component, OnInit } from '@angular/core';
import {HsApiService} from '../../services/api/HsApiService';
import {Card} from '../card-item/Card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  providers: [
    HsApiService
  ],
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[];
  page: number;
  total: number;
  loading: boolean;

  constructor(private service: HsApiService) { }

  ngOnInit(): void {
    this.loading = true;
     // this.service.fetchMetaData().subscribe(response => console.log(response));
    this.service.fetchCards().subscribe(response =>  {
        this.loading = false;
        this.cards = response.cards;
        this.page = response.page;
        this.total = response.pageCount;
      });
  }

}
