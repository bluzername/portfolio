import { Metadata } from "next";
import { getAllProducts } from "@/lib/products";
import { ProductsGrid } from "@/components/products/products-grid";

export const metadata: Metadata = {
  title: "Products | Evyatar Bluzer",
  description:
    "Live products, prototypes, and experiments built by Evyatar Bluzer. Web apps, Chrome extensions, Telegram bots, and AI-powered tools.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Products</h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            Live products, prototypes, and experiments. These are real tools people use—not just code on GitHub.
            Try them out, break them, tell me what you think.
          </p>
        </div>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}
