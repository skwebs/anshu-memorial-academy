"use client";

import { Printer, GraduationCap, Calendar, User, BookOpen, Award, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface Subject {
  name: string;
  marks: number;
  total: number;
}

interface ResultViewProps {
  student: any;
  result: any;
  onReset: () => void;
}

export function ResultView({ student, result, onReset }: ResultViewProps) {
  const subjects: Subject[] = JSON.parse(result.subjects);
  const isPass = result.resultStatus.toLowerCase() === "pass";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Action Buttons - Hidden on Print */}
      <div className="flex justify-between items-center print:hidden">
        <Button variant="ghost" onClick={onReset} className="text-muted-foreground hover:text-primary">
          ← Check Another Result
        </Button>
        <Button onClick={handlePrint} className="bg-primary text-primary-foreground">
          <Printer className="mr-2 h-4 w-4" />
          Print Result
        </Button>
      </div>

      {/* Main Result Card */}
      <Card className="border-2 shadow-2xl rounded-3xl overflow-hidden print:shadow-none print:border-none">
        {/* Institutional Header */}
        <div className="bg-primary p-8 text-primary-foreground text-center relative">
          <div className="absolute top-4 right-8 opacity-10">
            <GraduationCap className="h-24 w-24" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">ANSHU MEMORIAL ACADEMY</h2>
          <p className="text-sm opacity-90 mt-1">Bhatha Chowk, Rajapakar, Vaishali, Bihar – 844124</p>
          <div className="inline-block mt-4 px-4 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
            Academic Progress Report: {result.academicYear}
          </div>
        </div>

        <CardContent className="p-8 space-y-8">
          {/* Student Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-secondary/30 p-6 rounded-2xl border border-border">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Student Name</p>
                  <p className="font-bold text-lg text-primary">{student.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Admission Number</p>
                  <p className="font-bold text-primary">{student.admissionNumber}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Class & Section</p>
                  <p className="font-bold text-primary">{student.class} - {student.section}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Examination</p>
                  <p className="font-bold text-primary">{result.examType} Examination</p>
                </div>
              </div>
            </div>
          </div>

          {/* Marks Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center">
              <span className="bg-primary/10 p-1.5 rounded-lg mr-2">
                <BookOpen className="h-4 w-4" />
              </span>
              Subject-wise Performance
            </h3>
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-6 py-4 text-sm font-bold text-primary uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-4 text-sm font-bold text-primary uppercase tracking-wider text-center">Marks Obtained</th>
                    <th className="px-6 py-4 text-sm font-bold text-primary uppercase tracking-wider text-center">Total Marks</th>
                    <th className="px-6 py-4 text-sm font-bold text-primary uppercase tracking-wider text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {subjects.map((subject, index) => (
                    <tr key={index} className="hover:bg-secondary/20 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">{subject.name}</td>
                      <td className="px-6 py-4 text-center font-bold text-primary">{subject.marks}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{subject.total}</td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant="outline" className={cn(
                          "rounded-full px-3 py-0.5",
                          subject.marks >= subject.total * 0.33 
                            ? "bg-green-50 text-green-700 border-green-200" 
                            : "bg-red-50 text-red-700 border-red-200"
                        )}>
                          {subject.marks >= subject.total * 0.33 ? "Pass" : "Fail"}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Academic Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-2">Total Marks</p>
              <p className="text-3xl font-black text-primary">{result.obtainedMarks}<span className="text-lg text-primary/40 font-bold">/{result.totalMarks}</span></p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-2">Percentage</p>
              <p className="text-3xl font-black text-primary">{result.percentage}%</p>
            </div>
            <div className={cn(
              "p-6 rounded-2xl border flex flex-col items-center text-center",
              isPass ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"
            )}>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-2">Result Status</p>
              <div className="flex items-center">
                {isPass ? (
                  <CheckCircle2 className="h-8 w-8 text-green-600 mr-2" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-600 mr-2" />
                )}
                <p className={cn(
                  "text-3xl font-black",
                  isPass ? "text-green-700" : "text-red-700"
                )}>
                  {result.resultStatus.toUpperCase()}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground italic">
            <p>Generated on {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p className="mt-2 md:mt-0">This is a computer-generated report and does not require a physical signature.</p>
          </div>
        </CardContent>
      </Card>

      {/* Institutional Disclaimer */}
      <p className="text-center text-xs text-muted-foreground max-w-2xl mx-auto print:hidden">
        Disclaimer: The academic results displayed above are for immediate information only. For official purposes, please refer to the original mark sheet issued by the Anshu Memorial Academy office.
      </p>
    </div>
  );
}
