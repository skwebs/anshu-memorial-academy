import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notice Board",
  description: "Stay updated with the latest news, announcements, and events from Anshu Memorial Academy's official notice board.",
};

export default function NoticeBoardPage() {
  const notices = [
    {
      id: 1,
      title: "Admission Open for Session 2026-27",
      date: "May 10, 2026",
      category: "Admission",
      priority: "High",
      content: "Registration forms for Play Group to Class 8 are now available at the school office. Early bird benefits for registrations before May 30th.",
    },
    {
      id: 2,
      title: "Summer Vacation Announcement",
      date: "May 05, 2026",
      category: "Academic",
      priority: "Normal",
      content: "The school will remain closed for summer vacation from May 20th to June 15th. Holiday homework has been uploaded to the student portal.",
    },
    {
      id: 3,
      title: "Annual Sports Meet Winners",
      date: "April 28, 2026",
      category: "Sports",
      priority: "Normal",
      content: "Congratulations to all the winners of the Annual Sports Meet 2024. Photos have been uploaded to the gallery.",
    },
    {
      id: 4,
      title: "New Smart Classes Inauguration",
      date: "April 15, 2026",
      category: "Facilities",
      priority: "Normal",
      content: "We are proud to announce the inauguration of 4 new digital smart classrooms to enhance interactive learning.",
    },
    {
      id: 5,
      title: "Parent-Teacher Meeting (PTM)",
      date: "April 10, 2026",
      category: "Event",
      priority: "Normal",
      content: "PTM for the first monthly assessment will be held on April 12th from 9:00 AM to 12:00 PM. Presence of both parents is requested.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Notice Board</h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            Stay updated with the latest news, announcements, and events at Anshu Memorial Academy.
          </p>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeader
            subtitle="Updates & News"
            title="Latest Announcements"
            align="left"
          />

          <div className="space-y-6">
            {notices.map((notice) => (
              <div 
                key={notice.id} 
                className={cn(
                  "p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all group relative overflow-hidden",
                  notice.priority === "High" ? "bg-accent/5 border-accent/20" : "bg-white"
                )}
              >
                {notice.priority === "High" && (
                  <div className="absolute top-0 right-0">
                     <div className="bg-accent text-white text-[10px] font-bold uppercase py-1 px-4 rotate-45 translate-x-4 translate-y-2 shadow-sm">
                        Urgent
                     </div>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {notice.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground font-medium">
                        <Calendar className="mr-1.5 h-4 w-4" />
                        {notice.date}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                      {notice.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {notice.content}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Button variant="ghost" className="text-primary hover:text-accent font-bold group-hover:bg-primary/5">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <div className="inline-flex items-center p-4 bg-secondary/30 rounded-2xl border border-border">
                <Info className="h-5 w-5 text-primary mr-3" />
                <p className="text-sm text-muted-foreground">
                   Older notices are archived. Contact the school office for historical records.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { cn } from "@/lib/utils";
