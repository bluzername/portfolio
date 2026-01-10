import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/config";
import { Separator } from "@/components/ui/separator";

const iconMap: Record<string, React.ReactNode> = {
  twitter: <Twitter className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </Link>
            ))}
          </div>

          <Separator className="max-w-xs" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="mt-1">
              Built with{" "}
              <Link
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                Next.js
              </Link>{" "}
              and{" "}
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                Tailwind CSS
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
