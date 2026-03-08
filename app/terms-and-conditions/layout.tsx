import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | BazarMio by Mio Labs LLC",
  description:
    "Terms and Conditions for using BazarMio. Free Plan is fully offline with no account required. Premium Plan offers optional cloud sync via Google Play subscription.",
  keywords:
    "terms and conditions, terms of service, BazarMio, Mio Labs, inventory app, Wyoming LLC",
  openGraph: {
    title: "Terms & Conditions | BazarMio",
    description:
      "Legal agreement between you and Mio Labs LLC for use of the BazarMio mobile application.",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
