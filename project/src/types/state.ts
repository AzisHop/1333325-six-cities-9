import {CommentData, Hotel, Options} from './types';
import {store} from '../store';
import {AxiosInstance} from "axios";

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

export interface apiTemp {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
