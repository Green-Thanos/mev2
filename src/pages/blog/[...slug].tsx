import PageTitle from "src/components/PageTitle";
import { Article } from "src/components/blog/Article";
import { getItemBySlug, getFiles, formatSlug } from "src/lib/mdx";
import { Layout } from "src/layouts/layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Post } from "types/Post";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getFiles("posts");
  // for getFiles function, potentially add a include drafts and archived posts feature?
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
};

/* 
  How to render subdirectory post listing: get all subdirectories (excluding all files with extentions) and render in getstaticpaths
  Get the slug and make a library util function that grabs all the filenames from somewhere in src/data/ and spits them out
  This is a feature specific to notes, not blog posts and would be really useful. An additional component for listing folder items would be nice
*/

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string[]).join("/");
  // rss
  //   if (allPosts.length > 0) {
  //     const rss = generateRss(allPosts);
  //     fs.writeFileSync("./public/feed.xml", rss);
  //   }

  const post = await getItemBySlug(slug, "posts");

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export default function Notes({ post }: { post: Post }) {

  return (
    <Layout>
      {post.draft !== true ? (
        <Article article={post} />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{" "}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </Layout>
  );
}
