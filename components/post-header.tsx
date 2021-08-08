import {
  Box,
  Fab,
  Grid,
  Theme,
  Typography,
} from "@material-ui/core";
import { GitHub, Launch } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import { FC, VFC } from "react";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Avatar from "./myavatar";
import PostTitle from "./post-title";
import theme from "pages/theme";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  launch?: string;
  source?: string;
};

const PostHeader: FC<Props> = ({
  title,
  coverImage,
  date,
  launch,
  source,
}) => {
  return (
    <>
      <Box mt={5}>
        <Grid container justifyContent="center">
          <CoverImage title={title} src={coverImage} />
        </Grid>
      </Box>
      <Box mt={4} mb={1}>
        <PostTitle>{title}</PostTitle>
      </Box>

      <Grid
        container
        spacing={3}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h6">
            <DateFormatter dateString={date} />
          </Typography>
        </Grid>
        {launch && (
          <Grid item>
            <a
              href={launch}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fab size="medium">
                <Launch />
              </Fab>
            </a>
          </Grid>
        )}
        {source && (
          <Grid item>
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fab size="medium">
                <GitHub />
              </Fab>
            </a>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default PostHeader;
