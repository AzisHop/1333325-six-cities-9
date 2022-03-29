import {Reducers, State} from '../../types/state';
import {Hotel, Options} from '../../types/types';
import {createSelector} from 'reselect';

export const getCity = (state: State): string => state[Reducers.MAIN].city;
export const getPlaces = (state: State): Hotel[] => state[Reducers.MAIN].places;
export const getSortOption = (state: State): Options => state[Reducers.MAIN].sortingOption;

export const getOrderedPlaces = createSelector(
  getSortOption,
  getCity,
  getPlaces,
  (sortBy, filterBy, placesMain) => {
    const places = placesMain
      .filter(({city}) => city.name === filterBy);
    switch (sortBy) {
      case Options.HIGH:
        return places.sort((place1, place2) => place2.price - place1.price);
      case Options.LOW:
        return places.sort((place1, place2) => place1.price - place2.price);
      case Options.TOP:
        return places.sort((place1, place2) => place2.rating - place1.rating);
      default:
        return places;
    }
  });

