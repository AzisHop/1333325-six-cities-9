import {Cities, Hotel} from '../../types/types';
import FavoritePlacesCity from './favorite-places-city';

interface FavoritesPlacesProps {
  favoritesPlaces: Hotel[]
}

export default function FavoritesPlaces({favoritesPlaces} : FavoritesPlacesProps): JSX.Element {
  const cities = new Map<string, Hotel[]>([
    [Cities.PARIS, []],
    [Cities.AMSTERDAM, []],
    [Cities.BRUSSELS, []],
    [Cities.COLOGNE, []],
    [Cities.HAMBURG, []],
    [Cities.DUSSELDORF, []],
  ]);
  favoritesPlaces.forEach((favoritesPlace) => {
    cities.get(favoritesPlace.city.name)?.push(favoritesPlace);
  });
  const places = [];
  for (const amount of cities.values()) {
    if (amount.length) {
      const city = (
        <FavoritePlacesCity favoritesPlaces={amount}/>
      );
      places.push(city);
    }
  }
  return (
    <>
      <h1 className="favorites__title">{'Saved listing'}</h1>
      <ul className="favorites__list">
        {places}
      </ul>
    </>
  );
}

