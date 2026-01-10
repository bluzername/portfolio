import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostsByTag, getAllTags } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  return {
    title: `Posts tagged "${formattedTag}"`,
    description: `All blog posts tagged with ${formattedTag}`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Back Button */}
        <Link href="/blog" className="inline-block mb-8">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Posts tagged &ldquo;{formattedTag}&rdquo;
          </h1>
          <p className="text-lg text-muted-foreground">
            {posts.length} {posts.length === 1 ? "post" : "posts"} found
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No posts found with this tag.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
