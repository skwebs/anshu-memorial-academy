import { SectionHeader } from "@/components/common/section-header";
import { ContactForm } from "@/components/common/contact-form";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  const contactDetails = [
    {
      title: "Our Location",
      content: siteConfig.contact.address,
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: "Phone Numbers",
      content: siteConfig.contact.phones.join(", "),
      icon: <Phone className="h-6 w-6" />,
    },
    {
      title: "Email Address",
      content: siteConfig.contact.email,
      icon: <Mail className="h-6 w-6" />,
    },
    {
      title: "Office Hours",
      content: "Mon - Sat: 8:00 AM - 3:00 PM",
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            Have questions? We&apos;re here to help. Reach out to us via any of the channels below or fill out the form.
          </p>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-primary">Get in Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you&apos;re looking for admissions, have a suggestion, or just want to say hello, we&apos;d love to hear from you.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {contactDetails.map((detail, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <div className="h-12 w-12 rounded-xl bg-secondary/30 flex items-center justify-center text-primary">
                      {detail.icon}
                    </div>
                    <h3 className="font-bold text-xl">{detail.title}</h3>
                    <p className="text-muted-foreground leading-snug">{detail.content}</p>
                  </div>
                ))}
              </div>

              {/* Social Links placeholder */}
              <div className="p-8 rounded-3xl bg-accent/10 border border-accent/20">
                 <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white">
                       <Globe className="h-5 w-5" />
                    </div>
                    <div>
                       <h4 className="font-bold text-primary">Follow Our Journey</h4>
                       <p className="text-sm text-muted-foreground">Stay updated with our latest news and events.</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Form */}
            <div id="inquiry">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Visit Us"
            title="Locate AMA on Map"
          />
          <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 flex items-center justify-center relative">
             {/* Map Placeholder */}
             <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-primary mx-auto animate-bounce" />
                <p className="text-lg font-semibold text-primary">Interactive Map Placeholder</p>
                <p className="text-sm text-muted-foreground">Bhatha Chowk, Rajapakar, Vaishali, Bihar</p>
             </div>
             
             {/* Note about real map */}
             <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl text-xs text-center">
                In production, this would be a live Google Maps embed for: {siteConfig.contact.address}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
