import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{post.title}</h2>
    <p className="PostInfo__body">{post.body}</p>
    <p className="PostInfo__user">{`Posted by ${post.user.name} (${post.user.email})`}</p>
    <p className="PostInfo__comments">{`Comments: ${post.comments.length}`}</p>
    <UserInfo user={post.user} />
  </div>
);
