import { SectionHeader } from "@/components/common/section-header";
import { CTASection } from "@/components/common/cta-section";
import { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Laptop,
  Microscope,
  Music,
  Palette,
  Trophy,
  Users,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academics",
  description: "Explore our comprehensive academic programs following the CBSE pattern, from Play Group to Middle School, designed for holistic student development.",
};

export default function AcademicsPage() {
  const levels = [
    {
      title: "Play Group & Nursery",
      age: "3 - 4 Years",
      focus:
        "Play-based learning, social interaction, and motor skills development.",
      icon: <Star className="h-6 w-6" />,
      color: "bg-pink-50 text-pink-600 border-pink-100",
    },
    {
      title: "Kindergarten (LKG & UKG)",
      age: "4 - 6 Years",
      focus: "Foundation of literacy, numeracy, and creative expression.",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      title: "Primary (Class 1 - 5)",
      age: "6 - 11 Years",
      focus:
        "Comprehensive curriculum with focus on languages, math, and science.",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Middle School (Class 6 - 8)",
      age: "11 - 14 Years",
      focus:
        "Analytical thinking, advanced concepts, and personal development.",
      icon: <Microscope className="h-6 w-6" />,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  const methodology = [
    {
      title: "Interactive Learning",
      description:
        "Using smart classes and digital tools to make lessons engaging.",
      icon: <Laptop className="h-6 w-6 text-primary" />,
    },
    {
      title: "Student-Centric",
      description:
        "Small class sizes ensuring personalized attention to every child.",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "CBSE Pattern",
      description:
        "Following a balanced approach that aligns with national standards.",
      icon: <Trophy className="h-6 w-6 text-primary" />,
    },
    {
      title: "Holistic Assessment",
      description:
        "Regular feedback focusing on overall growth, not just marks.",
      icon: <Music className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Academic Programs
          </h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            Our curriculum is designed to foster curiosity, critical thinking,
            and a lifelong love for learning.
          </p>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Education Levels"
            title="Nurturing Minds at Every Stage"
            description="We offer a structured educational journey from the very first steps in Play Group to the critical middle school years."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {levels.map((level, i) => (
              <Card
                key={i}
                className={`border shadow-sm transition-all hover:shadow-md ${level.color}`}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                    {level.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {level.title}
                  </CardTitle>
                  <CardDescription className="font-semibold">
                    {level.age}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90 leading-relaxed text-slate-700">
                    {level.focus}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                Our Teaching Methodology
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Anshu Memorial Academy, we believe that how children learn is
                just as important as what they learn. We employ a blend of
                traditional values and modern technology.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {methodology.map((m, i) => (
                  <div key={i} className="flex flex-col space-y-2">
                    <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      {m.icon}
                    </div>
                    <h4 className="font-bold text-primary">{m.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/placeholders/placeholder.svg"
                alt="Students in classroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Subjects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-3xl bg-primary/5 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Core Focus Areas
                </h3>
                <p className="text-muted-foreground">
                  Our curriculum emphasizes balanced growth across all essential
                  domains of knowledge.
                </p>
              </div>
              <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                  "English Fluency",
                  "Mathematics",
                  "Science & EVS",
                  "Hindi & Sanskrit",
                  "Computer Science",
                  "Moral Education",
                  "General Knowledge",
                  "Arts & Crafts",
                  "Physical Education",
                ].map((subject, i) => (
                  <div
                    key={i}
                    className="bg-white px-4 py-3 rounded-xl border border-border flex items-center space-x-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm font-semibold">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to provide your child with the best education?"
        description="Enrollment for the new session is currently open. Visit our admission page to learn about the process."
        buttonText="Admission Process"
        buttonHref="/admissions"
        secondaryButtonText="Enquire Now"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
