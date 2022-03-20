import {createSlice} from '@reduxjs/toolkit';
import {MainData, Reducers} from '../../types/state';
import {Cities, Options} from '../../types/types';

const initialState: MainData = {
  city: Cities.AMSTERDAM,
  places: [],
  sortingOption: Options.POPULAR,
};

export const mainReducer = createSlice({
  name: Reducers.MAIN,
  initialState,
  reducers: {
    setCurrentCity: (state, action) => {
      const { city } = action.payload;

      state.city = city;
    },
    loadPlaces: (state, action) => {
      const { places } = action.payload;
      state.places = places;
    },
    setSortOption: (state, action) => {
      const {option} = action.payload;

      state.sortingOption = option;
    },
  },
});

export const {setCurrentCity, loadPlaces, setSortOption} = mainReducer.actions;
