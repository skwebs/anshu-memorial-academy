import { pgTable, text, timestamp, date, decimal, uuid, integer, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const genderEnum = pgEnum("gender", ["Male", "Female", "Other"]);
export const statusEnum = pgEnum("status", ["Active", "Inactive", "Alumni"]);

export const students = pgTable("students", {
  id: uuid("id").primaryKey().defaultRandom(),
  admissionNumber: text("admission_number").notNull().unique(),
  name: text("name").notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  gender: genderEnum("gender").notNull(),
  class: text("class").notNull(),
  section: text("section"),
  fatherName: text("father_name").notNull(),
  motherName: text("mother_name").notNull(),
  contactNumber: text("contact_number").notNull(),
  address: text("address").notNull(),
  enrollmentDate: timestamp("enrollment_date").defaultNow().notNull(),
  status: statusEnum("status").default("Active").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const studentResults = pgTable("student_results", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").references(() => students.id, { onDelete: "cascade" }).notNull(),
  academicYear: text("academic_year").notNull(), // e.g., "2026-27"
  examType: text("exam_type").notNull(), // e.g., "Final", "Mid-term"
  subjects: text("subjects").notNull(), // JSON string for simplicity or another table if needed, but requirements say minimal
  totalMarks: integer("total_marks").notNull(),
  obtainedMarks: integer("obtained_marks").notNull(),
  percentage: decimal("percentage", { precision: 5, scale: 2 }).notNull(),
  grade: text("grade").notNull(),
  resultStatus: text("result_status").notNull(), // e.g., "Pass", "Fail"
  publishedAt: timestamp("published_at").defaultNow().notNull(),
});

export const studentAttendance = pgTable("student_attendance", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").references(() => students.id, { onDelete: "cascade" }).notNull(),
  date: date("date").notNull(),
  status: text("status").notNull(), // e.g., "Present", "Absent", "Late"
  remarks: text("remarks"),
});

export const studentFees = pgTable("student_fees", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").references(() => students.id, { onDelete: "cascade" }).notNull(),
  invoiceNumber: text("invoice_number").notNull().unique(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  paymentDate: date("payment_date").notNull(),
  paymentMethod: text("payment_method").notNull(), // e.g., "Online", "Cash", "Check"
  feeType: text("fee_type").notNull(), // e.g., "Tuition", "Exam", "Transport"
  academicYear: text("academic_year").notNull(),
  status: text("status").notNull(), // e.g., "Paid", "Pending"
});

// Relations
export const studentsRelations = relations(students, ({ many }) => ({
  results: many(studentResults),
  attendance: many(studentAttendance),
  fees: many(studentFees),
}));

export const studentResultsRelations = relations(studentResults, ({ one }) => ({
  student: one(students, {
    fields: [studentResults.studentId],
    references: [students.id],
  }),
}));

export const studentAttendanceRelations = relations(studentAttendance, ({ one }) => ({
  student: one(students, {
    fields: [studentAttendance.studentId],
    references: [students.id],
  }),
}));

export const studentFeesRelations = relations(studentFees, ({ one }) => ({
  student: one(students, {
    fields: [studentFees.studentId],
    references: [students.id],
  }),
}));
