import { Box, Typography } from "@material-ui/core";
import { FC } from "react";

type Props = {
  title: string;
  sentences: string[];
};

const PostItemNormal: FC<Props> = ({
  title,
  sentences,
}) => {
  return (
    <Box my={3}>
      <Box mb={1}>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      </Box>
      <Box>
        {sentences.map((str, i) => {
          return <p key={i}>{str}</p>;
        })}
      </Box>
    </Box>
  );
};

export default PostItemNormal;
