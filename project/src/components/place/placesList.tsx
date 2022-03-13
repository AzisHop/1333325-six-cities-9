import Place from './place';
import {PlaceType} from '../../types/types';

export type PlacesProps = {
  places: PlaceType[];
}
export default function PlacesList({places} : PlacesProps) {
  const placesArray = places.map(({
    id,
    price,
    title,
    type,
    previewImage,
    isPremium,
    isFavorite,
    rating,
  }) => (
    <Place
      key={id}
      id={id}
      price={price}
      title={title}
      type={type}
      previewImage={previewImage}
      isPremium={isPremium}
      isFavorite={isFavorite}
      rating={rating}
    />
  ));
  return (
    <div className="cities__places-list places__list tabs__content">
      {placesArray}
    </div>
  );
}
