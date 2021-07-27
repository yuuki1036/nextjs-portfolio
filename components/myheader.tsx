import { Box, Grid, Typography } from "@material-ui/core";
import { FC } from "react";
import MyAvatar from "./myavatar";
import { SITE_TITLE } from "lib/constants";

type Props = {
  isIndex?: boolean;
  pageTitle?: string;
};

const MyHeader: FC<Props> = ({
  isIndex = true,
  pageTitle,
}) => {
  return (
    <>
      {isIndex ? (
        <>
          <Grid container justifyContent="center">
            <MyAvatar size="large" />
          </Grid>
          <Box mt={4}>
            <Grid container justifyContent="center">
              <Typography variant="h3" component="h1">
                {SITE_TITLE}
              </Typography>
            </Grid>
          </Box>
        </>
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
              {pageTitle}
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MyHeader;
