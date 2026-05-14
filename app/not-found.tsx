"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <h1 className="text-[12rem] font-black text-primary/5 select-none leading-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
            <Search className="h-12 w-12 text-primary" />
          </div>
        </div>
      </div>
      
      <h2 className="text-4xl font-bold text-primary mb-4">Page Not Found</h2>
      <p className="text-lg text-muted-foreground max-w-md mb-12">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <Link href="/">
            <Home className="mr-2 h-5 w-5" /> Back to Home
          </Link>
        </Button>
        <Button size="lg" variant="outline" onClick={() => window.history.length > 1 ? window.history.back() : window.location.href = "/"}>
          <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
        </Button>
      </div>
    </div>
  );
}
