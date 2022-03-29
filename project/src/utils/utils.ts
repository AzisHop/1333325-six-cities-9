
export function getRatingInStar(rating: number, koef = 100) {
  return Math.min(Math.round(rating), 5) * koef / 5;
}
