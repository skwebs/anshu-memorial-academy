import { Metadata } from "next";
import { GalleryContent } from "@/components/sections/gallery-content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Take a visual tour of Anshu Memorial Academy. Explore photos of our campus, academic activities, sports events, and cultural celebrations.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            School Gallery
          </h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            A glimpse into the vibrant life at Anshu Memorial Academy. Capturing
            moments of learning, joy, and achievement.
          </p>
        </div>
      </section>

      <GalleryContent />
    </div>
  );
}
