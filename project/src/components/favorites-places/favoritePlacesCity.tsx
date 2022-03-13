import Place from '../place/place';
import {PlaceFavorites, TypePage} from '../../types/types';

type FavoritePlacesCityProps = FavoritesPlacesProps

interface FavoritesPlacesProps {
  favoritesPlaces: PlaceFavorites[]
}

export default function FavoritePlacesCity({favoritesPlaces}: FavoritePlacesCityProps): JSX.Element {
  const places = favoritesPlaces.map(({
    id,
    price,
    title,
    type,
    isPremium,
    isFavorite,
    previewImage,
    rating,
  }) => (
    <Place
      key={id}
      id={id}
      price={price}
      title={title}
      type={type}
      isPremium={isPremium}
      isFavorite={isFavorite}
      previewImage={previewImage}
      rating={rating}
      typePage={TypePage.FAVORITES}
    />
  ));
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favoritesPlaces[0]?.city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {places}
      </div>
    </li>
  );
}
