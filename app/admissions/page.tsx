import { SectionHeader } from "@/components/common/section-header";
import { CTASection } from "@/components/common/cta-section";
import { AdmissionInquiryForm } from "@/components/common/admission-form";
import { FileText, CheckCircle, ClipboardCheck, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AdmissionsPage() {
  const steps = [
    {
      title: "Registration",
      description: "Obtain the registration form from the school office or fill the online inquiry form.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Interaction/Test",
      description: "A friendly interaction with the child and parents. For higher classes, a basic proficiency test.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Documentation",
      description: "Submission of required documents and completion of the admission form.",
      icon: <ClipboardCheck className="h-6 w-6" />,
    },
    {
      title: "Confirmation",
      description: "Payment of fees and confirmation of admission.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  const documents = [
    "Birth Certificate (Original & Photocopy)",
    "Transfer Certificate (TC) from previous school",
    "Previous Class Report Card",
    "Passport size photographs (4 pieces)",
    "Aadhar Card of Student and Parents",
    "Medical Fitness Certificate (if applicable)",
  ];

  const faqs = [
    {
      question: "What is the age criteria for Nursery admission?",
      answer: "The child should be 3+ years old as of 31st March of the admission year.",
    },
    {
      question: "What are the school timings?",
      answer: "Summer: 7:30 AM to 1:30 PM. Winter: 8:30 AM to 2:30 PM. (Subject to change as per government orders)",
    },
    {
      question: "Does the school provide transport facilities?",
      answer: "Yes, we have a safe and reliable transport facility covering Rajapakar and nearby areas.",
    },
    {
      question: "What is the teacher-student ratio?",
      answer: "We maintain a healthy ratio of 1:25 to ensure personalized attention for every student.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Admissions</h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            Join the Anshu Memorial Academy family. We make the admission process simple, transparent, and welcoming.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="How to Join"
            title="Our Admission Process"
            description="Follow these simple steps to secure a bright future for your child."
          />
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-secondary/10 border border-transparent hover:border-accent/20 transition-all">
                <div className="mb-4 h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && (
                   <div className="hidden lg:block absolute top-12 -right-4 z-10">
                      <div className="h-0.5 w-8 bg-accent/30" />
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-primary">Required Documents</h2>
              <p className="text-muted-foreground">Please keep these documents ready for a smooth admission process.</p>
              <ul className="grid gap-3">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-border">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border">
               <AdmissionInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeader
            subtitle="Common Questions"
            title="Admission FAQs"
          />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
                <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        title="Start Your Child's Bright Future Today"
        description="Limited seats available for the session 2026-27. Don't miss out on giving your child the AMA advantage."
        buttonText="Apply Now"
        buttonHref="/admissions"
        secondaryButtonText="Call Admissions"
        secondaryButtonHref="tel:9128289100"
      />
    </div>
  );
}
