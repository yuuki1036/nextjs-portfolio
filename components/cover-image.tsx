import { Box, Grid } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage: FC<Props> = ({ title, src, slug }) => {
  const image = (
    <Grid container>
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        width={440}
        height={220}
        priority={true}
      />
    </Grid>
  );
  return (
    <>
      {slug ? (
        <Grid container>
          <Box
            className={
              "transition duration-200 shadow-small hover:shadow-medium"
            }
          >
            <Link
              as={`/works/${slug}`}
              href="/works/[slug]"
            >
              <a>{image}</a>
            </Link>
          </Box>
        </Grid>
      ) : (
        <Grid container justifyContent="center">
          <Box className={"shadow-small"}>{image}</Box>
        </Grid>
      )}
    </>
  );
};

export default CoverImage;
