"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link href="/" className="font-bold text-2xl">
            Text to Everything
          </Link>

          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Button
              asChild
              variant={pathname === "/generate" ? "default" : "ghost"}
            >
              <Link href="/generate">Convert</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
} 