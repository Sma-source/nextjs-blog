import Image from "next/image";

const BlogCard = ({ title, date, subtitle }) => {
  return (
    <article className="group relative flex flex-col space-y-2">
      <Image
        src="https://tx.shadcn.com/_next/image?url=%2Fimages%2Fblog%2Fblog-post-1.jpg&w=1920&q=75"
        className="rounded-md border bg-muted transition-colors"
        alt="preview img"
        width={396}
        height={223}
      />
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="text-muted">{subtitle}</p>
      <p className="text-sm text-muted-foreground">{date} </p>
    </article>
  );
};

export default BlogCard;
