import Place from './place';
import {PageInfo, Hotel} from '../../types/types';

export type PlacesProps = {
  places: Hotel[];
}
export default function PlacesList({places, typePage} : PlacesProps & PageInfo) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <Place
          key={place.id}
          place={place}
          typePage={typePage}
        />
      ))}
    </div>
  );
}
