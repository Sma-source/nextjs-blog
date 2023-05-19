import BlogCard from "@/components/BlogCard";
import getPostMetaData from "@/lib/getPostMetaData";

import Link from "next/link";

export default function Home() {
  const postMetadata = getPostMetaData();
  const postPreviews = postMetadata.map((post) => {
    if (!post) {
      return <h2>No post found yet</h2>;
    }

    return (
      <Link key={post.slug} href={`/posts/${post.slug}`}>
        <BlogCard
          title={post.title}
          date={post.date}
          slug={post.slug}
          subtitle={post.subtitle}
        />
      </Link>
    );
  });

  return (
    <main className="flex-1">
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              A blog built using Contentlayer. Posts are written in MDX.
            </p>
          </div>
        </div>
        <hr className="my-8" />
        <div className="grid gap-10 sm:grid-cols-2">{postPreviews}</div>
      </div>
    </main>
  );
}
