import {createSlice} from '@reduxjs/toolkit';
import {MainData, Reducers} from '../../types/state';
import {Cities} from "../../types/types";

const initialState: MainData = {
  city: Cities.AMSTERDAM,
  places: [],
};

export const mainReducer = createSlice({
  name: Reducers.MAIN,
  initialState,
  reducers: {
    loadPlaces: (state, action) => {
      const { city } = action.payload;

      state.city = city
      state.places = state.places.filter(({city}) => {
        return city.name === state.city;
      })
    },
  },
});

export const {loadPlaces} = mainReducer.actions;
