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

export interface PlaceType {
  id: number;
  price: number;
  title: string;
  type: string;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
}

export interface PlaceFavorites {
  city: {
    name: string;
  };
  id: number;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export interface CitiesFavorites {
  Paris: PlaceType[];
  Cologne: PlaceType[];
  Brussels: PlaceType[];
  Amsterdam: PlaceType[];
  Hamburg: PlaceType[];
  Dusseldorf: PlaceType[];
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
  PROPERTY = 'property',
}
