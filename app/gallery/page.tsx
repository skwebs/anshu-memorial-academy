"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Academics",
  "Annual Function",
  "Sports",
  "Celebrations",
  "Classroom Activities",
];

const galleryImages = [
  { id: 1, category: "Academics", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", title: "Smart Learning" },
  { id: 2, category: "Sports", src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop", title: "Sports Day 2024" },
  { id: 3, category: "Celebrations", src: "https://images.unsplash.com/photo-1511551203524-9a24350a5771?q=80&w=2070&auto=format&fit=crop", title: "Independence Day" },
  { id: 4, category: "Annual Function", src: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070&auto=format&fit=crop", title: "Cultural Program" },
  { id: 5, category: "Classroom Activities", src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop", title: "Science Project" },
  { id: 6, category: "Academics", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop", title: "Library Session" },
  { id: 7, category: "Sports", src: "https://images.unsplash.com/photo-1544333346-64e4fe18274b?q=80&w=2071&auto=format&fit=crop", title: "Football Match" },
  { id: 8, category: "Celebrations", src: "https://images.unsplash.com/photo-1514533212735-5df27d970db0?q=80&w=1924&auto=format&fit=crop", title: "School Anniversary" },
  { id: 9, category: "Classroom Activities", src: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2070&auto=format&fit=crop", title: "Group Discussion" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">School Gallery</h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            A glimpse into the vibrant life at Anshu Memorial Academy. Capturing moments of learning, joy, and achievement.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
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
                  activeCategory === cat ? "bg-primary shadow-lg scale-105" : "hover:border-primary hover:text-primary"
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
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{img.category}</span>
                    <h4 className="text-xl font-bold text-white">{img.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 bg-secondary/10 rounded-3xl border border-dashed border-border">
               <p className="text-lg text-muted-foreground">No photos found in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
