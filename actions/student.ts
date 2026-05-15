"use server";

import { db } from "@/lib/db";
import { students, studentResults } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { portalLookupSchema, PortalLookupValues } from "@/lib/validations/portal";

export async function getStudentResult(values: PortalLookupValues) {
  try {
    // Validate input
    const validatedFields = portalLookupSchema.safeParse(values);
    
    if (!validatedFields.success) {
      return { error: "Invalid input fields." };
    }

    const { admissionNumber, dateOfBirth } = validatedFields.data;

    // Find student
    const student = await db.query.students.findFirst({
      where: and(
        eq(students.admissionNumber, admissionNumber),
        eq(students.dateOfBirth, dateOfBirth)
      ),
      with: {
        results: true,
      },
    });

    if (!student) {
      return { error: "Student not found. Please check your Admission Number and Date of Birth." };
    }

    if (!student.results || student.results.length === 0) {
      return { 
        student,
        error: "No results found for this student." 
      };
    }

    // Sort results by publishedAt descending to get latest first
    const sortedResults = [...student.results].sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return { 
      student,
      results: sortedResults,
      latestResult: sortedResults[0]
    };
  } catch (error) {
    console.error("Error fetching student result:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
