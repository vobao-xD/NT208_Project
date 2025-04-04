const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface ConversionRequest {
  text: string;
  inputLanguage: string;
  outputType: string;
}

export interface ConversionResponse {
  id: string;
  url: string;
  type: string;
  createdAt: string;
}

export const api = {
  async convertText(data: ConversionRequest): Promise<ConversionResponse> {
    const response = await fetch(`${API_BASE_URL}/api/convert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to convert text');
    }

    return response.json();
  },

  async getHistory(): Promise<ConversionResponse[]> {
    const response = await fetch(`${API_BASE_URL}/api/history`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch history');
    }

    return response.json();
  },

  async shareConversion(id: string, platform: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/api/share`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, platform }),
    });

    if (!response.ok) {
      throw new Error('Failed to share conversion');
    }
  },
}; 