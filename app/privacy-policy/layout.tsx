import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BazarMio by Mio Labs LLC",
  description:
    "BazarMio privacy policy. Free Plan users have zero data collection — everything stays on your device. Learn how Mio Labs LLC handles data for Premium cloud sync users.",
  keywords:
    "privacy policy, data protection, LOPDP, BazarMio, Mio Labs, Ecuador privacy law",
  openGraph: {
    title: "Privacy Policy | BazarMio",
    description:
      "Free Plan: zero data collection. Premium Plan: optional cloud sync with explicit consent. Full LOPDP compliance.",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
