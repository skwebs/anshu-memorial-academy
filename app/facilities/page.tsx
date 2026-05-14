import { SectionHeader } from "@/components/common/section-header";
import { CTASection } from "@/components/common/cta-section";
import { Book, Computer, Library, Shield, Trophy, Users, Bus, Zap, Wind } from "lucide-react";

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Modern Classrooms",
      description: "Spacious, well-ventilated, and naturally lit classrooms designed to provide a comfortable learning environment.",
      icon: <Wind className="h-8 w-8 text-primary" />,
    },
    {
      title: "Computer Education",
      description: "A state-of-the-art computer lab with modern systems and high-speed internet to foster digital literacy.",
      icon: <Computer className="h-8 w-8 text-primary" />,
    },
    {
      title: "Rich Library",
      description: "A wide collection of books, journals, and educational resources to encourage reading habits and research.",
      icon: <Library className="h-8 w-8 text-primary" />,
    },
    {
      title: "Safe Transport",
      description: "A fleet of well-maintained vehicles with experienced drivers ensuring safe travel for all students.",
      icon: <Bus className="h-8 w-8 text-primary" />,
    },
    {
      title: "Sports & Games",
      description: "Ample space and equipment for various sports activities to ensure physical fitness and team spirit.",
      icon: <Trophy className="h-8 w-8 text-primary" />,
    },
    {
      title: "Security & Safety",
      description: "24/7 CCTV surveillance and a dedicated security team ensuring a safe and secure campus.",
      icon: <Shield className="h-8 w-8 text-primary" />,
    },
    {
      title: "Power Backup",
      description: "Uninterrupted power supply ensuring that learning and digital activities never stop.",
      icon: <Zap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Dedicated Faculty",
      description: "Experienced and passionate teachers who act as mentors and guides for our students.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Cultural Activities",
      description: "A dedicated platform for music, dance, and arts to nurture creative talents.",
      icon: <Book className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Facilities</h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            We provide a world-class infrastructure that supports the academic, physical, and emotional growth of our students.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Campus Infrastructure"
            title="Everything Your Child Needs"
            description="Our campus is equipped with modern amenities to ensure a holistic educational experience."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-secondary/5 border border-border hover:bg-white hover:shadow-xl transition-all">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Facility (Computer Lab) */}
      <section className="py-24 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
             <div className="relative">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                    alt="Computer Lab"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl text-white">
                   <p className="text-3xl font-bold">Smart</p>
                   <p className="text-sm uppercase tracking-widest font-bold">Learning</p>
                </div>
             </div>
             <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-primary">Advanced Computer Lab</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In today&apos;s digital age, computer literacy is essential. Our school features a dedicated computer lab with modern hardware and software, ensuring that every student becomes tech-savvy from an early age.
                </p>
                <ul className="space-y-4">
                   {[
                     "Hands-on practical sessions",
                     "Safe internet browsing for research",
                     "Modern educational software",
                     "Regular workshops and competitions"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center space-x-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                           <Zap className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-semibold text-slate-700">{item}</span>
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Visit Our Campus"
        description="The best way to experience our facilities is to see them in person. Schedule a campus tour today."
        buttonText="Book a Tour"
        buttonHref="/contact"
        secondaryButtonText="Admission Inquiry"
        secondaryButtonHref="/admissions"
      />
    </div>
  );
}
