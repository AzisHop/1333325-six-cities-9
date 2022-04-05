import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MainData, Reducers} from '../../types/state';
import {Cities, Hotel, Options} from '../../types/types';

const initialState: MainData = {
  city: Cities.AMSTERDAM,
  places: [],
  sortingOption: Options.POPULAR,
  favoritePlaces: [],
  activePlaceMouseId: -1,
};

export const mainReducer = createSlice({
  name: Reducers.MAIN,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;

    },
    loadPlaces: (state, action: PayloadAction<Hotel[]>) => {
      state.places = action.payload;
    },
    loadFavoritePlaces: (state, action: PayloadAction<Hotel[]>) => {
      state.favoritePlaces = action.payload;
    },
    setSortOption: (state, action: PayloadAction<Options>) => {
      state.sortingOption = action.payload;
    },
    setActivePlaceMouseId: (state, action: PayloadAction<number>) => {
      state.activePlaceMouseId = action.payload;
    },
    setActivePlaceMouseLocation: (state, action: PayloadAction<number>) => {
      state.activePlaceMouseId = action.payload;
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

export const {
  setCurrentCity,
  loadPlaces,
  setSortOption,
  setFavoriteMain,
  loadFavoritePlaces,
  setActivePlaceMouseId,
} = mainReducer.actions;
