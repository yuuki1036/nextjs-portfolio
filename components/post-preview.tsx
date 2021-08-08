import { Box, Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Avatar from "./myavatar";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <article>
      <Grid item sm={10} md={12}>
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
        />
        <Box mt={2}>
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            passHref
          >
            <a>
              <Typography variant="h5">{title}</Typography>
            </a>
          </Link>
        </Box>
        <Box>
          <Typography variant="body1">
            <DateFormatter dateString={date} />
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">{excerpt}</Typography>
        </Box>
      </Grid>
    </article>
  );
};

export default PostPreview;
