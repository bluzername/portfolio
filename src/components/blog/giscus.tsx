"use client";

import Giscus from "@giscus/react";
import { useTheme } from "@/components/layout/theme-provider";

export function GiscusComments() {
  const { theme } = useTheme();

  // Determine the actual theme for Giscus
  const giscusTheme = theme === "dark" ? "dark" : theme === "light" ? "light" : "preferred_color_scheme";

  return (
    <Giscus
      id="comments"
      repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ""}
      category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "Announcements"}
      categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ""}
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={giscusTheme}
      lang="en"
      loading="lazy"
    />
  );
}
