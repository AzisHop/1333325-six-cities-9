import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PlaceData, Reducers} from '../../types/state';
import {CommentData, Hotel, StatusCommentForm} from '../../types/types';

const initialState: PlaceData = {
  activePlaceId: -1,
  hotel: null,
  comments: [],
  nearbyHotels: [],
  isCurrentFavorite: false,
  isHotelLoad: false,
  isError: StatusCommentForm.DONE,
};

export const placeReducer = createSlice({
  name: Reducers.USER,
  initialState,
  reducers: {
    setActivePlaceId: (state, action: PayloadAction<number>) => {
      state.activePlaceId = action.payload;
    },
    setIsHotelLoad: (state, action: PayloadAction<boolean>) => {
      state.isHotelLoad = action.payload;
    },
    setIsError: (state, action: PayloadAction<StatusCommentForm>) => {
      state.isError = action.payload;
    },
    loadHotel: (state, action: PayloadAction<Hotel>) => {
      state.hotel = action.payload;
      state.isHotelLoad = true;
    },
    loadComments: (state, action: PayloadAction<CommentData[]>) => {
      state.comments = action.payload;
    },
    loadNearbyHotels: (state, action: PayloadAction<Hotel[]>) => {
      state.nearbyHotels = action.payload;
    },
    setFavoriteHotel: (state, action: PayloadAction<boolean>) => {
      if (state.hotel !== null) {
        state.hotel.isFavorite = action.payload;
      }
    },
    setFavoriteNearbyHotels: (state, action: PayloadAction<Hotel>) => {
      if (!state.nearbyHotels.length) {
        return;
      }
      state.nearbyHotels.forEach((hotel) => {
        if (hotel.id === action.payload.id) {
          hotel.isFavorite = !hotel.isFavorite;
        }
      });
    },
  },
});

export const {
  setActivePlaceId,
  loadHotel,
  loadComments,
  loadNearbyHotels,
  setFavoriteHotel,
  setFavoriteNearbyHotels,
  setIsHotelLoad,
  setIsError,
} = placeReducer.actions;
