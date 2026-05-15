"use server";

import * as z from "zod";

const admissionFormSchema = z.object({
  studentName: z.string().min(2),
  parentName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  grade: z.string().min(1),
  address: z.string().min(5),
});

export async function submitAdmissionForm(values: z.infer<typeof admissionFormSchema>) {
  // Validate the data
  const validatedFields = admissionFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  // In a real application, you would send an email or save to a database here
  // For now, we'll simulate a delay and return success
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("Admission inquiry submitted:", validatedFields.data);

  return {
    success: "Inquiry submitted successfully!",
  };
}
