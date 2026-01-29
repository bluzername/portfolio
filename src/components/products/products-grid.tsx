"use client";

import { Product } from "@/lib/products";
import { ProductCard } from "./product-card";

interface ProductsGridProps {
  products: Product[];
}

export function ProductsGrid({ products }: ProductsGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No products to display.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
