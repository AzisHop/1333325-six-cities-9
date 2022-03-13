import {Cities, PlaceFavorites} from '../../types/types';
import FavoritePlacesCity from './favoritePlacesCity';

interface FavoritesPlacesProps {
  favoritesPlaces: PlaceFavorites[]
}

export default function FavoritesPlaces({favoritesPlaces} : FavoritesPlacesProps): JSX.Element {
  const cities = new Map<string, PlaceFavorites[]>([
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
    <ul className="favorites__list">
      {places}
    </ul>
  );
}

