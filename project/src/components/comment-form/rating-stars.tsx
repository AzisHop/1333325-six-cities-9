import Star from './star';
import {ChangeEvent} from 'react';
import {STARS} from '../../types/types';

interface RatingStarsProps {
onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
activeId: number;
isDisabled: boolean;
countStars?: number;
}

export default function RatingStars({onChangeRating, activeId, isDisabled, countStars = STARS}: RatingStarsProps) : JSX.Element {
  return (
    <div className='reviews__rating-form form__rating' >
      {Array.from({length: countStars}).map((_,index)=>
        (
          <Star
            key={String(countStars - index)}
            id={countStars - index} activeId={activeId}
            onChangeRating={onChangeRating}
            isDisabled={isDisabled}
          />
        ),
      )}
    </div>
  );
}
