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

export const data : PlacesProps = [
  {
    id: 0,
    price: 120,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: TypeHousing.APARTMENT,
    image: 'img/apartment-01.jpg',
    isPremium: true,
    isBookmark: false,
    rating: 4.1,
  },
  {
    id: 1,
    price: 330,
    title: 'Good',
    type: TypeHousing.HOTEL,
    image: 'img/apartment-02.jpg',
    isPremium: false,
    isBookmark: true,
    rating: 2,
  },
  {
    id: 2,
    price: 244,
    title: 'Bars',
    type: TypeHousing.APARTMENT,
    image: 'img/apartment-03.jpg',
    isPremium: true,
    isBookmark: true,
    rating: 3.6,
  },
  {
    id: 3,
    price: 112,
    title: 'Barsuk',
    type: TypeHousing.ROOM,
    image: 'img/apartment-04.jpg',
    isPremium: true,
    isBookmark: false,
    rating: 3.3,
  },
  {
    id: 4,
    price: 211,
    title: 'bizarro',
    type: TypeHousing.APARTMENT,
    image: 'img/apartment-05.jpg',
    isPremium: false,
    isBookmark: false,
    rating: 4.1,
  },
  {
    id: 5,
    price: 300,
    title: 'Bimo',
    type: TypeHousing.HOUSE,
    image: 'img/apartment-06.jpg',
    isPremium: false,
    isBookmark: false,
    rating: 5,
  },
];
