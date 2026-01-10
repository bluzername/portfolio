import { Metadata } from "next";
import { getRepos } from "@/lib/github";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open source projects and experiments on GitHub.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of open source projects, experiments, and tools I&apos;ve built or contributed to.
            Sorted by stars.
          </p>
        </div>

        {/* Projects Grid */}
        <ProjectsGrid repos={repos} />
      </div>
    </div>
  );
}
