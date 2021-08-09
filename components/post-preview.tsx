import { Box, Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

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
        <Box mt={1}>
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            passHref
          >
            <a>
              <Typography variant="h6">{title}</Typography>
            </a>
          </Link>
        </Box>
        <Box>
          <p>
            <DateFormatter dateString={date} />
          </p>
        </Box>
        <Box>
          <p>{excerpt}</p>
        </Box>
      </Grid>
    </article>
  );
};

export default PostPreview;
