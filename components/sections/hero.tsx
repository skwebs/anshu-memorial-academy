"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-16">
      {/* Decorative background components */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 z-0 hidden lg:block" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl z-0" />

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
              <Button size="default" className="w-full sm:w-auto text-lg" asChild>
                <Link href="/admissions">
                  Enroll Your Child <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="w-full sm:w-auto text-lg"
                asChild
              >
                <Link href="/about">Explore School</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">Play - 8</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Classes
                </p>
              </div>
              <div className="h-12 w-px bg-border hidden sm:block" />
              <div>
                <p className="text-3xl font-bold text-primary">CBSE</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Pattern
                </p>
              </div>
              <div className="h-12 w-px bg-border hidden sm:block" />
              <div>
                <p className="text-3xl font-bold text-primary">2017</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Est. Year
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative px-2 sm:px-0"
          >
            <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-secondary shadow-2xl border-4 border-white">
              <Image
                src="/images/placeholders/placeholder.svg"
                alt="Students in classroom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-primary/5" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white/95 text-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-xl group">
                  <Play className="h-8 w-8 ml-1 fill-primary" />
                </div>
              </div>

              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-4 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm sm:text-base">Empowering Futures</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">A legacy of quality education since 2017</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute -top-4 -right-2 sm:-top-8 sm:-right-8 h-20 w-20 sm:h-28 sm:w-28 rounded-3xl bg-accent flex flex-col items-center justify-center text-white shadow-2xl animate-pulse z-20">
              <span className="text-xl sm:text-3xl font-bold">100%</span>
              <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-tighter text-center px-1">Dedicated</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
