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
  HOTEL = 'property',
}

export interface Hotel {
  bedrooms?: number
  city: {
    location: {
      latitude: number
      longitude: number
      zoom: number
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
  avatarUrl: string;
}

export enum AuthorizationStatus {
  AUTH = 'auth',
  NO_AUTH = 'no_auth',
  UNKNOWN = 'unknown',
}

export interface UserProcess {
  authorizationStatus: AuthorizationStatus;
  email: string;
  avatarUrl: string;
}

export interface NewComment {
  idHotel: number;
  review: {
    comment: string;
    rating: number;
  }
}

export interface FavoriteHotel {
  id: number;
  isFavorite: boolean;
}

export interface City {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  },
  name: string;
}

export const CitiesLocation: City[] = [
  {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
    name: 'Dusseldorf',
  },
];
