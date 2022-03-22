import Comment from './comment';
import {CommentData} from '../../types/types';
interface CommentsProps {
  comments: CommentData[]
}
export default function Comments({comments}: CommentsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
    </>
  );
}
