import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {NewComment, StatusCommentForm} from '../../types/types';
import {createComment} from '../../store/api-actions';
import RatingStars from './rating-stars';
import {getIsError} from '../../store/place-reducer/selectors';
import {setIsError} from '../../store/place-reducer/place-reducer';

interface CommentFormProps {
  roomId: number;
}

export default function CommentForm({roomId}: CommentFormProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const [isCommentTextValid, setIsCommentTextValid] = useState(false);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const statusForm = useAppSelector(getIsError);

  useEffect(() => {
    if (statusForm === StatusCommentForm.UPDATE) {
      setIsDisabled(false);
      setRating(0);
      setComment('');
      setIsCommentTextValid(false);
    }
    dispatch(setIsError(StatusCommentForm.DONE));
  }, [statusForm]);

  const handleChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setComment(text);
    const isValid = text.length > 50 && text.length <= 300;
    setIsCommentTextValid(isValid);
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsDisabled(true);
    const newComment: NewComment = {
      idHotel: roomId,
      review: {
        comment: comment,
        rating: rating,
      },
    };
    dispatch(createComment(newComment));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStars onChangeRating={handleChangeRating} activeId={rating} isDisabled={isDisabled}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleChangeComment}
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
