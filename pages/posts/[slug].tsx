import { Box } from "@material-ui/core";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import { SITE_NAME } from "../../lib/constants";
import Post from "../../types/post";
import MyHeader from "components/myheader";
import PostBody from "components/post-body";

type Props = {
  post: Post;
  morePosts: Post[];
};

const PostRender = ({ post, morePosts }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <MyHeader isIndex={false} pageTitle={"works"} />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Head>
            <title>
              {post.title} | {SITE_NAME}
            </title>
          </Head>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            launch={post.launch}
            source={post.source}
          />
          <Box mt={4} mb={10}>
            <PostBody post={post} />
          </Box>
        </>
      )}
    </Layout>
  );
};

export default PostRender;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
