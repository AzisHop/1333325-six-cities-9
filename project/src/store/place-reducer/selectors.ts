import {Reducers, State} from '../../types/state';
import {CommentData, Hotel} from '../../types/types';

export const getPlace = (state: State): Hotel | null => state[Reducers.PLACE].place;
export const getComments = (state: State): CommentData[] => state[Reducers.PLACE].comments;
export const getNearbyOffers = (state: State): Hotel[] => state[Reducers.PLACE].nearbyOffers;
export const getRating = (state: State): number => state[Reducers.PLACE].rating;
export const getIsDisabled = (state: State): boolean => state[Reducers.PLACE].isDisabled;


