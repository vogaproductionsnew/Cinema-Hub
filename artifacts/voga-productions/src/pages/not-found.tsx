import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ background: '#0a0a0a' }}>
      <Card className="w-full max-w-md mx-4" style={{ background: '#111', border: '1px solid rgba(240,234,214,0.1)' }}>
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8" style={{ color: '#c9a84c' }} />
            <h1 className="text-2xl font-bold" style={{ color: '#f0ead6' }}>404 Page Not Found</h1>
          </div>
          <p className="mt-4 text-sm" style={{ color: 'rgba(240,234,214,0.6)' }}>
            The page you're looking for doesn't exist.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
