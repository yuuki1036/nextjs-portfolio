import {
  Box,
  Divider,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import { FC } from "react";
import Post from "../types/post";
import PostPreview from "./post-preview";
import theme from "styles/theme";

type Props = {
  posts: Post[];
};

const Certification: FC = () => {
  return (
    <section>
      <Box mt={7}>
        <Typography variant="h4">Certification</Typography>
        <Divider />
      </Box>
      <Box mt={7} mb={12} mx={2}>
        <Grid container spacing={5}>
          <Image
            src={"/images/certification/aws-saa.png"}
            alt={`aws-solutions-architect-associate`}
            width={150}
            height={150}
            priority={true}
          />
        </Grid>
      </Box>
    </section>
  );
};

export default Certification;
