import {
  Box,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
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
        <>
          <Box mb={1}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Link href="/" passHref>
                  <a>
                    <MyAvatar size="small" />
                  </a>
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="h4" component="h1">
                  {pageTitle}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </>
      )}
    </>
  );
};

export default MyHeader;
