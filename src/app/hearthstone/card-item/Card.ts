export interface Card {
  id: number;
  collectible: number;
  slug: string;
  classId: number;
  multiClassIds: [];
  cardTypeId: number;
  cardSetId: number;
  rarityId: number;
  artistName: string;
  manaCost: number;
  name: string;
  text: string;
  image: string;
  imageGold: string|null;
  flavorText: string;
  cropImage: string;
  childIds: [];
  keywordIds: [];
}
