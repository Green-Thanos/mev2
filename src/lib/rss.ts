import * as Log from "next/dist/build/output/log";
import RSS from "rss";
import fs from "node:fs/promises";
import { getAllItems } from "./mdx";

const OUT_FILE_PATH = "./public/rss.xml";
const SITE_URL = "http://localhost:8080";

export async function generateRSSFeed() {
  try {
    if (process.env.NODE_ENV === "development") return;

    const posts = await getAllItems({ type: "posts" });

    const rss = new RSS({
      title: "Blog",
      site_url: SITE_URL,
      feed_url: `${SITE_URL}/rss.xml`,
    });

    for (const post of posts) {
      rss.item({
        title: post.title,
        date: post.createdAt,
        author: "Casper Iversen",
        description: post.intro ?? "",
        guid: `${SITE_URL}/blog/${post.slug}`,
        url: `${SITE_URL}/blog/${post.slug}`,
      });
    }

    const fullRSS = rss.xml({ indent: true });

    await fs.writeFile(OUT_FILE_PATH, fullRSS);

    console.log();
    Log.info(`Generated RSS feed. (${OUT_FILE_PATH})`);
  } catch (err) {
    console.log();
    Log.error("Could not generate the RSS feed.");
    console.log();
    console.error(err);
  }
}
