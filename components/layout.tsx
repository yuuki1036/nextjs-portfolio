import { Box, Container } from "@material-ui/core";
import { VFC } from "react";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

const Layout: VFC<Props> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <main>{children}</main>
      </Box>
      <Footer />
    </Container>
  );
};

export default Layout;
