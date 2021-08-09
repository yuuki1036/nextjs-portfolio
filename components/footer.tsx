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
      <Box mt={5} mb={5}>
        <Grid container justifyContent="center">
          <Grid item>
            <a
              href="https://github.com/yuuki1036"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Grid
                container
                spacing={1}
                alignItems="center"
                wrap="nowrap"
              >
                <Grid item>
                  <GitHub fontSize="medium" />
                </Grid>
                <Grid item>
                  <p className="font-bold">yuuki1036</p>
                </Grid>
              </Grid>
            </a>
            <Box mt={1}>
              <a
                href="mailto:yuuki1036@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Grid
                  container
                  spacing={1}
                  alignItems="center"
                  wrap="nowrap"
                >
                  <Grid item>
                    <EmailOutlined fontSize="medium" />
                  </Grid>
                  <Grid item>
                    <p className="font-bold">
                      yuuki1036@gmail.com
                    </p>
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
