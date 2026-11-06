import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nicole's Blog",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}