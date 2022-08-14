import { ArticlesList } from "src/components/blog/ArticlesList";
import { Layout } from "src/components/Layout";
import { getAllItems, getAllSubItems } from "src/lib/mdx";
import { Post } from "types/Post";
import { GetStaticProps } from "next";
import { generateRSSFeed } from "src/lib/rss";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold capitalize md-text-4xl">Blog Posts</h1>
      <div>
        <h2 className="text-2xl font-semibold md:text-3xl">All Posts</h2>

        <ArticlesList articles={posts} type="notes" />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [posts] = await Promise.all([getAllItems({ type: "posts" }), generateRSSFeed()]);
  return {
    props: { posts },
  };
};
