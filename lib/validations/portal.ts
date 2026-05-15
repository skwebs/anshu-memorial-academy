import { z } from "zod";

export const portalLookupSchema = z.object({
  admissionNumber: z.string().min(1, "Admission number is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
});

export type PortalLookupValues = z.infer<typeof portalLookupSchema>;

export const resultLookupSchema = portalLookupSchema.extend({
  academicYear: z.string().min(1, "Academic year is required"),
});

export type ResultLookupValues = z.infer<typeof resultLookupSchema>;

export const attendanceLookupSchema = portalLookupSchema.extend({
  month: z.string().optional(),
  year: z.string().optional(),
});

export type AttendanceLookupValues = z.infer<typeof attendanceLookupSchema>;

export const feesLookupSchema = portalLookupSchema;

export type FeesLookupValues = z.infer<typeof feesLookupSchema>;
