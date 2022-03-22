import Star from './star';

export default function RatingStars() : JSX.Element {
  const STARS_NUMBER = 5;
  const ratingArray = new Array(STARS_NUMBER).fill(null);

  return (
    <div className='reviews__rating-form form__rating' >
      {ratingArray.map((_, index) =>
        <Star key={String(5 - index)} id={5 - index}/>,
      )}
    </div>
  );
}
