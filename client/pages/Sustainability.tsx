import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Heart, TreePine, Calendar, Recycle } from "lucide-react";

export default function Sustainability() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-900/20 via-emerald-800/20 to-green-900/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Leaf className="h-10 w-10 text-green-600" />
              <h1
                className="text-4xl font-bold"
                style={{
                  color: "#f17c33",
                  fontWeight: "700",
                }}
              >
                Sustainability at{" "}
                <span
                  style={{
                    color: "#f17c33",
                    fontWeight: "700",
                  }}
                >
                  Savanna
                </span>{" "}
                Ethiopia Travel 🌍
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              At Savanna Ethiopia Travel, we believe tourism should protect what
              makes Ethiopia extraordinary — its breathtaking landscapes,
              ancient heritage, and vibrant communities.
            </p>
          </div>
        </section>

        {/* Our Commitments */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Commitments
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our journeys are designed to minimize environmental impact,
                support local livelihoods, and preserve culture for future
                generations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center border-2 border-green-200 hover:border-green-300 transition-colors">
                <CardHeader>
                  <Leaf className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Eco-Friendly Travel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Low-impact tours, reusable essentials, and ethical wildlife
                    practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-blue-200 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">
                    Community Empowerment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Partnering with local guides, artisans, and homestays to
                    ensure your visit directly benefits Ethiopian families.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-purple-200 hover:border-purple-300 transition-colors">
                <CardHeader>
                  <Heart className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">
                    Cultural Preservation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Respecting sacred sites like Lalibela & Aksum while
                    celebrating traditions, festivals, and storytelling.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-orange-200 hover:border-orange-300 transition-colors">
                <CardHeader>
                  <TreePine className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Sustainable Stays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Eco-lodges and hotels that use renewable energy, conserve
                    resources, and invest in their communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Travel That Makes a Difference */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Travel That Makes a Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From trekking the Simien Mountains to coffee tours in Yirgacheffe,
              every journey with us is crafted to be meaningful — for you, for
              the people you meet, and for the land you explore.
            </p>
            <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-lg p-8 border border-green-200">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                ✨ Join us in making tourism a force for good
              </h3>
              <p className="text-lg text-green-700 mb-6">
                Travel with purpose, leave a positive impact, and help preserve
                Ethiopia's wonders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700" asChild>
                  <Link to="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Sustainable Travel
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/about">Learn About Our Mission</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Recycle className="h-6 w-6 text-green-600" />
                    Environmental Responsibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Minimizing waste and promoting recycling during tours
                    </li>
                    <li>
                      • Using eco-friendly transportation options when available
                    </li>
                    <li>
                      • Supporting conservation projects in national parks
                    </li>
                    <li>
                      • Educating travelers about environmental protection
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-blue-600" />
                    Community Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Employing local guides and support staff</li>
                    <li>• Purchasing supplies from local businesses</li>
                    <li>• Supporting community development projects</li>
                    <li>• Respecting local customs and traditions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
