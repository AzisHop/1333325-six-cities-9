import cn from 'classnames/bind';
import {RatingStars, TypeHousing} from '../../types/types';

export interface PlaceProps {
  id: number;
  price: number;
  title: string;
  type: TypeHousing;
  image: string;
  isPremium: boolean;
  isBookmark: boolean;
  rating: number;

}
export default function Place({
  id,
  price,
  title,
  type,
  isPremium = false,
  isBookmark = false,
  image,
  rating,
} : PlaceProps): JSX.Element {
  const bookmarkStyle = cn({
    'place-card__bookmark-button': true,
    'button': true,
    'place-card__bookmark-button--active': isBookmark,
  });
  const ratingInStars = getRatingInStars(rating);
  return (
    <article className="cities__place-card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkStyle} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
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
