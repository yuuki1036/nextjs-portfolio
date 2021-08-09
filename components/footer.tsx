import {
  Box,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { EmailOutlined, GitHub } from "@material-ui/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Divider />
      <Box mt={8} mb={8}>
        <Grid container justifyContent="center">
          <Grid item>
            <a
              href="https://github.com/yuuki1036"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
              >
                <Grid item>
                  <GitHub fontSize="large" />
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    yuuki1036
                  </Typography>
                </Grid>
              </Grid>
            </a>
            <Box mt={2}>
              <a
                href="mailto:yuuki1036@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                >
                  <Grid item>
                    <EmailOutlined fontSize="large" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      yuuki1036@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
