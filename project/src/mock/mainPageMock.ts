import {PlacesProps} from '../components/place/placesList';
import {TypeHousing} from '../types/types';

// export interface PlaceProps {
//   id: number;
//   price: number;
//   title: string;
//   type: TypeHousing;
//   image: string;
//   isPremium: boolean;
//   isBookmark: boolean;
//   rating: number;
//
// }

export const data : PlacesProps ={
  places: [
    {
      id: 0,
      price: 120,
      title: 'Beautiful &amp; luxurious apartment at great location',
      type: TypeHousing.APARTMENT,
      previewImage: 'img/apartment-01.jpg',
      isPremium: true,
      isFavorite: false,
      rating: 4.1,
    },
    {
      id: 1,
      price: 330,
      title: 'Good',
      type: TypeHousing.HOTEL,
      previewImage: 'img/apartment-02.jpg',
      isPremium: false,
      isFavorite: true,
      rating: 2,
    },
    {
      id: 2,
      price: 244,
      title: 'Bars',
      type: TypeHousing.APARTMENT,
      previewImage: 'img/apartment-03.jpg',
      isPremium: true,
      isFavorite: true,
      rating: 3.6,
    },
    {
      id: 3,
      price: 112,
      title: 'Barsuk',
      type: TypeHousing.ROOM,
      previewImage: 'img/apartment-small-03.jpg',
      isPremium: true,
      isFavorite: false,
      rating: 3.3,
    },
    {
      id: 4,
      price: 211,
      title: 'bizarro',
      type: TypeHousing.APARTMENT,
      previewImage: 'img/apartment-small-04.jpg',
      isPremium: false,
      isFavorite: false,
      rating: 4.1,
    },
    {
      id: 5,
      price: 300,
      title: 'Bimo',
      type: TypeHousing.HOUSE,
      previewImage: 'img/room.jpg',
      isPremium: false,
      isFavorite: false,
      rating: 5,
    },
  ],
};
