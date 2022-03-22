export enum RatingStars {
  ONE = '20%',
  TWO = '40%',
  TREE = '60%',
  FOUR = '80%',
  FIVE = '100%',
  NONE = '',
}

export enum TypeHousing {
  APARTMENT = 'apartment',
  ROOM = 'room',
  HOUSE = 'house',
  HOTEL = 'hotel',
}

export enum Cities {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
}

export interface PageInfo {
  typePage: TypePage;
}

export enum TypePage {
  MAIN = 'main',
  FAVORITES = 'favorites',
  OFFER = 'property',
}

export interface Hotel {
  bedrooms?: number
  city: {
    location?: {
      latitude?: number
      longitude?: number
      zoom?: number
    }
    name: string
  }
  description?: string
  goods?: [string]
  host?: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
  id: number
  images?: string[]
  isFavorite: boolean
  isPremium: boolean
  location?: {
    latitude: number
    longitude: number
    zoom: number
  }
  maxAdults?: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
}

export interface CommentData {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
}

export const stars = 5;

export enum Options {
  POPULAR = 'Popular',
  HIGH = 'Price: low to high',
  LOW = 'Price: high to low',
  TOP = 'Top rated first',
}

export enum AppRoute {
  LOGIN = '/login',
  FAVORITES = '/favorites',
  ROOM = '/offer',
  ROOT = '/',
  // Game = '/game'
}

export const APIRoute = {
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITE: '/favorite',
  COMMENTS: '/comments',
};

export interface AuthData {
  email: string;
  password: string;
}

export interface UserData {
  id: number;
  email: string;
  token: string;
}

export enum AuthorizationStatus {
  AUTH = 'auth',
  NO_AUTH = 'no_auth',
  UNKNOWN = 'unknown',
}

export interface UserProcess {
  authorizationStatus: AuthorizationStatus;
  email: string;
}

export interface NewComment {
  idOffer: number;
  review: {
    comment: string;
    rating: number;
  }
}

export interface FavoriteHotel {
  id: number;
  isFavorite: boolean;
}
