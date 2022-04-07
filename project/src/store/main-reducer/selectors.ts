import {Reducers, State} from '../../types/state';
import {Hotel, Options} from '../../types/types';
import {createSelector} from 'reselect';

export const getCity = (state: State): string => state[Reducers.MAIN].city;
export const getHotels = (state: State): Hotel[] => state[Reducers.MAIN].hotels;
export const getSortOption = (state: State): Options => state[Reducers.MAIN].sortingOption;
export const getFavoriteHotels = (state: State) : Hotel[] => state[Reducers.MAIN].favoriteHotels;
export const getActiveHotelId = (state: State): number => state[Reducers.MAIN].activeHotelId;

export const getOrderedHotels = createSelector(
  getSortOption,
  getCity,
  getHotels,
  (sortBy, filterBy, HotelsMain) => {
    const hotels = HotelsMain
      .filter(({city}) => city.name === filterBy);
    switch (sortBy) {
      case Options.HIGH:
        return hotels.sort((hotel1, hotel2) => hotel2.price - hotel1.price);
      case Options.LOW:
        return hotels.sort((hotel1, hotel2) => hotel1.price - hotel2.price);
      case Options.TOP:
        return hotels.sort((hotel1, hotel2) => hotel2.rating - hotel1.rating);
      default:
        return hotels;
    }
  });

