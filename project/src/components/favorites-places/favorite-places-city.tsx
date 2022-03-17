import Place from '../place/place';
import {Hotel, TypePage} from '../../types/types';

type FavoritePlacesCityProps = FavoritesPlacesProps

interface FavoritesPlacesProps {
  favoritesPlaces: Hotel[]
}

export default function FavoritePlacesCity({favoritesPlaces}: FavoritePlacesCityProps): JSX.Element {
  const places = favoritesPlaces.map((place) => (
    <Place
      key={place.id}
      place={place}
      typePage={TypePage.FAVORITES}
    />
  ));
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favoritesPlaces[0]?.city?.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {places}
      </div>
    </li>
  );
}
