import {Reducers, State} from '../../types/state';
import {CommentData, Hotel} from '../../types/types';

export const getPlace = (state: State): Hotel | null => state[Reducers.PLACE].place;
export const getComments = (state: State): CommentData[] => state[Reducers.PLACE].comments;
export const getNearbyOffers = (state: State): Hotel[] => state[Reducers.PLACE].nearbyHotels;
