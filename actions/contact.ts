"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  // Validate the data
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  // In a real application, you would send an email or save to a database here
  // For now, we'll simulate a delay and return success
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("Contact form submitted:", validatedFields.data);

  return {
    success: "Message sent successfully!",
  };
}
