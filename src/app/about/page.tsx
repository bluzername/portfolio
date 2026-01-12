import { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Award, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Evyatar Bluzer - Architect of Breakthrough Platforms in AI, Spatial Computing, and Cyber.",
};

const experience = [
  {
    company: "Independent",
    role: "Building, Consulting, Teaching & Investing",
    period: "2024 - Present",
    description:
      "Focusing on AI-native and spatial-compute platforms. Particular interest in multi-agent systems, synthetic data for perception, and architectures bridging hardware constraints with ambitious product experiences.",
  },
  {
    company: "Meta",
    role: "Sr. Engineering Manager, AI and Computer Vision",
    period: "July 2020 - September 2024",
    location: "Tel Aviv, Israel",
    description:
      "Led Meta's Visual Positioning System (VPS) - worldwide 3D mapping and 6DoF localization for wearable devices, from inception to global rollout. Pioneered large-scale 3D Synthetic Data for CV training and \"Virtual Engineering\" - designing perception HW based on high-fidelity real-world simulations. Used in Meta Quest VR headsets and Meta Ray-Ban AI glasses.",
  },
  {
    company: "Magic Leap",
    role: "Director of Engineering",
    period: "February 2016 - July 2020",
    location: "Israel",
    description:
      "Responsible for HW + CV architecture and specs of the company's state-of-the-art Mixed-Reality device. Led global teams (US+IL) across systems architecture, synthetic data, and embedded SW. Founded the company's primary Synthetic-Data team. Tech lead of a SOTA machine vision sensor from research to mass production (team of 30).",
  },
  {
    company: "Microsoft",
    role: "Tech Lead, Advanced Imaging Technologies",
    period: "October 2015 - February 2016",
    description:
      "Tech Lead in the Advanced Imaging Technologies group.",
  },
  {
    company: "Diskin Advanced Technologies",
    role: "Tech Lead",
    period: "August 2013 - September 2015",
    description:
      "Member of the company's management team. Led R&D of patented active-defence system for Windows from research to overseas production. Managed cyber-security projects in Fortune-50 companies (EU & US), reporting to global CIOs. Formed technical and business partnerships with 15+ cyber security startups.",
  },
  {
    company: "Office of the Prime Minister of Israel",
    role: "R&D Team Lead → System Architect → Engineer",
    period: "2005 - 2012",
    description:
      "Seven years building wireless, DSP, and intelligence systems. Received the Prime Minister's Prize for Technological-Operational Achievement. Managed 30+ engineers and $10M+ budgets. Initiated and led strategic multi-year programs across 4 national security organizations.",
  },
];

const education = [
  {
    institution: "Tel Aviv University",
    degree: "Master of Business Administration (MBA)",
    field: "Dual Specialization: Technology & Information Systems, Marketing",
    period: "2008 - 2010",
  },
  {
    institution: "The Hebrew University",
    degree: "Bachelor of Science (BSc)",
    field: "\"Talpiot\" Graduate in Physics and Mathematics",
    period: "2002 - 2005",
  },
];

const patents = [
  {
    title: "Computing System and Method for Identifying Files Transmitted to an External Network",
    url: "https://patents.justia.com/patent/10038738",
  },
  {
    title: "Eye-Imaging Apparatus Using Diffractive Optical Elements",
    url: "https://patents.justia.com/patent/11237631",
  },
  {
    title: "Method and System for Eye Tracking Using Speckle Patterns",
    url: "https://patents.justia.com/patent/10948981",
  },
  {
    title: "Methods and Systems for 3D Map Sharing Between Heterogeneous Computing Systems",
    url: "https://patents.justia.com/patent/12066545",
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
              I architect and ship frontier platforms in AI, spatial compute, and cyber &mdash; from
              national-scale intelligence systems to AR/VR devices and AI-native products.
            </p>
            <p>
              Over the last two decades I&apos;ve moved across the stack and across domains:
            </p>
            <ul>
              <li>
                <strong>Early career</strong> building wireless, DSP, and intelligence systems in the
                Office of the Prime Minister of Israel, where I received the <em>Prime Minister&apos;s Prize
                for Technological-Operational Achievement</em>.
              </li>
              <li>
                <strong>Cyber-security</strong> and active defense systems for Fortune-50 companies,
                including patented protections for Windows environments.
              </li>
              <li>
                <strong>Mixed-reality hardware</strong> and perception at Magic Leap, directing the
                architecture of a state-of-the-art MR device, leading global teams across HW, computer
                vision, and embedded software, and pioneering synthetic-data and eye-tracking efforts.
              </li>
              <li>
                <strong>AI & Computer Vision at Meta</strong>, where I led the Visual Positioning System (VPS):
                worldwide 3D mapping and 6DoF localization for XR headsets and glasses, and built large-scale
                3D synthetic-data and &quot;virtual engineering&quot; platforms used for training perception systems
                in Meta Quest headsets and Ray-Ban AI glasses.
              </li>
            </ul>
            <p>
              Today I focus on building, consulting, and investing in AI-native and spatial-compute platforms,
              with particular interest in:
            </p>
            <ul>
              <li>Multi-agent systems and tool-using AI</li>
              <li>Synthetic-data and simulation for perception and decision-making</li>
              <li>Architectures that bridge hardware constraints with ambitious product experiences</li>
            </ul>
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
                <div className="mb-2">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-primary font-medium">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.period}
                    {exp.location && ` · ${exp.location}`}
                  </p>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-primary">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.field}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Patents & Awards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
            <Award className="h-6 w-6" />
            Patents & Awards
          </h2>

          <div className="mb-6 p-4 rounded-lg border border-primary/50 bg-primary/5">
            <p className="font-semibold text-primary">Prime Minister&apos;s Prize for Technological-Operational Achievement</p>
            <p className="text-sm text-muted-foreground">Office of the Prime Minister of Israel</p>
          </div>

          <h3 className="font-semibold mb-3">Patents</h3>
          <div className="flex flex-wrap gap-2">
            {patents.map((patent, index) => (
              <Link
                key={index}
                href={patent.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  {patent.title}
                </Badge>
              </Link>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            If you&apos;re building at the edge of AI, spatial compute, or synthetic data and want a partner
            who has taken similar systems from whiteboard to deployment at scale &mdash; feel free to reach out.
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
