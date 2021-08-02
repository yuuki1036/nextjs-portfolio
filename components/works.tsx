import { Box, Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import Post from "../types/post";
import PostPreview from "./post-preview";

type Props = {
  posts: Post[];
};

const Works: FC<Props> = ({ posts }) => {
  return (
    <section>
      <Box mt={8}>
        <Typography variant="h3">Works</Typography>
      </Box>
      <Box mt={3}>
        <Grid container spacing={6}>
          {posts.map((post, i) => (
            <Grid item key={i} sm={12} md={6}>
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Works;
