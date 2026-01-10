"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import { PostMeta } from "@/lib/mdx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  post: PostMeta;
  index?: number;
}

export function PostCard({ post, index = 0 }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
          {post.frontmatter.coverImage && (
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.frontmatter.coverImage}
                alt={post.frontmatter.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.frontmatter.date}>
                {format(new Date(post.frontmatter.date), "MMM d, yyyy")}
              </time>
              <span className="text-border">|</span>
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
            <CardTitle className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
              {post.frontmatter.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="line-clamp-3 mb-4">
              {post.frontmatter.excerpt}
            </CardDescription>
            <div className="flex flex-wrap gap-1.5">
              {post.frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
