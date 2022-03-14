import {RatingStars} from '../types/types';

export default function getRatingInStars(rating: number) {
  switch (Math.round(rating)) {
    case 5:
      return RatingStars.FIVE;
    case 4:
      return RatingStars.FOUR;
    case 3:
      return RatingStars.TREE;
    case 2:
      return RatingStars.TWO;
    case 1:
      return RatingStars.ONE;
    default:
      return RatingStars.NONE;
  }
}
