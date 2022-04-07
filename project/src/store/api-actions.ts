import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiTemp} from '../types/state.js';
import {
  APIRoute,
  AuthData,
  AuthorizationStatus,
  CommentData,
  Hotel,
  UserData,
  NewComment,
  FavoriteHotel,
  AppRoute
} from '../types/types';
import {loadFavoriteHotels, loadHotels, setFavoriteMain} from './main-reducer/mainReducer';
import {loadHotel, loadComments, loadNearbyHotels, setFavoriteNearbyHotels, setFavoriteHotel} from './place-reducer/place-reducer';
import {requireAuthorization} from './user-reducer/user-reducer';
import {saveToken, dropToken} from '../services/token';
import browserHistory from '../browser-history';

export const fetchHotelsAction = createAsyncThunk<void, undefined, apiTemp>(
  'data/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.HOTELS);
      dispatch(loadHotels( data));
    } catch (error) {
      // console.log(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, apiTemp>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.LOGIN);
      dispatch(requireAuthorization([AuthorizationStatus.AUTH, data.email, data.avatarUrl]));
    } catch(error) {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, apiTemp>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.LOGIN, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorization([AuthorizationStatus.AUTH, data.email, data.avatarUrl]));
    } catch (error) {
      // console.log(error);
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, apiTemp>(
  'user/logout',
  async (_arg, { dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.LOGOUT);
      dropToken();
      dispatch(requireAuthorization([AuthorizationStatus.NO_AUTH, '', '']));
    } catch (error) {
      // console.log(error);
    }
  },
);

export const fetchOffer = createAsyncThunk<void, number, apiTemp>(
  'user/offer',
  async (id, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel>(`${APIRoute.HOTELS}/${id}`);
      dispatch(loadHotel(data));
    } catch (error) {
      // console.log(error);
    }
  },
);

export const fetchComments = createAsyncThunk<void, number, apiTemp>(
  'offer/comment',
  async (id, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<CommentData[]>(`${APIRoute.COMMENTS}/${id}`);
      dispatch(loadComments(data));
    } catch (error) {
      // console.log(error);
    }
  },
);

export const fetchNearHotels = createAsyncThunk<void, number, apiTemp>(
  'offer/nearHotels',
  async (id, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(`${APIRoute.HOTELS}/${id}/nearby`);
      dispatch(loadNearbyHotels(data));
    } catch (error) {
      // console.log(error);
    }
  },
);

export const createComment = createAsyncThunk<void, NewComment, apiTemp>(
  'offer/comment',
  async (newComment, { dispatch, extra: api}) => {
    try {
      const {comment, rating} = newComment.review;
      const {data} = await api.post<CommentData[]>(`${APIRoute.COMMENTS}/${newComment.idHotel}`, {comment, rating});
      dispatch(loadComments(data));
    } catch (error) {
      // console.log(error); // ToDO сделать обработку ошибок для всего
    }
  },
);

export const changeFavorite = createAsyncThunk<void, FavoriteHotel, apiTemp>(
  'offer/favorite',
  async ({id, isFavorite}, { dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Hotel>(`${APIRoute.FAVORITE}/${id}/${Number(isFavorite)}`);
      dispatch(setFavoriteMain(data));
      dispatch(setFavoriteNearbyHotels(data));
      dispatch(setFavoriteHotel(data.isFavorite));
      dispatch(fetchFavorites());
    } catch (error) {
      browserHistory.push(AppRoute.LOGIN);
    }
  },
);

export const fetchFavorites = createAsyncThunk<void, undefined, apiTemp>(
  'data/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.FAVORITE);
      dispatch(loadFavoriteHotels(data));
    } catch (error) {
      // console.log(error);
    }
  },
);
