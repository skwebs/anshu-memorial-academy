"use client";

import * as React from "react";
import { PortalLookupForm } from "@/components/common/portal-lookup-form";
import { portalLookupSchema, PortalLookupValues } from "@/lib/validations/portal";
import { getStudentResult } from "@/actions/student";
import { ResultView } from "@/features/student/result-view";
import { toast } from "sonner";
import { GraduationCap } from "lucide-react";

export default function ResultPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<{ student: any; result: any } | null>(null);

  async function onSubmit(values: PortalLookupValues) {
    setIsLoading(true);
    try {
      const response = await getStudentResult(values);
      
      if (response.error) {
        toast.error(response.error);
        setData(null);
      } else if (response.student && response.latestResult) {
        setData({
          student: response.student,
          result: response.latestResult
        });
        toast.success("Result found successfully!");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the result.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleReset = () => {
    setData(null);
  };

  return (
    <div className="min-h-screen bg-secondary/10 py-12 px-4 md:px-6">
      <div className="container mx-auto">
        {!data ? (
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-2">
                <GraduationCap className="h-10 w-10" />
              </div>
              <h1 className="text-4xl font-black tracking-tight text-primary sm:text-5xl">
                Examination Results
              </h1>
              <p className="text-lg text-muted-foreground">
                Access your academic performance reports and examination results by entering your admission details below.
              </p>
            </div>

            <PortalLookupForm
              title="Result Lookup"
              description="Enter your details to view your progress report"
              schema={portalLookupSchema}
              defaultValues={{ admissionNumber: "", dateOfBirth: "" }}
              onSubmit={onSubmit}
              isLoading={isLoading}
            />
            
            <div className="max-w-md mx-auto p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-sm text-blue-800 leading-relaxed">
                <strong>Need Help?</strong> If you have forgotten your admission number or are unable to access your result, please contact the school administration office.
              </div>
            </div>
          </div>
        ) : (
          <ResultView 
            student={data.student} 
            result={data.result} 
            onReset={handleReset} 
          />
        )}
      </div>
    </div>
  );
}
