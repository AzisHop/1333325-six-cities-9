import cn from 'classnames/bind';
import {RatingStars, PlaceType} from '../../types/types';

interface PageInfo {
  isMainPage: boolean;
  isFavoritesPage: boolean;
  isPropertyPage: boolean;
}
type PlaceProps = PlaceType & PageInfo
export default function Place({
  id,
  price,
  title,
  type,
  isPremium = false,
  isFavorite = false,
  previewImage,
  rating,
  isMainPage = false,
  isFavoritesPage = false,
  isPropertyPage = false,
} : PlaceProps): JSX.Element {
  const bookmarkStyle = cn({
    'place-card__bookmark-button': true,
    'button': true,
    'place-card__bookmark-button--active': isFavorite,
  });

  const articleStyle = cn({
    'place-card': true,
    'cities__place-card': isMainPage,
    'favorites__card': isFavoritesPage,
    'near-places__card': isPropertyPage,
  })
  const wrapperImgStyle = cn({
    'place-card__image-wrapper': true,
    'cities__image-wrapper': isMainPage,
    'favorites__image-wrapper': isFavoritesPage,
    'near-places__image-wrapper': isPropertyPage,

  })
  const infoCardStyle = cn({
    'place-card__info': true,
    'favorites__card-info': isFavoritesPage,
  })
  const sizeImgPlace = {
    width: isFavoritesPage ? '150' : '260',
    height: isFavoritesPage ? '110' : '200',
  }
  const ratingInStars = getRatingInStars(rating);
  return (
    <article className={articleStyle}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={wrapperImgStyle}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className={infoCardStyle}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkStyle} type="button">
            <svg className="place-card__bookmark-icon" width={sizeImgPlace.width} height={sizeImgPlace.height}>
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
          <a href={`/offer/${id}`}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

function getRatingInStars(rating: number) {
  switch (Math.round(rating)) {
    case 5:
      return RatingStars.FIVE;
    case 4:
      return RatingStars.FOUR;
    case 3:
      return RatingStars.TREE;
    case 2:
      return RatingStars.TWO;
    case 1:
      return RatingStars.ONE;
    default:
      return RatingStars.NONE;
  }
}
