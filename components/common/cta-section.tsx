import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground shadow-2xl md:px-16 md:py-20">
          {/* Decorative background elements */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto font-bold text-primary px-8"
                asChild
              >
                <Link href={buttonHref}>{buttonText}</Link>
              </Button>
              {secondaryButtonText && secondaryButtonHref && (
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-primary px-8 transition-colors"
                  asChild
                >
                  <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
