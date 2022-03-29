import Star from './star';
import {ChangeEvent} from 'react';
import {stars} from '../../types/types';

interface RatingStarsProps {
onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
activeId: number;
isDisabled: boolean;
countStars?: number;
}

export default function RatingStars({onChangeRating, activeId, isDisabled, countStars = stars}: RatingStarsProps) : JSX.Element {
  return (
    <div className='reviews__rating-form form__rating' >
      {Array.from({length: countStars}).map((_,index)=>
        (
          <Star
            key={String(5 - index)}
            id={5 - index} activeId={activeId}
            onChangeRating={onChangeRating}
            isDisabled={isDisabled}
          />
        ),
      )}
    </div>
  );
}
