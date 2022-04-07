import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MainData, Reducers} from '../../types/state';
import {Cities, Hotel, Options} from '../../types/types';

const initialState: MainData = {
  city: Cities.AMSTERDAM,
  hotels: [],
  sortingOption: Options.POPULAR,
  favoriteHotels: [],
  activePlaceMouseId: -1,
};

export const mainReducer = createSlice({
  name: Reducers.MAIN,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;

    },
    loadHotels: (state, action: PayloadAction<Hotel[]>) => {
      state.hotels = action.payload;
    },
    loadFavoriteHotels: (state, action: PayloadAction<Hotel[]>) => {
      state.favoriteHotels = action.payload;
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
      state.hotels.forEach((hotel) => {
        if (hotel.id === action.payload.id) {
          hotel.isFavorite = !hotel.isFavorite;
        }
      });
    },
  },
});

export const {
  setCurrentCity,
  loadHotels,
  setSortOption,
  setFavoriteMain,
  loadFavoriteHotels,
  setActivePlaceMouseId,
} = mainReducer.actions;
