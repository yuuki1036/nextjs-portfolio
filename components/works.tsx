import {
  Box,
  Divider,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { FC } from "react";
import Post from "../types/post";
import PostPreview from "./post-preview";
import theme from "styles/theme";

type Props = {
  posts: Post[];
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(8),
    },
  },
}));

const Works: FC<Props> = ({ posts }) => {
  const classes = useStyles();
  return (
    <section>
      <Box mt={5}>
        <Typography variant="h4">Works</Typography>
        <Divider />
      </Box>
      <Box mt={3} mb={6}>
        <Grid container spacing={4}>
          {posts.map((post, i) => (
            <Grid item key={i} sm={12} md={6}>
              <Box className={classes.root}>
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  tag={post.tag}
                  date={post.date}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Works;
