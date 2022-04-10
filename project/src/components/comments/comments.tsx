import Comment from './comment';
import dayjs from 'dayjs';
import {CommentData} from '../../types/types';
interface CommentsProps {
  comments: CommentData[]
}
const MAX_COMMENTS = 10;
export default function Comments({comments}: CommentsProps): JSX.Element {
  const sortComments = comments.sort((a,b) => {
    const date1 = dayjs(a.date);
    const date2 = dayjs(b.date);
    return date2.diff(date1);
  }).slice(0, MAX_COMMENTS);
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {sortComments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
    </>
  );
}
