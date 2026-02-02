import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Globe, Mountain, Flame, TreePine, Tag } from "lucide-react";

export default function SpecialOffers() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero */}
        <section className="relative bg-gradient-to-r from-vibrant-orange/20 via-vibrant-red/20 to-vibrant-pink/20 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="h-10 w-10 text-vibrant-orange" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-vibrant-orange bg-clip-text text-transparent">
                Special Offers
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              🌍 Unforgettable journeys, limited-time opportunities — with
              exclusive discounts just for you.
            </p>
          </div>
        </section>

        {/* Provided Copy */}
        <section className="py-16 px-6 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Danakil */}
            <Card className="border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl hover:border-orange-600/30 transition-colors">
              <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                <CardTitle className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-600" />
                  Danakil Depression – The Hottest Adventure on Earth
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  Witness lava lakes glowing under the night sky, endless salt
                  flats shimmering like mirrors, and camel caravans crossing
                  ancient trade routes. This is more than a trip — it’s an
                  expedition to one of the most extreme and awe-inspiring
                  landscapes on the planet.
                </p>
                <p className="font-medium">
                  👉 Experience the adventure of a lifetime.
                </p>
              </CardContent>
            </Card>

            {/* Simien */}
            <Card className="border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl hover:border-orange-600/30 transition-colors">
              <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                <CardTitle className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-orange-600" />
                  Simien Mountains – Roof of Africa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  Trek through dramatic escarpments, spot rare wildlife like the
                  Gelada baboon, and camp beneath a canopy of stars. The Simien
                  Mountains are a UNESCO World Heritage Site, offering some of
                  the most breathtaking views in all of Africa.
                </p>
                <p className="font-medium">
                  👉 Conquer the peaks, embrace the wild.
                </p>
              </CardContent>
            </Card>

            {/* South Omo */}
            <Card className="border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl hover:border-orange-600/30 transition-colors">
              <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-orange-600" />
                  South Omo – Ethiopia’s Living Museum of Cultures
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  Step into a vibrant world of tradition, color, and community.
                  Meet the tribes of South Omo, where every encounter is a
                  window into centuries-old ways of life. From the Hamar to the
                  Mursi, this is a cultural journey like no other.
                </p>
                <p className="font-medium">👉 Connect with Ethiopia’s soul.</p>
              </CardContent>
            </Card>

            {/* Bale */}
            <Card className="border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl hover:border-orange-600/30 transition-colors">
              <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="h-5 w-5 text-orange-600" />
                  Bale Mountains – Wilderness Untouched
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  Hike across vast plateaus, spot the rare Ethiopian wolf, and
                  wander through lush forests alive with birdlife. Bale is
                  Ethiopia’s hidden gem — a sanctuary for adventurers and nature
                  lovers seeking untouched beauty.
                </p>
                <p className="font-medium">
                  👉 Discover Africa’s best-kept secret.
                </p>
              </CardContent>
            </Card>

            {/* Discounts */}
            <Card className="lg:col-span-2 border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl hover:border-orange-600/30 transition-colors">
              <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-orange-600" />
                  🎁 Exclusive Discounts
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Early Bird: Book in advance and save 15%</li>
                  <li>Children Under 12: 50% off</li>
                  <li>Groups of 4+: Save 20%</li>
                </ul>
                <Badge variant="secondary" className="w-fit">
                  ⚡ Limited-time offers. Adventure waits for no one.
                </Badge>
                <div className="flex gap-3 pt-2">
                  <Button asChild>
                    <Link to="/contact">Contact for Offer</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/booking">Plan Your Trip</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
