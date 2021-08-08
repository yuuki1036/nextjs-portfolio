import Spec from "./spec";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  launch?: string;
  source?: string;
  overView: string[];
  chronology?: string[];
  spec: Spec;
  main: string[];
  others?: string[];
  learned?: string[];
};

export default Post;
