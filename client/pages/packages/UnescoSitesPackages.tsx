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
  Star,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Calendar,
  Crown,
  Award,
} from "lucide-react";

const unescoSites = [
  {
    id: 1,
    title: "Lalibela Rock-Hewn Churches",
    subtitle: "New Jerusalem of Ethiopia",
    duration: "3 Days",
    price: "7,200 ETB",
    priceUSD: "($130 USD)",
    highlights: [
      "11 monolithic churches carved from solid rock",
      "12th-century architectural marvels",
      "Bet Giyorgis (iconic cross-shaped church)",
      "Yimrehane Kristos cave church",
      "Religious pilgrimage site",
    ],
    description:
      "The Lalibela rock-hewn churches represent one of humanity's greatest architectural achievements, carved entirely from solid volcanic rock in the 12th century.",
  },
  {
    id: 2,
    title: "Simien Mountains National Park",
    subtitle: "Roof of Africa",
    duration: "5 Days",
    price: "8,500 ETB",
    priceUSD: "($150 USD)",
    highlights: [
      "Dramatic escarpments over 4,000m",
      "Endemic wildlife: gelada baboons, Walia ibex",
      "Ras Dashen peak (4,543m)",
      "Ancient volcanic landscapes",
      "Unique Afro-alpine ecosystem",
    ],
    description:
      "Known as the 'Roof of Africa', the Simien Mountains offer some of the most spectacular landscapes on the continent with unique endemic species.",
  },
  {
    id: 3,
    title: "Axum Archaeological Site",
    subtitle: "Ancient Kingdom Capital",
    duration: "3 Days",
    price: "6,800 ETB",
    priceUSD: "($120 USD)",
    highlights: [
      "Ancient stelae and obelisks",
      "Queen of Sheba's Palace ruins",
      "Church of St. Mary of Zion",
      "Archaeological treasures",
      "Axumite civilization remnants",
    ],
    description:
      "Axum was the heart of ancient Ethiopia, representing the legendary Queen of Sheba and the Axumite Empire that dominated trade routes.",
  },
  {
    id: 4,
    title: "Harar Jugol (Fortified Historic Town)",
    subtitle: "The Fourth Holy City of Islam",
    duration: "3 Days",
    price: "5,900 ETB",
    priceUSD: "($105 USD)",
    highlights: [
      "16th-century walled city",
      "Traditional Harari houses",
      "Hyena feeding ceremony",
      "Islamic heritage sites",
      "Cultural diversity",
    ],
    description:
      "Harar Jugol is considered the fourth holiest city of Islam, known for its distinctive architecture and vibrant cultural life.",
  },
  {
    id: 5,
    title: "Lower Valley of the Omo",
    subtitle: "Cradle of Human Evolution",
    duration: "6 Days",
    price: "15,500 ETB",
    priceUSD: "($275 USD)",
    highlights: [
      "Paleontological significance",
      "Diverse tribal cultures",
      "Archaeological discoveries",
      "Human evolution sites",
      "Living cultural heritage",
    ],
    description:
      "The Omo Valley is renowned for both its archaeological significance in human evolution and its incredible cultural diversity.",
  },
  {
    id: 6,
    title: "Konso Cultural Landscape",
    subtitle: "Living Cultural Landscape",
    duration: "2 Days",
    price: "4,200 ETB",
    priceUSD: "($75 USD)",
    highlights: [
      "Ancient terraced agriculture",
      "Waga grave markers",
      "Traditional Konso culture",
      "Sustainable farming practices",
      "Stone-walled settlements",
    ],
    description:
      "The Konso Cultural Landscape represents 400 years of adaptation to a dry, hostile environment through terraced agriculture.",
  },
  {
    id: 7,
    title: "Bale Mountains National Park",
    subtitle: "Ethiopian Highlands Ecosystem",
    duration: "5 Days",
    price: "9,200 ETB",
    priceUSD: "($165 USD)",
    highlights: [
      "Largest area of Afro-alpine habitat",
      "Ethiopian wolf population",
      "Sanetti Plateau (4,000m+)",
      "Harenna Forest",
      "Endemic flora and fauna",
    ],
    description:
      "Bale Mountains contains the largest area of Afro-alpine habitat in Africa and is home to more endemic mammals than any other park in Africa.",
  },
];

export default function UnescoSitesPackages() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900/20 via-indigo-800/20 to-blue-900/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="h-10 w-10 text-blue-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                UNESCO World Heritage Sites
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore Ethiopia's remarkable UNESCO World Heritage Sites - from
              ancient rock churches to unique ecosystems
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-3 py-1">
                <Users className="w-3 h-3 mr-1" />
                30+ Successful Tours
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Award className="w-3 h-3 mr-1" />
                1+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Star className="w-3 h-3 mr-1" />
                UNESCO Certified
              </Badge>
            </div>
          </div>
        </section>

        {/* Sites Cards */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unescoSites.map((site) => (
                <Card
                  key={site.id}
                  className="overflow-hidden border-2 hover:border-blue-600/20 transition-all duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-blue-600/5 to-indigo-600/5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg flex items-start gap-2 leading-tight">
                          <Crown className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <div>{site.title}</div>
                            <div className="text-sm font-normal text-blue-700 mt-1">
                              {site.subtitle}
                            </div>
                          </div>
                        </CardTitle>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {site.duration}
                      </span>
                      <Badge
                        variant="outline"
                        className="text-xs border-blue-600/50"
                      >
                        <Star className="w-2 h-2 mr-1" />
                        UNESCO
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {site.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-blue-600" />
                        Highlights
                      </h4>
                      <div className="space-y-1">
                        {site.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs"
                          >
                            <CheckCircle className="w-2 h-2 text-blue-600 mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                        asChild
                      >
                        <Link to="/booking">
                          <Calendar className="w-3 h-3 mr-1" />
                          Book UNESCO Tour
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">More Information</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Explore World Heritage Wonders
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Discover sites recognized by UNESCO for their outstanding value to
              humanity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/booking">
                  <Star className="mr-2 h-5 w-5" />
                  Book UNESCO Experience
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-900"
                asChild
              >
                <Link to="/contact">Plan Your Heritage Tour</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
