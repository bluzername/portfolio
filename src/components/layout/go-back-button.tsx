"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GoBackButton() {
  return (
    <Button
      variant="outline"
      size="lg"
      className="gap-2"
      onClick={() => window.history.back()}
    >
      <ArrowLeft className="h-5 w-5" />
      Go Back
    </Button>
  );
}
