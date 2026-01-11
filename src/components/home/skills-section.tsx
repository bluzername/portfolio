"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = {
  "AI & Computer Vision": [
    "Visual Positioning Systems",
    "3D Mapping & Localization",
    "Synthetic Data Generation",
    "Perception Systems",
    "Eye Tracking",
  ],
  "Spatial Computing & XR": [
    "Mixed Reality Hardware",
    "AR/VR Architecture",
    "6DoF Tracking",
    "Embedded Systems",
    "Sensor Fusion",
  ],
  "System Architecture": [
    "Program Management",
    "Hardware-Software Co-design",
    "Mass Production",
    "Multi-org Coordination",
    "8-Figure Budgets",
  ],
  "Domains & Technologies": [
    "Wireless & DSP",
    "Cyber Security",
    "Intelligence Systems",
    "Real-time Embedded",
    "Computer Vision SDKs",
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Areas of Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two decades building at the intersection of AI, spatial computing, and national-scale systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <h3 className="font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
