import Place from './place';
import {PlaceProps} from './place';

export type PlacesProps = PlaceProps[];
export default function placeList(places : PlacesProps) {
  const placesArray = places.map(({
    id,
    price,
    title,
    type,
    image,
    isPremium,
    isBookmark,
    rating,
  }) => (
    <Place
      key={id}
      id={id}
      price={price}
      title={title}
      type={type}
      image={image}
      isPremium={isPremium}
      isBookmark={isBookmark}
      rating={rating}
    />
  ));
  return (
    <div className="cities__places-list places__list tabs__content">
      {placesArray}
    </div>
  );
}
