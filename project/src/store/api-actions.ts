import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiTemp} from '../types/state.js';
import {
  APIRoute,
  AuthData,
  AuthorizationStatus,
  CommentData,
  Hotel,
  UserData,
  NewComment,
  FavoriteHotel,
  AppRoute,
  StatusCommentForm
} from '../types/types';
import {loadFavoriteHotels, loadHotels, setFavoriteMain} from './main-reducer/main-reducer';
import {
  loadHotel,
  loadComments,
  loadNearbyHotels,
  setFavoriteNearbyHotels,
  setFavoriteHotel,
  setIsError
} from './place-reducer/place-reducer';
import {requireAuthorization} from './user-reducer/user-reducer';
import {saveToken, dropToken} from '../services/token';
import browserHistory from '../browser-history';
import {handleError} from '../services/handle-error';

export const fetchHotelsAction = createAsyncThunk<void, undefined, ApiTemp>(
  'data/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.HOTELS);
      dispatch(loadHotels( data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, ApiTemp>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.LOGIN);
      dispatch(requireAuthorization([AuthorizationStatus.AUTH, data.email, data.avatarUrl]));
    } catch(error) {
      dispatch(requireAuthorization([AuthorizationStatus.NO_AUTH]));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, ApiTemp>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.LOGIN, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorization([AuthorizationStatus.AUTH, data.email, data.avatarUrl]));
    } catch (error) {
      handleError(error);
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ApiTemp>(
  'user/logout',
  async (_arg, { dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.LOGOUT);
      dropToken();
      dispatch(requireAuthorization([AuthorizationStatus.NO_AUTH, '', '']));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchOffer = createAsyncThunk<void, number, ApiTemp>(
  'user/offer',
  async (id, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel>(`${APIRoute.HOTELS}/${id}`);
      dispatch(loadHotel(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchComments = createAsyncThunk<void, number, ApiTemp>(
  'offer/comment',
  async (id, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<CommentData[]>(`${APIRoute.COMMENTS}/${id}`);
      dispatch(loadComments(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchNearHotels = createAsyncThunk<void, number, ApiTemp>(
  'offer/nearHotels',
  async (id, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(`${APIRoute.HOTELS}/${id}/nearby`);
      dispatch(loadNearbyHotels(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const createComment = createAsyncThunk<void, NewComment, ApiTemp>(
  'offer/comment',
  async (newComment, { dispatch, extra: api}) => {
    try {
      const {comment, rating} = newComment.review;
      const {data} = await api.post<CommentData[]>(`${APIRoute.COMMENTS}/${newComment.idHotel}`, {comment, rating});
      dispatch(loadComments(data));
      dispatch(setIsError(StatusCommentForm.UPDATE));
    } catch (error) {
      dispatch(setIsError(StatusCommentForm.ERROR));
      handleError(error);
    }
  },
);

export const changeFavorite = createAsyncThunk<void, FavoriteHotel, ApiTemp>(
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
      handleError(error);
    }
  },
);

export const fetchFavorites = createAsyncThunk<void, undefined, ApiTemp>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.FAVORITE);
      dispatch(loadFavoriteHotels(data));
    } catch (error) {
      handleError(error);
    }
  },
);
