'use client';

import { useState } from 'react';
import { TextInputForm } from '@/components/TextInputForm';
import { ConversionResult } from '@/components/ConversionResult';
import { api, ConversionResponse } from '@/lib/api';
import { toast } from 'react-hot-toast';

export default function Home() {
  const [result, setResult] = useState<ConversionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async (data: {
    text: string;
    inputLanguage: string;
    outputType: string;
  }) => {
    try {
      setIsLoading(true);
      const response = await api.convertText(data);
      setResult(response);
      toast.success('Conversion completed successfully!');
    } catch (error) {
      toast.error('Failed to convert text. Please try again.');
      console.error('Conversion error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = async () => {
    if (!result) return;
    
    try {
      await api.shareConversion(result.id, 'facebook');
      toast.success('Shared successfully!');
    } catch (error) {
      toast.error('Failed to share. Please try again.');
      console.error('Share error:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Text to Everything
          </h1>
          <p className="text-lg text-gray-600">
            Convert your text into images, videos, and speech in Vietnamese or English
          </p>
        </div>
        
        <TextInputForm onSubmit={handleConvert} />
        
        {isLoading && (
          <div className="text-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Converting your text...</p>
          </div>
        )}
        
        {result && !isLoading && (
          <ConversionResult
            type={result.type as 'image' | 'video' | 'speech'}
            url={result.url}
            onShare={handleShare}
          />
        )}
      </div>
    </main>
  );
}
