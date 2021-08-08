import { FC } from "react";
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

const Index: FC<Props> = ({ allPosts }) => {
  return (
    <>
      <Layout>
        <MyHeader />
        <Profile />
        {allPosts.length > 0 && <Works posts={allPosts} />}
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
