import {createSlice} from '@reduxjs/toolkit';
import {PlaceData, Reducers} from '../../types/state';

const initialState: PlaceData = {
  activePlaceId: -1,
  place: null,
  comments: [],
  nearbyOffers: [],
  isCurrentFavorite: false,
};

export const placeReducer = createSlice({
  name: Reducers.USER,
  initialState,
  reducers: {
    setActivePlaceId: (state, action) => {
      state.activePlaceId = action.payload;
    },
    loadPlace: (state, action) => {
      state.place = action.payload;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
    loadNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
    },
    setFavoriteHotel: (state, action) => {
      if (state.place !== null) {
        state.place.isFavorite = !state.place.isFavorite;
      }
    },
    setFavoriteNearbyOffers: (state, action) => {
      if (!state.nearbyOffers.length) {
        return;
      }
      state.nearbyOffers.forEach((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = !offer.isFavorite;
        }
      });
    },
  },
});

export const {
  setActivePlaceId,
  loadPlace,
  loadComments,
  loadNearbyOffers,
  setFavoriteHotel,
  setFavoriteNearbyOffers,
} = placeReducer.actions;
