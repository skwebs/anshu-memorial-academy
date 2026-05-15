import { 
  FileText, 
  UserCheck, 
  CreditCard, 
  LogIn,
  type LucideIcon 
} from "lucide-react";

export interface PortalItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  enabled: boolean;
  external?: boolean;
}

export const studentPortalConfig: PortalItem[] = [
  {
    title: "Result",
    description: "Access your latest examination results and academic performance reports.",
    icon: FileText,
    href: "/student/result",
    color: "bg-blue-50",
    enabled: true,
  },
  {
    title: "Attendance",
    description: "Track your daily attendance and view monthly attendance reports.",
    icon: UserCheck,
    href: "/student/attendance",
    color: "bg-green-50",
    enabled: true,
  },
  {
    title: "Fees",
    description: "Securely pay school fees online and download previous receipts.",
    icon: CreditCard,
    href: "/student/fees",
    color: "bg-purple-50",
    enabled: true,
  },
  {
    title: "Login",
    description: "Login to your personal dashboard to manage all your school activities.",
    icon: LogIn,
    href: "/student/login",
    color: "bg-orange-50",
    enabled: true,
  },
];
