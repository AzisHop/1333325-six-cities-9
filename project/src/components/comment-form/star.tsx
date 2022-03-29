import {ChangeEvent} from 'react';

interface StarProps {
  id: number;
  activeId: number;
  onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

export default function Star({id, onChangeRating, activeId, isDisabled}: StarProps) : JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={id}
        id={`${id}-stars`}
        type="radio"
        onChange={onChangeRating}
        checked={id === activeId}
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
