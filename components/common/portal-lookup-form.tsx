"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn, FieldValues, Resolver } from "react-hook-form";
import { ZodType } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface PortalLookupFormProps<T extends FieldValues> {
  schema: any;
  defaultValues: T;
  onSubmit: (values: T) => void;
  isLoading?: boolean;
  title: string;
  description?: string;
  children?: (form: UseFormReturn<T>) => React.ReactNode;
}

export function PortalLookupForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  isLoading,
  title,
  description,
  children,
}: PortalLookupFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as any,
  });

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-border shadow-xl">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name={"admissionNumber" as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Admission Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Admission No." {...field} className="h-12 rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={"dateOfBirth" as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="h-12 rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {children && children(form)}

          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Searching...
              </>
            ) : (
              "Check Now"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
