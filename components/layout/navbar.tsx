"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  GraduationCap, 
  Phone, 
  Home, 
  Info, 
  BookOpen, 
  UserPlus, 
  Building2, 
  Image as ImageIcon, 
  Mail,
  FileText,
  UserCheck,
  CreditCard,
  LogIn,
  MessageSquare,
  ChevronRight,
  PhoneCall
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const navIcons: Record<string, any> = {
  Home: Home,
  About: Info,
  Academics: BookOpen,
  Admissions: UserPlus,
  Facilities: Building2,
  Gallery: ImageIcon,
  Contact: Mail,
};

const studentIcons: Record<string, any> = {
  Result: FileText,
  Attendance: UserCheck,
  Fees: CreditCard,
  Login: LogIn,
};

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="rounded-full bg-primary p-1.5 text-primary-foreground shadow-sm">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight tracking-tight sm:text-xl text-primary">
                {siteConfig.shortName}
              </span>
              <span className="hidden text-[10px] font-semibold uppercase tracking-widest text-muted-foreground xs:block">
                Anshu Memorial Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
                {pathname === item.href && (
                  <span className="absolute inset-x-3 bottom-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:flex items-center rounded-full"
              asChild
            >
              <a href={`tel:${siteConfig.contact.phones[0].replace(/\s+/g, "")}`}>
                <Phone className="mr-2 h-4 w-4 text-accent" />
                <span>Call Us</span>
              </a>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground font-semibold rounded-full shadow-md hover:shadow-lg transition-all" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="md:hidden ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-primary transition-all hover:bg-secondary active:scale-95">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col p-0 w-[300px] sm:w-[350px] gap-0">
                {/* Fixed Header Area */}
                <div className="p-4 border-b shrink-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-20">
                  <SheetHeader className="text-left p-0 space-y-0">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-xl bg-primary p-2 text-primary-foreground shadow-sm shrink-0">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <SheetTitle className="text-base font-bold tracking-tight text-primary truncate">
                          Anshu Memorial Academy
                        </SheetTitle>
                        <p className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground truncate">
                          English Medium • CBSE Pattern
                        </p>
                      </div>
                    </div>
                    <SheetDescription className="text-[10px] mt-1 text-muted-foreground/80 font-semibold flex items-center">
                      <span className="bg-secondary px-1.5 py-0.5 rounded text-[9px] mr-2">Est. 2012</span>
                      Play to Class 8
                    </SheetDescription>
                  </SheetHeader>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
                  <div className="px-4 py-6 space-y-8">
                    {/* Main Navigation */}
                    <div className="space-y-1">
                      <p className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50 mb-3">
                        Main Menu
                      </p>
                      {siteConfig.mainNav.map((item) => {
                        const Icon = navIcons[item.title] || ChevronRight;
                        const isActive = pathname === item.href;
                        
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 group",
                              isActive
                                ? "bg-primary/5 text-primary border-l-4 border-primary pl-3"
                                : "text-muted-foreground hover:bg-secondary hover:text-primary"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className={cn(
                              "mr-3 h-4.5 w-4.5 transition-colors",
                              isActive ? "text-primary" : "text-muted-foreground/60 group-hover:text-primary"
                            )} />
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>

                    <div className="h-px bg-border/60 mx-4" />

                    {/* Student Portal Navigation */}
                    <div className="space-y-1">
                      <p className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50 mb-3">
                        Student Portal
                      </p>
                      {siteConfig.studentResources.map((item) => {
                        const Icon = studentIcons[item.title] || ChevronRight;
                        const isActive = pathname === item.href;
                        
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 group",
                              isActive
                                ? "bg-primary/5 text-primary border-l-4 border-primary pl-3"
                                : "text-muted-foreground hover:bg-secondary hover:text-primary"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className={cn(
                              "mr-3 h-4.5 w-4.5 transition-colors",
                              isActive ? "text-primary" : "text-muted-foreground/60 group-hover:text-primary"
                            )} />
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                    
                    {/* CTA Section (Inside Scrollable) */}
                    <div className="px-2">
                      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
                              Admissions Open
                            </p>
                            <p className="text-sm font-bold text-foreground">
                              Session 2026–27
                            </p>
                          </div>
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <UserPlus className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <Button size="sm" className="w-full bg-primary text-primary-foreground font-semibold rounded-xl" asChild>
                          <Link href="/admissions" onClick={() => setIsOpen(false)}>
                            Apply Now
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Area (Sticks to bottom of content) */}
                  <div className="mt-auto border-t bg-secondary/30 p-4 shrink-0">
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" size="sm" className="rounded-xl border-border bg-background h-10 shadow-sm" asChild>
                        <a href={`tel:${siteConfig.contact.phones[0].replace(/\s+/g, "")}`}>
                          <PhoneCall className="mr-2 h-3.5 w-3.5 text-primary" />
                          <span className="text-xs font-semibold">Call School</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-xl border-border bg-background h-10 shadow-sm" asChild>
                        <a href={`https://wa.me/${siteConfig.contact.phones[0].replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                          <MessageSquare className="mr-2 h-3.5 w-3.5 text-green-600" />
                          <span className="text-xs font-semibold">WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
