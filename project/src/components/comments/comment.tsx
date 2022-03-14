import {months, CommentType} from '../../types/types';
import getRatingInStars from '../../utils/utils';
type CommentProps = CommentType;

export default function Comment({
  comment,
  date,
  rating,
  user,
}: CommentProps): JSX.Element {
  const ratingInStars = getRatingInStars(rating);
  const dateParse = new Date(date);
  const month = months[dateParse.getMonth()];
  const year = dateParse.getFullYear();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingInStars}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time">{month} {year}</time>
      </div>
    </li>
  );
}
