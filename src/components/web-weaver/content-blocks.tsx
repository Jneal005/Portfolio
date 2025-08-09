import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutDashboard, LayoutGrid, Mail, MessageSquare, PanelBottom, Star } from 'lucide-react';

const blocks = [
  { title: 'Hero Section', icon: <LayoutDashboard className="h-6 w-6" /> },
  { title: 'Feature Grid', icon: <LayoutGrid className="h-6 w-6" /> },
  { title: 'Testimonials', icon: <MessageSquare className="h-6 w-6" /> },
  { title: 'Contact Form', icon: <Mail className="h-6 w-6" /> },
  { title: 'Call to Action', icon: <Star className="h-6 w-6" /> },
  { title: 'Footer', icon: <PanelBottom className="h-6 w-6" /> },
];

export function ContentBlocks() {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <h3 className="text-sm font-medium text-muted-foreground px-2">Content Blocks</h3>
      <div className="grid grid-cols-2 gap-2">
        {blocks.map((block) => (
          <Card key={block.title} className="cursor-pointer hover:border-primary transition-colors text-center group">
            <CardContent className="p-4 flex flex-col items-center gap-2">
              <div className="text-muted-foreground group-hover:text-primary transition-colors">{block.icon}</div>
              <p className="text-xs font-medium">{block.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
