import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TallyEmbed from "@/components/TallyEmbed";
import { MessageSquare, Heart } from "lucide-react";

export default function Feedback() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <section className="relative bg-gradient-to-r from-vibrant-pink/20 via-vibrant-purple/20 to-vibrant-blue/20 py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageSquare className="h-10 w-10 text-vibrant-pink" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-vibrant-pink bg-clip-text text-transparent">
                Share Your Experience
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Your feedback helps us improve our services and helps future
              travelers plan their Ethiopian adventures
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <Card className="hover:shadow-lg transition-shadow border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl">
              <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-vibrant-red" />
                  Tell Us About Your Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <TallyEmbed
                  src="https://tally.so/embed/mDQ2Gl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  title="Savanna Ethiopia – Customer Feedback"
                  height={900}
                  className="rounded-xl"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
