import {Reducers, State} from '../../types/state';
import {Hotel, Options} from '../../types/types';

export const getCity = (state: State): string => state[Reducers.MAIN].city;
export const getPlaces = (state: State): Hotel[] => state[Reducers.MAIN].places;
export const getSortOption = (state: State): Options => state[Reducers.MAIN].sortingOption;
