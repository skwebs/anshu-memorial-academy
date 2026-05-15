import { db } from "./index";
import { students, studentResults, studentAttendance, studentFees } from "./schema";

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  // Use with caution in production!
  // await db.delete(studentResults);
  // await db.delete(studentAttendance);
  // await db.delete(studentFees);
  // await db.delete(students);

  const studentData = [
    {
      admissionNumber: "AMA2026001",
      name: "Rahul Kumar",
      dateOfBirth: "2015-05-15",
      gender: "Male" as const,
      class: "Class 5",
      section: "A",
      fatherName: "Sanjay Kumar",
      motherName: "Anita Devi",
      contactNumber: "9128289100",
      address: "Rajapakar, Vaishali",
    },
    {
      admissionNumber: "AMA2026002",
      name: "Priya Kumari",
      dateOfBirth: "2016-08-20",
      gender: "Female" as const,
      class: "Class 4",
      section: "B",
      fatherName: "Rakesh Singh",
      motherName: "Sita Devi",
      contactNumber: "9973757920",
      address: "Bhatha Chowk, Vaishali",
    },
    {
      admissionNumber: "AMA2026003",
      name: "Aryan Raj",
      dateOfBirth: "2014-12-10",
      gender: "Male" as const,
      class: "Class 6",
      section: "A",
      fatherName: "Amit Kumar",
      motherName: "Meena Devi",
      contactNumber: "9876543210",
      address: "Hajipur, Vaishali",
    },
  ];

  for (const data of studentData) {
    const [insertedStudent] = await db.insert(students).values(data).returning();

    // Seed results
    await db.insert(studentResults).values({
      studentId: insertedStudent.id,
      academicYear: "2025-26",
      examType: "Final",
      subjects: JSON.stringify([
        { name: "Mathematics", marks: 95, total: 100 },
        { name: "Science", marks: 88, total: 100 },
        { name: "English", marks: 92, total: 100 },
        { name: "Social Science", marks: 90, total: 100 },
        { name: "Hindi", marks: 85, total: 100 },
      ]),
      totalMarks: 500,
      obtainedMarks: 450,
      percentage: "90.00",
      grade: "A+",
      resultStatus: "Pass",
    });

    // Seed attendance (last 5 days)
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      await db.insert(studentAttendance).values({
        studentId: insertedStudent.id,
        date: date.toISOString().split("T")[0],
        status: Math.random() > 0.1 ? "Present" : "Absent",
      });
    }

    // Seed fees
    await db.insert(studentFees).values({
      studentId: insertedStudent.id,
      invoiceNumber: `INV-${insertedStudent.admissionNumber}-01`,
      amount: "5000.00",
      paymentDate: "2026-04-01",
      paymentMethod: "Online",
      feeType: "Admission Fee",
      academicYear: "2026-27",
      status: "Paid",
    });
  }

  console.log("Seeding completed!");
}

main().catch((err) => {
  console.error("Seeding failed:");
  console.error(err);
  process.exit(1);
});
