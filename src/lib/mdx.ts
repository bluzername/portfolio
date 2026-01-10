import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { cache } from "react";

const POSTS_PATH = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  author?: string;
  published?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: string;
}

export interface PostMeta {
  slug: string;
  frontmatter: PostFrontmatter;
  readingTime: string;
}

function getPostFiles(): string[] {
  if (!fs.existsSync(POSTS_PATH)) {
    return [];
  }
  return fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith(".mdx"));
}

export const getPostBySlug = cache((slug: string): Post | null => {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
      readingTime: stats.text,
    };
  } catch (error) {
    console.error(`Failed to get post ${slug}:`, error);
    return null;
  }
});

export const getAllPosts = cache((): PostMeta[] => {
  const files = getPostFiles();

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(POSTS_PATH, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        frontmatter: data as PostFrontmatter,
        readingTime: stats.text,
      };
    })
    .filter((post) => post.frontmatter.published !== false)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB.getTime() - dateA.getTime();
    });

  return posts;
});

export const getPostsByTag = cache((tag: string): PostMeta[] => {
  const posts = getAllPosts();
  return posts.filter((post) =>
    post.frontmatter.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
});

export const getAllTags = cache((): string[] => {
  const posts = getAllPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
});

export const getRecentPosts = cache((limit = 3): PostMeta[] => {
  const posts = getAllPosts();
  return posts.slice(0, limit);
});
