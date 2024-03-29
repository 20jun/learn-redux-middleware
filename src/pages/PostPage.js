import React from "react";
import PostContainer from "../containers/PostContainer";
import { useParams } from "react-router";

function PostPage() {
  const params = useParams();
  return <PostContainer postId={parseInt(params.id, 10)} />;
}

export default PostPage;
