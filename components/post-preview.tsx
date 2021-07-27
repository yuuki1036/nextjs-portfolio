import { Box } from "@material-ui/core";
import Link from "next/link";
import Author from "../types/author";
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
    <>
      <Box>
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
        />
      </Box>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">
        {excerpt}
      </p>
    </>
  );
};

export default PostPreview;
