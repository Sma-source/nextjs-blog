import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/lib/getPostMetaData";
import Link from "next/link";
import Image from "next/image";

export const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
const PostPage = ({ params }) => {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <main className="flex-1">
      <article className="container relative max-w-3xl py-6 lg:py-10">
        <div>
          <time
            className="block text-sm text-muted-foreground"
            dateTime={post.data.date}
          >
            Publié le {post.data.date}
          </time>
          <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
            {post.data.title}{" "}
          </h1>
          <div className="mt-4 flex space-x-4">
            <Link href="/" className="flex items-center space-x-2 text-sm">
              <Image
                src="https://tx.shadcn.com/_next/image?url=%2Fimages%2Favatars%2Fshadcn.png&w=96&q=75"
                width={42}
                height={42}
                alt="logo"
              />

              <div className="flex-1 text-left leading-tight">
                <p className="font-medium">Zma</p>
                <p className="text-[12px] text-muted-foreground">@twitter</p>
              </div>
            </Link>
          </div>
        </div>
        <Image
          className="my-8 rounded-md border bg-muted transition-colors"
          src="https://tx.shadcn.com/_next/image?url=%2Fimages%2Fblog%2Fblog-post-1.jpg&w=1920&q=75"
          width={700}
          height={304}
          alt={post.data.title}
        />
        <div className="prose lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
      {/* Slug: {params.slug} */}
    </main>
  );
};

export default PostPage;
