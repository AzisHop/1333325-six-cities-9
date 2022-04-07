import cn from 'classnames';
import {Hotel, PageInfo, TypePage, AppRoute} from '../../types/types';
import {Link} from 'react-router-dom';
import {getRatingInStar} from '../../utils/utils';
import {BookmarkButton} from '../bookmark-button/bookmark-button';
import {MouseEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {setActivePlaceMouseId} from '../../store/main-reducer/mainReducer';

interface PlaceProps {
  place: Hotel;
}

export default function Place({
  place,
  typePage,
} : PlaceProps & PageInfo): JSX.Element {
  const isPremium = place.isPremium || false;

  const articleClass = cn({
    'place-card': true,
    'cities__place-card': typePage === TypePage.MAIN,
    'favorites__card': typePage === TypePage.FAVORITES,
    'near-places__card': typePage === TypePage.HOTEL,
  });
  const wrapperImgClass = cn({
    'place-card__image-wrapper': true,
    'cities__image-wrapper': typePage === TypePage.MAIN,
    'favorites__image-wrapper': typePage === TypePage.FAVORITES,
    'near-places__image-wrapper': typePage === TypePage.HOTEL,

  });
  const infoCardClass = cn({
    'place-card__info': true,
    'favorites__card-info': typePage === TypePage.FAVORITES,
  });
  const sizeImgPlace = {
    width: (typePage === TypePage.FAVORITES) ? '150px' : '260px',
    height: (typePage === TypePage.FAVORITES) ? '110px' : '200px',
  };
  const ratingInStars = getRatingInStar(place.rating);

  const dispatch = useAppDispatch();
  const handleMousePlace = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(setActivePlaceMouseId(place.id));
  };

  return (
    <article className={articleClass} onMouseEnter={handleMousePlace}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={wrapperImgClass}>
        <Link to={`${AppRoute.ROOM}/${place.id}`}>
          <img className="place-card__image" src={place.previewImage} width={sizeImgPlace.width} height={sizeImgPlace.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={infoCardClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton id={place.id} isFavorite={place.isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingInStars}}/>
            <span className="visually-hidden">{'Rating'}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${AppRoute.ROOM}/${place.id}`}
          >
            {place.title}
          </Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}


