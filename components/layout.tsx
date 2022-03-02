import {
  Box,
  Button,
  Container,
  Grid,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
  isBack?: boolean;
};

const Layout: FC<Props> = ({ children, isBack }) => {
  return (
    <Container maxWidth="md">
      {/* content */}
      <Box mt={3}>
        <main>{children}</main>
      </Box>

      {/* browser back */}
      {isBack && (
        <Box my={5} mt={10} textAlign="center">
          <Link href="/" passHref>
            <a>
              <Button
                variant="outlined"
                size="medium"
                startIcon={<ArrowBack />}
              >
                Back
              </Button>
            </a>
          </Link>
        </Box>
      )}

      {/* footer */}
      <Footer />
    </Container>
  );
};

export default Layout;
