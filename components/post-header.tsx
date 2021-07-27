import { Box, Grid } from "@material-ui/core";
import Author from "../types/author";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Avatar from "./myavatar";
import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <Box mt={5}>
        <Grid container justifyContent="center">
          <CoverImage title={title} src={coverImage} />
        </Grid>
      </Box>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
