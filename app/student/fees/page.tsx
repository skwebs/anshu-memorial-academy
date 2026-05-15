import { PortalPlaceholder } from "@/components/common/portal-placeholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Fee Payment",
  description: "Securely pay school fees online and download previous receipts.",
};

export default function FeesPage() {
  return <PortalPlaceholder title="Online Fees" />;
}
