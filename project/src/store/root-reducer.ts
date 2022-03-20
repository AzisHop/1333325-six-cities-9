import {combineReducers} from '@reduxjs/toolkit';

import {Reducers} from '../types/state';
import {mainReducer} from './main-reducer/mainReducer';

export const rootReducer = combineReducers({
  [Reducers.MAIN]: mainReducer.reducer,
});
