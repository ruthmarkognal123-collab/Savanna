import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Compass,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Calendar,
  Navigation,
  Map,
} from "lucide-react";

const directions = [
  {
    id: 1,
    title: "Northern Ethiopia: Ancient Kingdoms & Breathtaking Landscapes",
    direction: "North",
    duration: "12 Days / 11 Nights",
    style: "Luxury Cultural & Adventure Journey",
    price: "45,000 ETB",
    priceUSD: "($800 USD)",
    highlights: [
      "Lake Tana monasteries and Blue Nile Falls",
      "Gondar's Royal Enclosure and castles",
      "Simien Mountains trekking with gelada baboons",
      "Axum stelae and ancient civilization",
      "Tigray cliff churches including Abuna Yemata Guh",
      "Danakil Depression expedition",
      "Lalibela rock-hewn churches",
    ],
    destinations: [
      "Addis Ababa",
      "Bahir Dar",
      "Gondar",
      "Simien Mountains",
      "Axum",
      "Mekelle",
      "Danakil",
      "Lalibela",
    ],
    description:
      "A comprehensive journey through Ethiopia's most famous historical circuit, combining ancient civilizations with dramatic landscapes.",
  },
  {
    id: 2,
    title: "Southern Ethiopia: Tribes, Lakes & Highlands",
    direction: "South",
    duration: "10 Days",
    style: "Cultural Immersion • Nature • Safari Adventure",
    price: "38,500 ETB",
    priceUSD: "($685 USD)",
    highlights: [
      "Rift Valley Lakes with abundant birdlife",
      "Dorze, Konso, Hamar, Karo, Dassanech, and Mursi tribes",
      "Bale Mountains wildlife and Ethiopian wolves",
      "Lake Chamo boat safari with hippos and crocodiles",
      "Omo Valley cultural encounters",
      "Mago National Park wilderness",
    ],
    destinations: [
      "Addis Ababa",
      "Hawassa",
      "Bale Mountains",
      "Arba Minch",
      "Turmi",
      "Jinka",
      "Omo Valley",
    ],
    description:
      "Immerse yourself in the incredible cultural diversity of southern Ethiopia while experiencing spectacular natural beauty.",
  },
  {
    id: 3,
    title: "Eastern Ethiopia: Heritage, Culture & Natural Wonders",
    direction: "East",
    duration: "6 Days",
    style: "Cultural Immersion • History • Wildlife",
    price: "22,800 ETB",
    priceUSD: "($405 USD)",
    highlights: [
      "Awash National Park wildlife",
      "Awash Falls spectacular 70-meter cascade",
      "Dire Dawa historic railway city",
      "Harar Jugol UNESCO walled city",
      "Hyena Feeding Ceremony",
      "Coffee culture and spice markets",
    ],
    destinations: ["Addis Ababa", "Awash National Park", "Dire Dawa", "Harar"],
    description:
      "Discover the eastern highlands, ancient walled cities, and unique cultural traditions of Ethiopia's eastern regions.",
  },
  {
    id: 4,
    title: "Western Ethiopia: Coffee, Forests & Wildlife Adventure",
    direction: "West",
    duration: "6 Days",
    style: "Cultural Immersion • Nature & Wildlife",
    price: "24,500 ETB",
    priceUSD: "($435 USD)",
    highlights: [
      "Birthplace of Arabica coffee in Bonga",
      "Jimma historical coffee kingdom",
      "Aba Jifar Palace and museum",
      "Chebera Churchura National Park",
      "Elephants, buffalo, monkeys, and exotic birds",
      "Traditional coffee ceremonies",
    ],
    destinations: ["Addis Ababa", "Jimma", "Bonga", "Chebera Churchura"],
    description:
      "Journey to the birthplace of coffee and explore Ethiopia's lush western forests and wildlife parks.",
  },
];

export default function DiscoverDirectionPackages() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-900/20 via-cyan-800/20 to-teal-900/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Compass className="h-10 w-10 text-teal-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Discovery by Direction
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore Ethiopia's diverse regions - each direction offers unique
              landscapes, cultures, and experiences
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-3 py-1">
                <Users className="w-3 h-3 mr-1" />
                30+ Successful Tours
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Navigation className="w-3 h-3 mr-1" />
                1+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Map className="w-3 h-3 mr-1" />
                Regional Expert
              </Badge>
            </div>
          </div>
        </section>

        {/* Direction Cards */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {directions.map((direction) => (
                <Card
                  key={direction.id}
                  className="overflow-hidden border-2 hover:border-teal-600/20 transition-all duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-teal-600/5 to-cyan-600/5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 flex items-start gap-2">
                          <Navigation className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                          <div>
                            <div className="leading-tight">
                              {direction.title}
                            </div>
                            <Badge
                              variant="outline"
                              className="mt-2 text-xs border-teal-600/50"
                            >
                              {direction.direction} Ethiopia
                            </Badge>
                          </div>
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {direction.style}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {direction.duration}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {direction.description}
                    </p>

                    {/* Destinations */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-teal-600" />
                        Key Destinations
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {direction.destinations.map((dest, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {dest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-sm">Highlights</h4>
                      <div className="space-y-1">
                        {direction.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs"
                          >
                            <CheckCircle className="w-2 h-2 text-teal-600 mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                        <Link to="/booking">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book This Journey
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/contact">Customize Itinerary</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-teal-900 via-cyan-800 to-teal-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Choose Your Direction of Discovery
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Each direction offers unique experiences - from ancient history to
              diverse cultures and stunning landscapes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/booking">
                  <Compass className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-teal-900"
                asChild
              >
                <Link to="/contact">Plan Custom Route</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
