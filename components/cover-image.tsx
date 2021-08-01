import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import theme from "pages/theme";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const useStyles = makeStyles((theme) => ({
  small: {},
  large: {
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
  },
  image: {
    objectFit: "cover",
  },
}));

const CoverImage = ({ title, src, slug }: Props) => {
  const classes = useStyles(theme);

  const image = (
    <Grid container>
      <Box
        className={
          "transition duration-200 shadow-small hover:shadow-medium"
        }
      >
        <Grid container>
          <Image
            src={src}
            alt={`Cover Image for ${title}`}
            width={440}
            height={220}
          />
        </Grid>
      </Box>
    </Grid>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
