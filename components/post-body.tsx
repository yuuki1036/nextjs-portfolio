import { FC } from "react";
import PostItemNormal from "./post-item-normal";
import PostItemSpecs from "./post-item-specs";
import Post from "types/post";

type Props = {
  post: Post;
};

const PostBody: FC<Props> = ({ post }) => {
  return (
    <>
      <PostItemNormal
        title="概要"
        sentences={post.overView}
      />
      {post.chronology && (
        <PostItemNormal
          title="開発経緯"
          sentences={post.chronology}
        />
      )}
      <PostItemSpecs title="仕様" specs={post.spec} />
      <PostItemNormal
        title="主な機能"
        sentences={post.main}
      />
      {post.others && (
        <PostItemNormal
          title="その他機能"
          sentences={post.others}
        />
      )}
      {post.learned && (
        <PostItemNormal
          title="学んだこと"
          sentences={post.learned}
        />
      )}
    </>
  );
};

export default PostBody;
