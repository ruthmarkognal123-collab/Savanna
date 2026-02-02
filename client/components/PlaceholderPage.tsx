import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="text-center max-w-md mx-auto p-8">
        <Construction className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-muted-foreground mb-6">
          {description || "This page is currently under construction. Please continue exploring other sections of our website or contact us for more information."}
        </p>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Want to see this page completed? Continue prompting to add more content!
          </p>
          <Button asChild variant="outline">
            <a href="/" className="inline-flex items-center">
              Return to Homepage
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
