"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, GitFork, Github, Star } from "lucide-react";
import { GitHubRepo, getLanguageColor } from "@/lib/github";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RepoCardProps {
  repo: GitHubRepo;
  index?: number;
}

export function RepoCard({ repo, index = 0 }: RepoCardProps) {
  const languageColor = getLanguageColor(repo.language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors">
              {repo.name}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${repo.name} on GitHub`}
              >
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              {repo.homepage && (
                <Link
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${repo.name}`}
                >
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <CardDescription className="line-clamp-2 min-h-[2.5rem]">
            {repo.description || "No description available"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {repo.language && (
              <div className="flex items-center gap-1.5">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: languageColor }}
                />
                <span>{repo.language}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
          {repo.topics && repo.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {repo.topics.slice(0, 3).map((topic) => (
                <Badge key={topic} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
