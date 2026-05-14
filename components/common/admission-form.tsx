"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useState } from "react";
import { CheckCircle2, GraduationCap } from "lucide-react";

const formSchema = z.object({
  studentName: z.string().min(2, { message: "Student name is required." }),
  parentName: z.string().min(2, { message: "Parent/Guardian name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number is required." }),
  grade: z.string().min(1, { message: "Please select a grade." }),
  address: z.string().min(5, { message: "Address is required." }),
});

export function AdmissionInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      grade: "",
      address: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(values);
    setIsSubmitting(false);
    setIsSuccess(true);
  }

  if (isSuccess) {
    return (
      <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 text-center space-y-4">
        <div className="mx-auto h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold text-primary">Inquiry Submitted!</h3>
        <p className="text-muted-foreground">
          We have received your admission inquiry. Our admission counselor will contact you within 24-48 hours.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-border">
      <div className="flex items-center space-x-3 mb-8">
        <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
          <GraduationCap className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold text-primary">Admission Inquiry 2026-27</h3>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="studentName">Student Full Name *</Label>
            <Input id="studentName" placeholder="Enter student's name" {...form.register("studentName")} />
            {form.formState.errors.studentName && (
              <p className="text-xs text-destructive">{form.formState.errors.studentName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="parentName">Parent/Guardian Name *</Label>
            <Input id="parentName" placeholder="Enter parent's name" {...form.register("parentName")} />
            {form.formState.errors.parentName && (
              <p className="text-xs text-destructive">{form.formState.errors.parentName.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="email@example.com" {...form.register("email")} />
            {form.formState.errors.email && (
              <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" placeholder="91XXXXXXXX" {...form.register("phone")} />
            {form.formState.errors.phone && (
              <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="grade">Grade/Class Seeking Admission *</Label>
          <Select onValueChange={(value) => form.setValue("grade", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="play">Play Group</SelectItem>
              <SelectItem value="nursery">Nursery</SelectItem>
              <SelectItem value="lkg">LKG</SelectItem>
              <SelectItem value="ukg">UKG</SelectItem>
              {Array.from({ length: 8 }, (_, i) => (
                <SelectItem key={i + 1} value={`${i + 1}`}>Class {i + 1}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.grade && (
            <p className="text-xs text-destructive">{form.formState.errors.grade.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Residential Address *</Label>
          <Input id="address" placeholder="Area, City" {...form.register("address")} />
          {form.formState.errors.address && (
            <p className="text-xs text-destructive">{form.formState.errors.address.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full h-12 font-bold text-lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </Button>

        <p className="text-center text-xs text-muted-foreground mt-4">
          By submitting this form, you agree to be contacted by AMA for admission purposes.
        </p>
      </form>
    </div>
  );
}
