import { GitHubRepo } from "@/lib/github";
import { RepoCard } from "./repo-card";

interface ProjectsGridProps {
  repos: GitHubRepo[];
}

export function ProjectsGrid({ repos }: ProjectsGridProps) {
  if (repos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo, index) => (
        <RepoCard key={repo.id} repo={repo} index={index} />
      ))}
    </div>
  );
}
