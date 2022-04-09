import {CommentData, Hotel, Options, UserProcess} from './types';
import {store} from '../store';
import {AxiosInstance} from 'axios';

export enum Reducers {
  MAIN = 'main',
  USER = 'user',
  PLACE = 'place',
}

export interface MainData {
  city: string;
  hotels: Hotel[];
  sortingOption: Options;
  favoriteHotels: Hotel[];
  activeHotelId: number;
}

export interface PlaceData {
  activePlaceId: number;
  hotel: Hotel | null;
  comments: CommentData[]
  nearbyHotels: Hotel[]
  isCurrentFavorite: boolean;
  isHotelLoad: boolean;
}

export interface ApiTemp {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}

export interface PayloadActionAuthorization {
  userProcess: UserProcess[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
