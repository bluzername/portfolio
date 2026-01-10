import { createHighlighter, type Highlighter } from "shiki";

let highlighter: Highlighter | null = null;

export async function getHighlighter(): Promise<Highlighter> {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark", "github-light"],
      langs: [
        "javascript",
        "typescript",
        "jsx",
        "tsx",
        "json",
        "html",
        "css",
        "scss",
        "markdown",
        "bash",
        "shell",
        "python",
        "rust",
        "go",
        "java",
        "c",
        "cpp",
        "yaml",
        "toml",
        "sql",
        "graphql",
        "diff",
      ],
    });
  }
  return highlighter;
}

export async function highlightCode(code: string, lang: string): Promise<string> {
  const hl = await getHighlighter();

  const validLang = hl.getLoadedLanguages().includes(lang) ? lang : "text";

  return hl.codeToHtml(code, {
    lang: validLang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });
}
