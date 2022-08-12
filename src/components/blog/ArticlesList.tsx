import { Post } from "types/Post";
import { ArticleListItem } from "./ArticleListItem";

interface Props {
  articles: Post[];
  type: "blog" | "snippets" | "notes";
}

export const ArticlesList = ({ type, articles }: Props) => {
  return (
    <ul className="flex flex-col mt-5">
      {articles.map((article) => (
        <ArticleListItem article={article} key={article.slug} type={type} />
      ))}
    </ul>
  );
};
