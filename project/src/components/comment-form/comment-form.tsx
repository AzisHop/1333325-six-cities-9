import {useState, ChangeEvent, FormEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {NewComment} from '../../types/types';
import {createComment} from '../../store/api-actions';
import RatingStars from './rating-stars';

interface CommentFormProps {
  roomId: number;
}

export default function CommentForm({roomId}: CommentFormProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const [isCommentTextValid, setIsCommentTextValid] = useState(false);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setComment(text);
    const isValid = text.length > 50 && text.length <= 300;
    setIsCommentTextValid(isValid);
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsDisabled(true)
    const newComment: NewComment = {
      idOffer: roomId,
      review: {
        comment: comment,
        rating: rating,
      },
    };
    dispatch(createComment(newComment))
      .then(() => {
        setIsDisabled(false);
        setRating(0);
        setComment('');
        setIsCommentTextValid(false);
      });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStars onChangeRating={onChangeRating} activeId={rating} isDisabled={isDisabled}/>
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
