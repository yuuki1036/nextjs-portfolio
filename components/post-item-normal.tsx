import {
  Box,
  Divider,
  Typography,
} from "@material-ui/core";
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
    <Box my={5}>
      <Box mb={1}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box>
        {sentences.map((str, i) => {
          return (
            <Typography variant="body1" key={i}>
              {str}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};

export default PostItemNormal;
