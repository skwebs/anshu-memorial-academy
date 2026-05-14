import { HeroSection } from "@/components/sections/hero";
import { SectionHeader } from "@/components/common/section-header";
import { CTASection } from "@/components/common/cta-section";
import { GraduationCap, Users, ShieldCheck, Palette, Microscope, Laptop } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "CBSE Pattern",
      description: "Comprehensive curriculum following CBSE guidelines for modern educational standards.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Smart Classes",
      description: "Interactive learning with digital tools to make education engaging and effective.",
      icon: <Laptop className="h-6 w-6" />,
    },
    {
      title: "Computer Lab",
      description: "Fully equipped computer lab to prepare students for the digital world.",
      icon: <Microscope className="h-6 w-6" />,
    },
    {
      title: "Expert Faculty",
      description: "Dedicated and qualified teachers who nurture every student's unique potential.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Safe Environment",
      description: "A secure and disciplined campus ensuring peace of mind for parents.",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: "Co-curricular",
      description: "Emphasis on sports, arts, and cultural activities for holistic development.",
      icon: <Palette className="h-6 w-6" />,
    },
  ];

  return (
    <div className="flex flex-col gap-0">
      <HeroSection />

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Why Choose AMA"
            title="Excellence in Every Aspect"
            description="We are committed to providing an environment where students can thrive academically, socially, and emotionally."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border bg-secondary/10 p-8 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute bottom-0 right-0 h-24 w-24 -mr-8 -mb-8 rounded-full bg-accent/5 transition-all group-hover:bg-accent/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                 <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                    alt="School Building"
                    className="w-full h-full object-cover"
                 />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
                 <p className="text-sm font-bold text-primary mb-1">Managed By</p>
                 <p className="text-lg font-bold">Anita Bindeshwar Foundation</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-sm font-bold uppercase tracking-widest text-accent">About Our School</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary leading-tight">
                Shaping the Leaders of <span className="text-accent">Tomorrow</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Anshu Memorial Academy was established on 5th September 2017 with a vision to provide quality education to the children of Rajapakar and surrounding areas. Our school is built on the foundation of discipline, dedication, and excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We follow a student-centric approach, ensuring that every child receives personal attention and the right tools to succeed in an ever-changing world.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                 <div className="space-y-1">
                    <p className="text-3xl font-bold text-primary">Play - 8</p>
                    <p className="text-sm font-semibold text-muted-foreground uppercase">Classes</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-3xl font-bold text-primary">100%</p>
                    <p className="text-sm font-semibold text-muted-foreground uppercase">Commitment</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Child's Journey?"
        description="Join Anshu Memorial Academy and give your child the gift of quality education and holistic development. Admissions are currently open for the session 2026-27."
        buttonText="Enroll Now"
        buttonHref="/admissions"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
