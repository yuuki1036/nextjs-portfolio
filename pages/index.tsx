import { Grid } from "@material-ui/core";
import { PlayCircleOutlineTwoTone } from "@material-ui/icons";
import Link from "next/link";
import Container from "../components/container";
import Layout from "../components/layout";
import Profile from "../components/profile";
import Works from "../components/works";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import MyHeader from "components/myheader";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Container>
          <MyHeader />
          <Profile />
          {morePosts.length > 0 && (
            <Works posts={morePosts} />
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
