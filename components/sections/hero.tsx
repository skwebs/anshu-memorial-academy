"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-16">
      {/* Decorative background components */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/50 -skew-x-12 translate-x-1/2 z-0" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              <GraduationCap className="h-4 w-4" />
              <span>Admissions Open for 2026-27</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Nurturing <span className="text-primary">Excellence</span>, <br />
              Inspiring <span className="text-accent">Growth</span>.
            </h1>

            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
              Anshu Memorial Academy provides a premium English medium education
              following the CBSE pattern. We focus on holistic development,
              modern teaching methods, and a safe, disciplined environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg font-bold" asChild>
                <Link href="/admissions">
                  Enroll Your Child <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold"
                asChild
              >
                <Link href="/about">Explore School</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8 border-t border-border w-fit">
              <div>
                <p className="text-3xl font-bold text-primary">Play - 8</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                  Classes
                </p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">CBSE</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                  Pattern
                </p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">2017</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                  Est. Year
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual Content (Placeholder for Image/Video) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-3xl bg-secondary shadow-2xl border-4 border-white">
              {/* Replace with real school photo */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-primary/10" />
              </div>

              {/* Play Button Overlay (Optional) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white/90 text-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg group">
                  <Play className="h-8 w-8 ml-1 fill-primary" />
                </div>
              </div>

              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Empowering Futures</h4>
                    <p className="text-sm text-muted-foreground">A legacy of quality education since 2017</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-accent flex flex-col items-center justify-center text-white shadow-xl animate-bounce">
              <span className="text-2xl font-bold">100%</span>
              <span className="text-[10px] uppercase font-bold tracking-tighter text-center px-1">Dedicated</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
