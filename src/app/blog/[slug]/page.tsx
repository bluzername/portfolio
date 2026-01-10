import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { siteConfig } from "@/lib/config";
import { mdxComponents } from "@/components/blog/mdx-components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GiscusComments } from "@/components/blog/giscus";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const { frontmatter } = post;

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author || siteConfig.author.name],
      images: frontmatter.coverImage
        ? [{ url: frontmatter.coverImage }]
        : [{ url: siteConfig.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: frontmatter.coverImage ? [frontmatter.coverImage] : [siteConfig.ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, readingTime } = post;

  return (
    <article className="py-12">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Back Button */}
        <Link href="/blog" className="inline-block mb-8">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {frontmatter.tags.map((tag) => (
              <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {frontmatter.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-6">
            {frontmatter.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              <span>{frontmatter.author || siteConfig.author.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={frontmatter.date}>
                {format(new Date(frontmatter.date), "MMMM d, yyyy")}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{readingTime}</span>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {frontmatter.coverImage && (
          <div className="relative aspect-video mb-8 overflow-hidden rounded-lg">
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <Separator className="mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    {
                      behavior: "wrap",
                      properties: {
                        className: ["anchor"],
                      },
                    },
                  ],
                ],
              },
            }}
          />
        </div>

        <Separator className="my-12" />

        {/* Comments */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <GiscusComments />
        </section>
      </div>
    </article>
  );
}
