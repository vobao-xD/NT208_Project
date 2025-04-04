'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

interface ConversionResultProps {
  type: 'image' | 'video' | 'speech';
  url: string;
  onShare?: () => void;
}

export function ConversionResult({ type, url, onShare }: ConversionResultProps) {
  const renderContent = () => {
    switch (type) {
      case 'image':
        return (
          <img
            src={url}
            alt="Generated image"
            className="w-full h-auto rounded-lg"
          />
        );
      case 'video':
        return (
          <video
            src={url}
            controls
            className="w-full rounded-lg"
          />
        );
      case 'speech':
        return (
          <audio
            src={url}
            controls
            className="w-full"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardContent className="pt-6">
        <div className="space-y-4">
          {renderContent()}
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={onShare}
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 