import {PlaceFavorites} from "./types";

export enum Reducers {
  MAIN = 'main',
}

export interface MainData {
  city: string;
  places: PlaceFavorites[];
}
