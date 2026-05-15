import Link from "next/link";
import { GraduationCap, ArrowLeft, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface PortalPlaceholderProps {
  title: string;
  description?: string;
}

export function PortalPlaceholder({ title, description }: PortalPlaceholderProps) {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="rounded-2xl bg-primary/5 p-6 mb-8 text-primary">
        <GraduationCap className="h-16 w-16" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
        {title} Portal
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-xl mb-12">
        {description || "This feature is currently being integrated with the school's central management system and will be available to students and parents shortly."}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 w-full max-w-md">
        <Button asChild variant="outline" className="rounded-xl border-border h-12">
          <Link href="/student">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </Button>
        <Button asChild className="rounded-xl bg-primary text-primary-foreground h-12 shadow-lg">
          <Link href="/contact">
            Contact Support
          </Link>
        </Button>
      </div>

      <div className="mt-16 pt-8 border-t w-full max-w-2xl flex flex-col items-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
          Immediate Assistance
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href={`tel:${siteConfig.contact.phones[0].replace(/\s+/g, "")}`}
            className="flex items-center text-primary font-bold hover:underline"
          >
            <Phone className="mr-2 h-4 w-4" />
            {siteConfig.contact.phones[0]}
          </a>
          <a 
            href={`https://wa.me/${siteConfig.contact.phones[0].replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-600 font-bold hover:underline"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
