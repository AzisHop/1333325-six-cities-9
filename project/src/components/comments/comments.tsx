import {commentsData} from '../../mock/commentsMock';
import Comment from './comment';

export default function Comments(): JSX.Element {
  const data = commentsData; // ToDo будем брать с сервака
  const comments = data.map(({
    comment,
    date,
    id,
    rating,
    user,
  }) => (
    <Comment
      key={id}
      comment={comment}
      date={date}
      id={id}
      rating={rating}
      user={user}
    />
  ));
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments}
      </ul>
    </>
  );
}
