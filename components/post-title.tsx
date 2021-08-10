import { Grid, Typography } from "@material-ui/core";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle: FC<Props> = ({ children }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography variant="h3">{children}</Typography>
      </Grid>
    </Grid>
  );
};

export default PostTitle;
