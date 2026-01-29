"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Product, platformConfig } from "@/lib/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const platform = platformConfig[product.platform];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
        {/* Product Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Platform Badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${platform.bgColor} ${platform.color}`}
            >
              {platform.label}
            </span>
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                {product.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground font-medium">
                {product.tagline}
              </p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              {product.links.github && (
                <Link
                  href={product.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${product.name} source on GitHub`}
                >
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {product.links.live && (
                <Link
                  href={product.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Try ${product.name}`}
                >
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {product.links.video && (
                <Link
                  href={product.links.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${product.name} demo`}
                >
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Play className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <CardDescription className="line-clamp-3 text-sm">
            {product.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
