import {combineReducers} from '@reduxjs/toolkit';

import {Reducers} from '../types/state';
import {mainReducer} from './main-reducer/mainReducer';
import {userReducer} from './user-reducer/user-reducer';
import {placeReducer} from './place-reducer/place-reducer';

export const rootReducer = combineReducers({
  [Reducers.MAIN]: mainReducer.reducer,
  [Reducers.USER]: userReducer.reducer,
  [Reducers.PLACE]: placeReducer.reducer,
});
