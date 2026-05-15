import { PortalPlaceholder } from "@/components/common/portal-placeholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attendance Record",
  description: "Track your daily attendance and view monthly attendance reports.",
};

export default function AttendancePage() {
  return <PortalPlaceholder title="Attendance" />;
}
