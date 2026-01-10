import { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Evyatar Bluzer - Architect of Breakthrough Platforms.",
};

const experience = [
  {
    company: "Current Ventures",
    role: "Building, Consulting & Investing",
    period: "Present",
    description:
      "Architecting breakthrough platforms in VPS, Synthetic Data, and Spatial Compute. Consulting for startups and investing in the AI wave.",
  },
  {
    company: "Meta",
    role: "Software Engineer",
    period: "Previous",
    description:
      "Worked on cutting-edge technology initiatives, contributing to platform development and innovation at scale.",
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    period: "Previous",
    description:
      "Developed enterprise solutions and contributed to core platform technologies.",
  },
  {
    company: "Magic Leap",
    role: "Software Engineer",
    period: "Previous",
    description:
      "Pioneered spatial computing experiences, building the future of augmented reality interfaces.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Architect of Breakthrough Platforms
          </p>
        </div>

        {/* Bio */}
        <section className="mb-12">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              I&apos;m Evyatar Bluzer, a software architect and entrepreneur with a passion for
              building breakthrough platforms that push the boundaries of what&apos;s possible.
            </p>
            <p>
              My journey has taken me through some of the most innovative companies in tech,
              including <strong>Meta</strong>, <strong>Microsoft</strong>, and{" "}
              <strong>Magic Leap</strong>, where I&apos;ve had the privilege of working on
              cutting-edge technologies that shape how we interact with the digital world.
            </p>
            <p>
              Today, I focus on three main areas:
            </p>
            <ul>
              <li>
                <strong>VPS Architecture</strong> - Building scalable, reliable infrastructure
                platforms
              </li>
              <li>
                <strong>Synthetic Data</strong> - Creating AI-powered data generation solutions
              </li>
              <li>
                <strong>Spatial Compute</strong> - Pioneering the future of AR/VR experiences
              </li>
            </ul>
            <p>
              I&apos;m also actively consulting for startups and investing in promising AI
              ventures, helping to shape the next generation of technology companies.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="mb-1">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-muted-foreground">
                    {exp.role} &middot; {exp.period}
                  </p>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            I&apos;m always interested in hearing about new opportunities, collaborations, or just
            having a chat about technology. Feel free to reach out through any of these channels.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={siteConfig.links.email}>
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Email
              </Button>
            </Link>
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Twitter className="h-5 w-5" />
                Twitter
              </Button>
            </Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
