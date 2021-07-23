import { Box, Grid, Typography } from "@material-ui/core";
import { VFC } from "react";
import MyAvatar from "./myavatar";
import { SITE_TITLE } from "lib/constants";

type Props = {
  isIndex: boolean;
};

const MyHeader: VFC<Props> = ({ isIndex }) => {
  return (
    <>
      {isIndex ? (
        <Box>
          <Box display="flex" justifyContent="center">
            <MyAvatar size="large" />
          </Box>
          <Box textAlign="center" mt={4}>
            <Typography variant="h3" component="h1">
              {SITE_TITLE}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <MyAvatar size="small" />
          </Grid>
          <Grid item>
            <Typography variant="h3" component="h1">
              experience
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MyHeader;
