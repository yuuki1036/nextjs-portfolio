import { Box, Container, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { VFC } from "react";
import Footer from "./footer";
import Meta from "./meta";
import theme from "pages/theme";

type Props = {
  children: React.ReactNode;
};

const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Container maxWidth={false}>
        <Container maxWidth="md">
          <Box mt={4}>
            <main>{children}</main>
          </Box>
          <Footer />
        </Container>
      </Container>
    </>
  );
};

export default Layout;
