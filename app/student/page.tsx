import { SectionHeader } from "@/components/common/section-header";
import { 
  FileText, 
  Download, 
  ExternalLink,
  GraduationCap,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { studentPortalConfig } from "@/config/student-portal";

export default function StudentResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 hidden lg:block">
           <GraduationCap className="h-64 w-64" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Student Resources</h1>
          <p className="text-xl opacity-90 max-w-2xl leading-relaxed">
            Everything you need for your academic journey, all in one place. Access results, attendance, and more via our integrated digital campus.
          </p>
        </div>
      </section>

      {/* Main Resources Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Digital Campus"
            title="Access Your Portal"
            description="Our integrated student management system provides easy access to all essential services."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {studentPortalConfig.map((res, i) => {
              const Icon = res.icon;
              return (
                <div key={i} className={cn("p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center space-y-5 group", res.color)}>
                  <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-md">
                      <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{res.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {res.description}
                    </p>
                  </div>
                  <Button asChild className="w-full mt-auto rounded-xl font-semibold shadow-sm group-hover:shadow-md transition-all">
                      <Link href={res.href} className="flex items-center justify-center">
                        {res.external ? "Open Portal" : "Access Now"} 
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                 <h2 className="text-3xl font-bold text-primary tracking-tight">Important Downloads</h2>
                 <p className="text-lg text-muted-foreground">Download school documents, calendars, and academic resources directly to your device.</p>
                 
                 <div className="space-y-4">
                    {[
                      { title: "Academic Calendar 2026-27", size: "1.2 MB", type: "PDF" },
                      { title: "School Uniform Policy", size: "850 KB", type: "PDF" },
                      { title: "Holiday List 2026", size: "400 KB", type: "PDF" },
                      { title: "Standard Operating Procedures", size: "2.1 MB", type: "PDF" },
                    ].map((file, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-border hover:border-primary transition-colors cursor-pointer group">
                         <div className="flex items-center space-x-4">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                               <FileText className="h-5 w-5" />
                            </div>
                            <div>
                               <p className="font-bold text-primary group-hover:text-accent transition-colors">{file.title}</p>
                               <p className="text-xs text-muted-foreground">{file.type} • {file.size}</p>
                            </div>
                         </div>
                         <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative p-10 bg-primary rounded-3xl text-primary-foreground shadow-2xl">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <GraduationCap className="h-40 w-40" />
                 </div>
                 <div className="relative z-10 space-y-8">
                    <h3 className="text-2xl font-bold italic">&quot;An investment in knowledge pays the best interest.&quot;</h3>
                    <div className="h-1 w-20 bg-accent rounded-full" />
                    <p className="text-lg opacity-80 leading-relaxed">
                       We encourage students and parents to regularly check the portal for updates, as digital communication is our primary mode of sharing reports and notices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                       <Button variant="secondary" className="font-bold text-primary">
                          Parent Guide
                       </Button>
                       <Button variant="outline" className="border-primary-foreground/50 hover:bg-primary-foreground hover:text-primary">
                          Need Login Help?
                       </Button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
