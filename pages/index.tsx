import Head from "next/head";
import { FC } from "react";
import Layout from "../components/layout";
import Profile from "../components/profile";
import Works from "../components/works";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import Certification from "components/certification";
import MyHeader from "components/myheader";

type Props = {
  allPosts: Post[];
};

const Index: FC<Props> = ({ allPosts }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="WEB系フルスタックエンジニア yuuki1036のポートフォリオサイトです。自己紹介・業務経験・スキル等を載せています。制作物（アプリ・サイト）は随時更新中です。"
        />
      </Head>
      <Layout>
        <MyHeader />
        <Profile />
        {allPosts.length > 0 && <Works posts={allPosts} />}
        <Certification />
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
