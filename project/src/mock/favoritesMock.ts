import {PlaceFavorites} from '../types/types';


export const favoritesPage: PlaceFavorites[] = [
  {
    'city': {
      'name': 'Amsterdam',
    },
    'id': 0,
    'isFavorite': true,
    'isPremium': true,

    'previewImage': 'img/apartment-01.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'city': {
      'name': 'Amsterdam',
    },
    'id': 1,
    'isFavorite': true,
    'isPremium': false,

    'previewImage': 'img/apartment-02.jpg',
    'price': 300,
    'rating': 3,
    'title': 'Bars',
    'type': 'apartment',
  },
  {
    'city': {
      'name': 'Cologne',
    },
    'id': 2,
    'isFavorite': true,
    'isPremium': false,

    'previewImage': 'img/apartment-03.jpg',
    'price': 200,
    'rating': 5,
    'title': 'Bartsilla',
    'type': 'apartment',
  },
];
