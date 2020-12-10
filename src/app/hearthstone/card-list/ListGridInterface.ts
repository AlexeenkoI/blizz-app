import {GridInterface} from '../../GridInterface';
import {Card} from '../card-item/Card';

export interface ListGridInterface extends GridInterface{
  cards: Card[];
  cardCount: number;
}
