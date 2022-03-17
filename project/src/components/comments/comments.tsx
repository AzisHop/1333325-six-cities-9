import {commentsData} from '../../mock/comments-mock';
import Comment from './comment';

export default function Comments(): JSX.Element {
  const data = commentsData; // ToDo будем брать с сервака
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{data.length}</span></h2>
      <ul className="reviews__list">
        {data.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
    </>
  );
}
