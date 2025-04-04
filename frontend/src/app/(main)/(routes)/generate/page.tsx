"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function GeneratePage() {
  const [text, setText] = useState("");
  const [outputType, setOutputType] = useState("speech");
  const [language, setLanguage] = useState("vi");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // API call will be implemented here
      console.log("Converting:", { text, outputType, language });
    } catch (error) {
      console.error("Conversion failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Text Conversion</h1>
      
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <Card className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Text</label>
              <Textarea
                placeholder="Enter your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[200px]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium">Output Type</label>
                <Select value={outputType} onValueChange={setOutputType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select output type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="speech">Text to Speech</SelectItem>
                    <SelectItem value="image">Text to Image</SelectItem>
                    <SelectItem value="video">Text to Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium">Language</label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vi">Vietnamese</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleSubmit} 
              disabled={!text || isLoading}
              className="w-full"
            >
              {isLoading ? "Converting..." : "Convert"}
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Output</h2>
            <div className="min-h-[200px] flex items-center justify-center text-muted-foreground">
              Your converted content will appear here
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 