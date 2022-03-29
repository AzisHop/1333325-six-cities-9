import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, UserProcess} from '../../types/types';
import {Reducers} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  email: '',
  avatarUrl: '',
};

export const userReducer = createSlice({
  name: Reducers.USER,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      [state.authorizationStatus, state.email, state.avatarUrl] = action.payload;
    },
  },
});

export const {requireAuthorization} = userReducer.actions;
