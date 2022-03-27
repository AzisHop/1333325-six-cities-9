import {CommentData, Hotel, Options} from './types';
import {store} from '../store';

export enum Reducers {
  MAIN = 'main',
  USER = 'user',
  PLACE = 'place',
}

export interface MainData {
  city: string;
  places: Hotel[];
  sortingOption: Options;
}

export interface PlaceData {
  activePlaceId: number;
  place: Hotel | null;
  comments: CommentData[]
  nearbyOffers: Hotel[]
  isCurrentFavorite: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
