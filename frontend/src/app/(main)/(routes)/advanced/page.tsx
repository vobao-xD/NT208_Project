"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function AdvancedPage() {
  const [settings, setSettings] = useState({
    speech: {
      voice: "banmai",
      speed: 1.0,
      pitch: 1.0,
    },
    image: {
      style: "realistic",
      steps: 20,
      quality: "standard",
    },
    video: {
      quality: "720p",
      fps: 30,
      duration: 10,
    },
    general: {
      autoSave: true,
      darkMode: false,
    }
  });

  const handleSave = async () => {
    try {
      // Save settings logic will be implemented here
      console.log("Saving settings:", settings);
      localStorage.setItem("userSettings", JSON.stringify(settings));
    } catch (error) {
      console.error("Failed to save settings:", error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Advanced Settings</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Text to Speech Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Text to Speech Settings</CardTitle>
            <CardDescription>Configure voice and audio settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Voice</Label>
              <Select 
                value={settings.speech.voice}
                onValueChange={(value) => 
                  setSettings(prev => ({
                    ...prev,
                    speech: { ...prev.speech, voice: value }
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select voice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banmai">Ban Mai (Female)</SelectItem>
                  <SelectItem value="leminh">Le Minh (Male)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Speed</Label>
              <Slider
                value={[settings.speech.speed]}
                min={0.5}
                max={2.0}
                step={0.1}
                onValueChange={([value]) =>
                  setSettings(prev => ({
                    ...prev,
                    speech: { ...prev.speech, speed: value }
                  }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Image Generation Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Image Generation Settings</CardTitle>
            <CardDescription>Configure image quality and style</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Style</Label>
              <Select
                value={settings.image.style}
                onValueChange={(value) =>
                  setSettings(prev => ({
                    ...prev,
                    image: { ...prev.image, style: value }
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realistic">Realistic</SelectItem>
                  <SelectItem value="artistic">Artistic</SelectItem>
                  <SelectItem value="cartoon">Cartoon</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Quality</Label>
              <Select
                value={settings.image.quality}
                onValueChange={(value) =>
                  setSettings(prev => ({
                    ...prev,
                    image: { ...prev.image, quality: value }
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select quality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="ultra">Ultra</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>Configure application preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-save">Auto Save</Label>
              <Switch
                id="auto-save"
                checked={settings.general.autoSave}
                onCheckedChange={(checked) =>
                  setSettings(prev => ({
                    ...prev,
                    general: { ...prev.general, autoSave: checked }
                  }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="md:col-span-2">
          <Button onClick={handleSave} className="w-full">
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
} 