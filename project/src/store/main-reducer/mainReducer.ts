import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MainData, Reducers} from '../../types/state';
import {Cities, Hotel, Options} from '../../types/types';

const initialState: MainData = {
  city: Cities.AMSTERDAM,
  places: [],
  sortingOption: Options.POPULAR,
};

export const mainReducer = createSlice({
  name: Reducers.MAIN,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<Cities>) => {
      state.city = action.payload;

    },
    loadPlaces: (state, action: PayloadAction<Hotel[]>) => {
      state.places = action.payload;
    },
    setSortOption: (state, action: PayloadAction<Options>) => {
      state.sortingOption = action.payload;
    },
    setFavoriteMain: (state, action: PayloadAction<Hotel>) => {
      state.places.forEach((place) => {
        if (place.id === action.payload.id) {
          place.isFavorite = !place.isFavorite;
        }
      });
    },
  },
});

export const {setCurrentCity, loadPlaces, setSortOption, setFavoriteMain} = mainReducer.actions;
