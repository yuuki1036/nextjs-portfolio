import {
  Box,
  Chip,
  emphasize,
  Grid,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { FC } from "react";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  tag: string[];
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview: FC<Props> = ({
  title,
  coverImage,
  tag,
  date,
  excerpt,
  slug,
}) => {
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
            as={`/works/${slug}`}
            href="/works/[slug]"
            passHref
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="h6">
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  display={{
                    xs: "none",
                    sm: "none",
                    md: "block",
                  }}
                >
                  {tag.map((value, i) => (
                    <>
                      <Chip
                        key={i}
                        variant="outlined"
                        size="small"
                        color="primary"
                        label={value}
                      />
                      &ensp;
                    </>
                  ))}
                </Box>
              </Grid>
            </Grid>
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
