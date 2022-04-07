import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, UserProcess} from '../../types/types';
import {Reducers} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  email: '',
  avatarUrl: '',
};

export const userReducer = createSlice({
  name: Reducers.USER,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      console.log('REDUCER BEFORE ', state.authorizationStatus);
      [state.authorizationStatus, state.email, state.avatarUrl] = action.payload;
      console.log('REDUCER ', state.authorizationStatus);
    },
  },
});

export const {requireAuthorization} = userReducer.actions;
