import { SectionHeader } from "@/components/common/section-header";
import { CTASection } from "@/components/common/cta-section";
import { ShieldCheck, Target, Eye, Heart, GraduationCap, History } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Academic Excellence",
      description: "We strive for the highest standards in education, encouraging students to reach their full potential.",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Character Building",
      description: "Our focus is not just on grades, but on developing strong moral values and ethical conduct.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    },
    {
      title: "Holistic Growth",
      description: "We nurture the physical, emotional, and social well-being of every student.",
      icon: <Heart className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Breadcrumb/Simple Hero */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Our School</h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            Learn about our journey, our mission, and the values that drive us to provide excellence in education.
          </p>
        </div>
      </section>

      {/* History & Journey */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
                <History className="h-4 w-4" />
                <span>Established 2017</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Rich History</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Anshu Memorial Academy (AMA) was established on 5th September 2017 with a singular mission: to bring world-class English medium education to the children of Rajapakar and Vaishali.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Managed by the <strong>Anita Bindeshwar Foundation</strong>, the school was born out of a desire to create a nurturing space where students are not just taught, but inspired. Over the years, we have grown from a small dream into a beacon of educational excellence in the region.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1523050335192-ce125a431290?q=80&w=2070&auto=format&fit=crop"
                  alt="School Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-accent rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-border flex flex-col space-y-4">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower students with a strong academic foundation, character, and life skills, enabling them to become responsible citizens and leaders of tomorrow in an environment of mutual respect and discipline.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-border flex flex-col space-y-4">
              <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a premier educational institution known for excellence in teaching, innovative learning, and the holistic development of every child, regardless of their background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="The AMA Way"
            title="Our Core Values"
            description="These principles guide every interaction, decision, and lesson at Anshu Memorial Academy."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className="text-center space-y-4 p-6">
                <div className="mx-auto h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold text-primary">{v.title}</h4>
                <p className="text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from Founder/Director (Placeholder) */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Director&apos;s Message</h2>
            <div className="text-xl italic leading-relaxed opacity-90">
              &quot;Education is the most powerful weapon which you can use to change the world. At Anshu Memorial Academy, we don&apos;t just teach subjects; we ignite minds. Our commitment is to provide an environment where every child feels seen, heard, and empowered to dream big.&quot;
            </div>
            <div className="pt-4">
              <p className="text-lg font-bold">Anita Devi</p>
              <p className="text-sm uppercase tracking-widest opacity-70">Director, Anita Bindeshwar Foundation</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Be a Part of Our Success Story"
        description="We invite parents and students to join the AMA family and experience the difference of quality education."
        buttonText="Enroll Now"
        buttonHref="/admissions"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
