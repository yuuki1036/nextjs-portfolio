import { Box, Container } from "@material-ui/core";
import { FC } from "react";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
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
