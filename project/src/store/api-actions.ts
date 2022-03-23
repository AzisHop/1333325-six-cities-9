import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
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
import {loadPlaces, setFavoriteMain} from './main-reducer/mainReducer';
import {loadPlace, loadComments, loadNearbyOffers, setFavoriteNearbyOffers, setFavoriteHotel} from './place-reducer/place-reducer';
import {requireAuthorization} from './user-reducer/user-reducer';
import {saveToken, dropToken} from '../services/token';
import browserHistory from '../browser-history';

export const fetchHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(APIRoute.HOTELS);
      dispatch(loadPlaces( data));
    } catch (error) {
      // console.log(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: { email } } = await api.get<UserData>(APIRoute.LOGIN);
      dispatch(requireAuthorization([AuthorizationStatus.AUTH, email]));
    } catch(error) {
      // console.log(error);
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.LOGIN, {email, password});
      saveToken(token);
      dispatch(requireAuthorization([AuthorizationStatus.AUTH, email]));
    } catch (error) {
      // console.log(error);
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.LOGOUT);
      dropToken();
      dispatch(requireAuthorization([AuthorizationStatus.NO_AUTH, '']));
    } catch (error) {
      // console.log(error);
    }
  },
);

export const fetchOffer = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/offer',
  async (id, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel>(`${APIRoute.HOTELS}/${id}`);
      dispatch(loadPlace(data));
    } catch (error) {
      // console.log(error);
    }
  },
);

export const fetchComments = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
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

export const fetchNearOffers = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/nearOffers',
  async (id, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Hotel[]>(`${APIRoute.HOTELS}/${id}/nearby`);
      dispatch(loadNearbyOffers(data));
    } catch (error) {
      // console.log(error);
    }
  },
);

export const createComment = createAsyncThunk<void, NewComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/comment',
  async (newComment, { dispatch, extra: api}) => {
    try {
      const {comment, rating} = newComment.review;
      const {data} = await api.post<CommentData[]>(`${APIRoute.COMMENTS}/${newComment.idOffer}`, {comment, rating});
      dispatch(loadComments(data));
    } catch (error) {
      // console.log(error); // ToDO сделать обработку ошибок для всего
    }
  },
);

export const changeFavorite = createAsyncThunk<void, FavoriteHotel, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/favorite',
  async ({id, isFavorite}, { dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Hotel>(`${APIRoute.FAVORITE}/${id}/${Number(isFavorite)}`);
      dispatch(setFavoriteMain(data));
      dispatch(setFavoriteNearbyOffers(data));
      dispatch(setFavoriteHotel(data.isFavorite));
    } catch (error) {
      browserHistory.push(AppRoute.LOGIN);
    }
  },
);
