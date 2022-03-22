import {useAppDispatch, useAppSelector} from '../../hooks';
import {setRating} from '../../store/place-reducer/place-reducer';
import {getIsDisabled, getRating} from '../../store/place-reducer/selectors';

interface StarProps {
  id: number;
}

export default function Star({id}: StarProps) : JSX.Element {

  const dispatch = useAppDispatch();
  const isChecked = Number(useAppSelector(getRating)) === Number(id);
  const isDisabled = useAppSelector(getIsDisabled);

  const onChangeRating = (event: any) => {
    dispatch(setRating(event.target.value));
  };

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={id}
        id={`${id}-stars`}
        type="radio" onChange={onChangeRating}
        checked={isChecked}
        disabled={isDisabled}
      />
      <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}
