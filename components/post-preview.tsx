import { Box, Grid } from "@material-ui/core";
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
    <Grid item sm={10} md={12}>
      <CoverImage
        title={title}
        src={coverImage}
        slug={slug}
      />
      <h3 className="text-3xl mt-3 mb-1 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-1">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">
        {excerpt}
      </p>
    </Grid>
  );
};

export default PostPreview;
