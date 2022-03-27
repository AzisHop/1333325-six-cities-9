import Star from './star';
import {ChangeEvent} from "react";
import {stars} from "../../types/types";

interface RatingStarsProps {
onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
activeId: number;
isDisabled: boolean;
countStars?: number;
}

export default function RatingStars({onChangeRating, activeId, isDisabled, countStars = stars}: RatingStarsProps) : JSX.Element {
  // const ratingArray = Array.from({length: 5}).map((_,i)=>i);
  const ratingArray = Array.from({length: countStars}).map((_,index)=>
    <Star
    key={String(5 - index)}
    id={5 - index} activeId={activeId}
    onChangeRating={onChangeRating}
    isDisabled={isDisabled}
  />
    ,);

  return (
    <div className='reviews__rating-form form__rating' >
      {/*{ratingArray.map((_, index) =>*/}
      {/*  <Star*/}
      {/*    key={String(5 - index)}*/}
      {/*    id={5 - index} activeId={activeId}*/}
      {/*    onChangeRating={onChangeRating}*/}
      {/*    isDisabled={isDisabled}*/}
      {/*  />,*/}
      {/*)}*/}
      {ratingArray}
    </div>
  );
}
