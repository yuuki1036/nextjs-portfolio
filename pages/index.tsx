import { Grid } from "@material-ui/core";
import { PlayCircleOutlineTwoTone } from "@material-ui/icons";
import Link from "next/link";
import Container from "../components/container";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import Profile from "../components/profile";
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
          <MyHeader isIndex />
          <Profile />
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={3}>
              <PlayCircleOutlineTwoTone fontSize="large" />
            </Grid>
            <Grid item xs={9}>
              <Link href="/experience">
                <a className="hover:underline">スキル</a>
              </Link>
            </Grid>
          </Grid>
          {morePosts.length > 0 && (
            <MoreStories posts={morePosts} />
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
