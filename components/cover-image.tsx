import internal from "stream";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import theme from "pages/theme";

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
      />
    </Grid>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Grid container>
          <Box
            className={
              "transition duration-200 shadow-small hover:shadow-medium"
            }
          >
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
            >
              <a aria-label={title}>{image}</a>
            </Link>
          </Box>
        </Grid>
      ) : (
        <Grid container>
          <Box className={"shadow-small"}>{image}</Box>
        </Grid>
      )}
    </div>
  );
};

export default CoverImage;
