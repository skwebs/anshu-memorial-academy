import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examination Results",
  description: "View and download your academic performance reports and examination results.",
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
