import { useParams } from "react-router";

function Post() {
  const { postId } = useParams<{ postId: string }>();

  return <div>Post {postId}</div>;
}

export default Post;
