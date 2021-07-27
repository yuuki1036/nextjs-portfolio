import { Box, Grid, Typography } from "@material-ui/core";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <Box mt={7}>
      <Grid container justifyContent="center">
        <Typography variant="h2">{children}</Typography>
      </Grid>
    </Box>
  );
};

export default PostTitle;
