import { Post } from "types/Post";
import { Markdown } from "./markdown/Markdown";
import { BlogHeader } from "./BlogHeader";

interface Props {
  article: Post;
}

export const Article = ({ article }: Props) => {
  return (
    <article className="pb-5">
      <BlogHeader post={article} />
      <Markdown content={article.content} />
    </article>
  );
};
