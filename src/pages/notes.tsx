import { ArticlesList } from "src/components/blog/ArticlesList";
import { Layout } from "src/components/Layout";
import { getAllItems, getAllSubItems } from "src/lib/mdx";
import { Post } from "types/Post";
import { GetStaticProps } from "next";
import { generateRSSFeed } from "src/lib/rss";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold capitalize md-text-4xl">Notes</h1>

        <ArticlesList articles={posts} type="notes" />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [posts] = await Promise.all([getAllSubItems({ type: "notes" }), generateRSSFeed()]);
  return {
    props: { posts },
  };
};
