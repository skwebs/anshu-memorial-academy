"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  "All",
  "Academics",
  "Annual Function",
  "Sports",
  "Celebrations",
  "Classroom Activities",
];

const galleryImages = [
  {
    id: 1,
    category: "Academics",
    src: "/images/placeholders/placeholder.svg",
    title: "Smart Learning",
  },
  {
    id: 2,
    category: "Sports",
    src: "/images/placeholders/placeholder.svg",
    title: "Sports Day 2024",
  },
  {
    id: 3,
    category: "Celebrations",
    src: "/images/placeholders/placeholder.svg",
    title: "Independence Day",
  },
  {
    id: 4,
    category: "Annual Function",
    src: "/images/placeholders/placeholder.svg",
    title: "Cultural Program",
  },
  {
    id: 5,
    category: "Classroom Activities",
    src: "/images/placeholders/placeholder.svg",
    title: "Science Project",
  },
  {
    id: 6,
    category: "Academics",
    src: "/images/placeholders/placeholder.svg",
    title: "Library Session",
  },
  {
    id: 7,
    category: "Sports",
    src: "/images/placeholders/placeholder.svg",
    title: "Football Match",
  },
  {
    id: 8,
    category: "Celebrations",
    src: "/images/placeholders/placeholder.svg",
    title: "School Anniversary",
  },
  {
    id: 9,
    category: "Classroom Activities",
    src: "/images/placeholders/placeholder.svg",
    title: "Group Discussion",
  },
];

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          subtitle="Vibrant Campus Life"
          title="Capturing Our Moments"
          description="Explore our various activities, from academic excellence to sports and cultural celebrations."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className={cn(
                "rounded-full px-6 transition-all",
                activeCategory === cat
                  ? "bg-primary shadow-lg scale-105"
                  : "hover:border-primary hover:text-primary",
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square overflow-hidden rounded-3xl bg-secondary shadow-md hover:shadow-2xl transition-all"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
                    {img.category}
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    {img.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-secondary/10 rounded-3xl border border-dashed border-border">
            <p className="text-lg text-muted-foreground">
              No photos found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
