import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { getFeaturedRepos } from "@/lib/github";
import { getRecentPosts } from "@/lib/mdx";
import { getFeaturedProducts } from "@/lib/products";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProductsGrid } from "@/components/products/products-grid";
import { HeroSection } from "@/components/home/hero-section";
import { RecentPosts } from "@/components/home/recent-posts";
import { SkillsSection } from "@/components/home/skills-section";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const [repos, recentPosts, featuredProducts] = await Promise.all([
    getFeaturedRepos(6),
    Promise.resolve(getRecentPosts(3)),
    Promise.resolve(getFeaturedProducts()),
  ]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Products</h2>
              <p className="mt-2 text-muted-foreground">
                Live tools and prototypes you can try right now
              </p>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="group">
                View all
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <ProductsGrid products={featuredProducts} />
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Open Source</h2>
              <p className="mt-2 text-muted-foreground">
                GitHub projects and experiments
              </p>
            </div>
            <Link href="/projects">
              <Button variant="ghost" className="group">
                View all
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <ProjectsGrid repos={repos} />
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
                <p className="mt-2 text-muted-foreground">
                  Thoughts on technology, development, and more
                </p>
              </div>
              <Link href="/blog">
                <Button variant="ghost" className="group">
                  View all
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <RecentPosts posts={recentPosts} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating or just want to say hi? Feel free to reach out through any of these channels.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href={siteConfig.links.email}>
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Get in touch
              </Button>
            </Link>
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
