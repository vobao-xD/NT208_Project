'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TextInputFormProps {
  onSubmit: (data: {
    text: string;
    inputLanguage: string;
    outputType: string;
  }) => void;
}

export function TextInputForm({ onSubmit }: TextInputFormProps) {
  const [text, setText] = useState('');
  const [inputLanguage, setInputLanguage] = useState('vi');
  const [outputType, setOutputType] = useState('image');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ text, inputLanguage, outputType });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Text to Everything</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Textarea
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[200px]"
            />
          </div>
          
          <div className="flex gap-4">
            <div className="flex-1">
              <Select value={inputLanguage} onValueChange={setInputLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vi">Vietnamese</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <Select value={outputType} onValueChange={setOutputType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select output type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="speech">Speech</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Convert
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 