import {
  Box,
  Fab,
  Grid,
  Typography,
} from "@material-ui/core";
import { GitHub, Launch } from "@material-ui/icons";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h3">{children}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default PostTitle;
