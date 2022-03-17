import {Hotel} from '../types/types';

export const hotelMock: Hotel = {
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': [
    'Heating',
  ],
  'host': {
    'avatarUrl': 'img/avatar.svg',
    'id': 3,
    'isPro': true,
    'name': 'Angelina',
  },
  'id': 1,
  'images': [
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/apartment-02.jpg',
  ],
  'isFavorite': true,
  'isPremium': false,
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8,
  },
  'maxAdults': 4,
  'previewImage': 'img/avatar.svg',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
};
