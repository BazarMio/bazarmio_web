import { redirect } from "next/navigation";

// Middleware handles the redirect to /en or /es.
// This is a fallback in case middleware is bypassed.
export default function RootPage() {
  redirect("/en");
}
