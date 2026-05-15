import { PortalPlaceholder } from "@/components/common/portal-placeholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Login",
  description: "Login to your personal dashboard to manage all your school activities.",
};

export default function LoginPage() {
  return (
    <PortalPlaceholder 
      title="Student Login" 
      description="The secure student and parent login portal is being upgraded to provide a better user experience. Please check back soon or contact the school office for urgent enquiries."
    />
  );
}
