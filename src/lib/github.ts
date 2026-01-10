import { cache } from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  pushed_at: string;
  created_at: string;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "bluzername";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchGitHub<T>(endpoint: string): Promise<T> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  const response = await fetch(`${GITHUB_API_URL}${endpoint}`, {
    headers,
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export const getRepos = cache(async (): Promise<GitHubRepo[]> => {
  try {
    const repos = await fetchGitHub<GitHubRepo[]>(
      `/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&per_page=100`
    );

    // Filter out forks and archived repos, sort by stars
    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return [];
  }
});

export const getFeaturedRepos = cache(async (limit = 6): Promise<GitHubRepo[]> => {
  const repos = await getRepos();
  return repos.slice(0, limit);
});

export const getRepoByName = cache(async (name: string): Promise<GitHubRepo | null> => {
  try {
    return await fetchGitHub<GitHubRepo>(`/repos/${GITHUB_USERNAME}/${name}`);
  } catch (error) {
    console.error(`Failed to fetch repo ${name}:`, error);
    return null;
  }
});

// Language colors for display
export const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Vue: "#41b883",
  Svelte: "#ff3e00",
};

export function getLanguageColor(language: string | null): string {
  if (!language) return "#6b7280";
  return languageColors[language] || "#6b7280";
}
