import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Text to Everything
        </h1>
        <p className="text-xl text-muted-foreground">
          Transform your text into speech, images, and videos with ease. Experience the power of AI-driven conversions.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Button asChild size="lg">
            <Link href="/generate">
              Start Converting
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/sign-in">
              Sign In
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-16">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Text to Speech</h2>
            <p className="text-muted-foreground">
              Convert your text into natural-sounding speech in multiple languages
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Text to Image</h2>
            <p className="text-muted-foreground">
              Generate stunning images from your text descriptions
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Text to Video</h2>
            <p className="text-muted-foreground">
              Create engaging videos from your text content
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
