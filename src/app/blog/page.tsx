import { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on technology, development, AI, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Thoughts on technology, software architecture, AI, and the future of computing.
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-10">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        )}

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
              No posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
