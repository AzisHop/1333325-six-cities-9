import {CommentData} from '../../types/types';
import {getRatingInStar} from '../../utils/utils';
interface CommentProps {
  comment: CommentData;
}

export default function Comment({
  comment,
}: CommentProps): JSX.Element {
  const ratingInStars = getRatingInStar(comment.rating);
  const dateParse = new Date(comment.date);
  const month = dateParse.toLocaleDateString(undefined, { month: 'long'});
  const year = dateParse.getFullYear();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
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
          {comment.comment}
        </p>
        <time className="reviews__time">{month} {year}</time>
      </div>
    </li>
  );
}
