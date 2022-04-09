import {Reducers, State} from '../../types/state';
import {CommentData, Hotel} from '../../types/types';

export const getPlace = (state: State): Hotel | null => state[Reducers.PLACE].hotel;
export const getIsHotelLoad = (state: State): boolean => state[Reducers.PLACE].isHotelLoad;
export const getComments = (state: State): CommentData[] => state[Reducers.PLACE].comments;
export const getNearbyHotels = (state: State): Hotel[] => state[Reducers.PLACE].nearbyHotels;
