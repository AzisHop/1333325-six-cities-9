import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PlaceData, Reducers} from '../../types/state';
import {CommentData, Hotel} from '../../types/types';

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
    setActivePlaceId: (state, action: PayloadAction<number>) => {
      state.activePlaceId = action.payload;
    },
    loadPlace: (state, action: PayloadAction<Hotel>) => {
      state.place = action.payload;
    },
    loadComments: (state, action: PayloadAction<CommentData[]>) => {
      state.comments = action.payload;
    },
    loadNearbyOffers: (state, action: PayloadAction<Hotel[]>) => {
      state.nearbyOffers = action.payload;
    },
    setFavoriteHotel: (state, action: PayloadAction<boolean>) => {
      if (state.place !== null) {
        state.place.isFavorite = action.payload;
      }
    },
    setFavoriteNearbyOffers: (state, action: PayloadAction<Hotel>) => {
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
