import cn from 'classnames';
import {Hotel, PageInfo, TypePage, stars} from '../../types/types';
// import getRatingInStars from '../../utils/utils';

// type PlaceProps = PlaceData
interface PlaceProps {
  place: Hotel;
}

export default function Place({
  place,
  typePage,
} : PlaceProps & PageInfo): JSX.Element {
  const isPremium = place.isPremium || false;
  // const isFavorite = place.isFavorite || false; // ToDo понадобится далее
  const bookmarkStyle = cn({
    'place-card__bookmark-button': true,
    'button': true,
    'place-card__bookmark-button--active': place.isFavorite,
  });

  const articleStyle = cn({
    'place-card': true,
    'cities__place-card': typePage === TypePage.MAIN,
    'favorites__card': typePage === TypePage.FAVORITES,
    'near-places__card': typePage === TypePage.OFFER,
  });
  const wrapperImgStyle = cn({
    'place-card__image-wrapper': true,
    'cities__image-wrapper': typePage === TypePage.MAIN,
    'favorites__image-wrapper': typePage === TypePage.FAVORITES,
    'near-places__image-wrapper': typePage === TypePage.OFFER,

  });
  const infoCardStyle = cn({
    'place-card__info': true,
    'favorites__card-info': typePage === TypePage.FAVORITES,
  });
  const sizeImgPlace = {
    width: (typePage === TypePage.FAVORITES) ? '150px' : '260px',
    height: (typePage === TypePage.FAVORITES) ? '110px' : '200px',
  };
  const ratingInStars = Math.min(Math.round(place.rating), 5) * 100 / stars;

  return (
    <article className={articleStyle}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={wrapperImgStyle}>
        <a href="#">
          <img className="place-card__image" src={place.previewImage} width={sizeImgPlace.width} height={sizeImgPlace.height}
            alt="Place image"
          />
        </a>
      </div>
      <div className={infoCardStyle}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkStyle} type="button">
            <svg className="place-card__bookmark-icon" width="18px" height="19px">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingInStars}}/>
            <span className="visually-hidden">{'Rating'}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`/offer/${place.id}`}>{place.title}</a>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}


