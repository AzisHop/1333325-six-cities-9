import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {NewComment} from '../../types/types';
import {createComment} from '../../store/api-actions';
import RatingStars from './rating-stars';
import {getIsDisabled, getRating} from '../../store/place-reducer/selectors';
import {setRating, setIsDisabled} from '../../store/place-reducer/place-reducer';

interface CommentFormProps {
  roomId: number;
}

export default function CommentForm({roomId}: CommentFormProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const [isCommentTextValid, setIsCommentTextValid] = useState(false);
  const [comment, setComment] = useState('');
  const rating = useAppSelector(getRating);
  const isDisabled = useAppSelector(getIsDisabled);

  const onChangeComment = (event: any) => {
    const text = event.target.value;
    setComment(text);
    if (text.length > 50 && text.length <= 300) {
      setIsCommentTextValid(true);
    } else {
      setIsCommentTextValid(false);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(setIsDisabled(true));
    const newComment: NewComment = {
      idOffer: roomId,
      review: {
        comment: comment,
        rating: rating,
      },
    };
    dispatch(createComment(newComment))
      .then(() => {
        dispatch(setIsDisabled(false));
        dispatch(setRating(0));
        setComment('');
      });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStars/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={onChangeComment}
        disabled={isDisabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          onClick={handleSubmit}
          disabled={!(isCommentTextValid && !!rating)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
