'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, LoaderCircle, Monitor, Smartphone, Tablet, Code } from 'lucide-react';
import { useState, useEffect } from 'react';

type LayoutPreviewProps = {
  htmlContent: string;
  isLoading: boolean;
};

export function LayoutPreview({ htmlContent, isLoading }: LayoutPreviewProps) {
  const [previewKey, setPreviewKey] = useState(0);
  const [view, setView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    // Force iframe to re-render when htmlContent changes
    setPreviewKey(prev => prev + 1);
  }, [htmlContent]);

  const handleExport = () => {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const getPreviewSize = () => {
    switch(view) {
      case 'tablet': return { width: '768px' };
      case 'mobile': return { width: '375px' };
      default: return { width: '100%' };
    }
  }

  return (
    <div className="h-full flex flex-col bg-muted/40 rounded-lg overflow-hidden border">
      <header className="flex items-center justify-between p-2 border-b bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-1">
          <Button variant={view === 'desktop' ? 'secondary' : 'ghost'} size="icon" onClick={() => setView('desktop')} aria-label="Desktop View">
            <Monitor className="h-5 w-5" />
          </Button>
          <Button variant={view === 'tablet' ? 'secondary' : 'ghost'} size="icon" onClick={() => setView('tablet')} aria-label="Tablet View">
            <Tablet className="h-5 w-5" />
          </Button>
          <Button variant={view === 'mobile' ? 'secondary' : 'ghost'} size="icon" onClick={() => setView('mobile')} aria-label="Mobile View">
            <Smartphone className="h-5 w-5" />
          </Button>
        </div>
        <Button onClick={handleExport} disabled={!htmlContent || isLoading}>
          <Download />
          Export HTML
        </Button>
      </header>
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center overflow-auto">
        <Card
          className="h-full shadow-2xl transition-all duration-300 ease-in-out bg-background"
          style={getPreviewSize()}
        >
          <CardContent className="p-0 h-full">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
                <LoaderCircle className="w-12 h-12 animate-spin text-primary" />
                <p className="font-medium">Generating your blueprint...</p>
              </div>
            )}
            {!isLoading && !htmlContent && (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground p-8 text-center">
                <Code className="w-16 h-16" />
                <h2 className="text-xl font-medium text-foreground">Your Website Preview Awaits</h2>
                <p>Describe your ideal website in the panel on the left and our AI will weave a blueprint for you.</p>
              </div>
            )}
            {!isLoading && htmlContent && (
              <iframe
                key={previewKey}
                srcDoc={htmlContent}
                title="Website Preview"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin"
              />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
