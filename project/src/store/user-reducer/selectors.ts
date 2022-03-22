import {Reducers, State} from '../../types/state';
import {AuthorizationStatus} from '../../types/types';

export const getEmail = (state: State): string => state[Reducers.USER].email;
export const getAuth = (state: State): AuthorizationStatus => state[Reducers.USER].authorizationStatus;
