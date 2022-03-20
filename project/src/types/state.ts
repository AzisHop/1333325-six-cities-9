import {Hotel, Options} from './types';
import {store} from '../store';

export enum Reducers {
  MAIN = 'main',
}

export interface MainData {
  city: string;
  places: Hotel[];
  sortingOption: Options;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
