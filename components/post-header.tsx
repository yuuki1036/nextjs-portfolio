import {
  Box,
  Fab,
  Grid,
  Typography,
} from "@material-ui/core";
import { GitHub, Launch } from "@material-ui/icons";
import { FC } from "react";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

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
      <Box mt={3}>
        <Grid container justifyContent="center">
          <CoverImage title={title} src={coverImage} />
        </Grid>
      </Box>
      <Box mt={3} mb={1}>
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
