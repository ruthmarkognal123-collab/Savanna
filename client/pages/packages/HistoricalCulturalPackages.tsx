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
  Landmark,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Calendar,
  Crown,
  Church,
} from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Gonder Fasil Castle",
    subtitle: "Camelot of Africa",
    duration: "2 Days / 1 Night",
    price: "4,500 ETB",
    priceUSD: "($80 USD)",
    highlights: [
      "17th-century castles and palaces",
      "Fasil Ghebbi complex",
      "Debre Berhan Selassie Church",
      "Fasilides Bath",
      "Cultural dinner experience",
    ],
    itinerary: [
      {
        day: "Day 1",
        description:
          "Arrival in Gondar & hotel check-in. Full-day guided tour of Fasil Ghebbi, Debre Berhan Selassie Church, and Fasilides Bath. Evening cultural dinner.",
      },
      {
        day: "Day 2",
        description:
          "Morning drive to Kuskuam Monastery (residence of Empress Mentewab). Visit to local markets and handicraft shops. Transfer to hotel/airport for departure.",
      },
    ],
  },
  {
    id: 2,
    title: "Lalibela Rock-Hewn Churches",
    subtitle: "Ethiopia's New Jerusalem",
    duration: "3 Days",
    price: "7,200 ETB",
    priceUSD: "($130 USD)",
    highlights: [
      "11 monolithic churches carved from rock",
      "Bet Giyorgis (cross-shaped church)",
      "Yimrehane Kristos cave church",
      "Asheton Maryam monastery",
      "UNESCO World Heritage Site",
    ],
    itinerary: [
      {
        day: "Day 1",
        description:
          "Arrival in Lalibela. Guided tour of northern cluster including Bet Medhane Alem, Bet Maryam, and Bet Golgotha. Traditional Ethiopian coffee ceremony.",
      },
      {
        day: "Day 2",
        description:
          "Explore southern group featuring Bet Giyorgis. Drive to Yimrehane Kristos cave church. Cultural interaction with locals.",
      },
      {
        day: "Day 3",
        description:
          "Hike or mule ride to Asheton Maryam monastery. Visit Nakuto Leab church and local market. Transfer to airport.",
      },
    ],
  },
  {
    id: 3,
    title: "Axum - The Ancient Kingdom",
    subtitle: "Land of the Ark & Obelisks",
    duration: "3 Days / 2 Nights",
    price: "6,800 ETB",
    priceUSD: "($120 USD)",
    highlights: [
      "Axum Obelisks & Stelae Field (UNESCO)",
      "Church of St. Mary of Zion",
      "Queen of Sheba's Palace & Bath",
      "Tombs of ancient kings",
      "Ark of the Covenant legends",
    ],
    itinerary: [
      {
        day: "Day 1",
        description:
          "Arrival via domestic flight. Visit Stelae Field and main obelisks. Explore the Church of St. Mary of Zion.",
      },
      {
        day: "Day 2",
        description:
          "Queen of Sheba's Palace ruins and bath. Archaeological museum tour. Tombs of Kings Kaleb and Gebre Meskel.",
      },
      {
        day: "Day 3",
        description:
          "Local market visit. Final archaeological sites. Airport transfer for departure.",
      },
    ],
  },
  {
    id: 4,
    title: "Omo Valley Cultural Discovery",
    subtitle: "Living Cultural Heritage",
    duration: "6 Days",
    price: "15,500 ETB",
    priceUSD: "($275 USD)",
    highlights: [
      "Diverse tribal communities",
      "Hamar, Karo, Mursi, Dassanech tribes",
      "Traditional ceremonies",
      "Authentic cultural exchanges",
      "Remote wilderness",
    ],
    itinerary: [
      {
        day: "Day 1-2",
        description:
          "Drive to Turmi. Visit Hamar villages and witness jumping of the bulls ceremony if available.",
      },
      {
        day: "Day 3-4",
        description:
          "Karo tribe famous for body painting. Dassanech tribe along the Omo River.",
      },
      {
        day: "Day 5-6",
        description:
          "Mursi tribe with iconic lip plates. Mago National Park. Return to Addis Ababa.",
      },
    ],
  },
  {
    id: 5,
    title: "Harar & Eastern Ethiopia Explorer",
    subtitle: "The Jugol Walled City",
    duration: "4 Days",
    price: "8,900 ETB",
    priceUSD: "($160 USD)",
    highlights: [
      "UNESCO World Heritage walled city",
      "Hyena feeding ceremony",
      "Rimbaud House",
      "Traditional Harari houses",
      "Coffee culture experience",
    ],
    itinerary: [
      {
        day: "Day 1",
        description:
          "Arrival in Dire Dawa. Drive to Harar. Explore the ancient walled city and its narrow alleyways.",
      },
      {
        day: "Day 2",
        description:
          "Visit traditional Harari houses and cultural museums. Coffee tasting and spice market exploration.",
      },
      {
        day: "Day 3",
        description:
          "Rimbaud House visit. Witness the famous hyena feeding ceremony at night.",
      },
      { day: "Day 4", description: "Final city exploration and departure." },
    ],
  },
  {
    id: 6,
    title: "Arba Minch & Dorze Village",
    subtitle: "Lakes and Traditional Life",
    duration: "2 Days / 1 Night",
    price: "5,200 ETB",
    priceUSD: "($95 USD)",
    highlights: [
      "Lake Chamo boat safari",
      "Dorze traditional beehive houses",
      "Nechisar National Park",
      "Traditional weaving",
      "Mountain views",
    ],
    itinerary: [
      {
        day: "Day 1",
        description:
          "Boat trip on Lake Chamo to see hippos and crocodiles. Game drive in Nechisar National Park.",
      },
      {
        day: "Day 2",
        description:
          "Drive to Dorze Village. Cultural tour of traditional weaving and house architecture. Kocho (false banana) food tasting.",
      },
    ],
  },
];

export default function HistoricalCulturalPackages() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-900/20 via-orange-800/20 to-amber-900/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Landmark className="h-10 w-10 text-amber-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Historical & Cultural Spots
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover ancient civilizations and rich cultural heritage across
              Ethiopia
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-3 py-1">
                <Users className="w-3 h-3 mr-1" />
                30+ Successful Tours
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Calendar className="w-3 h-3 mr-1" />
                1+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Crown className="w-3 h-3 mr-1" />
                UNESCO Sites
              </Badge>
            </div>
          </div>
        </section>

        {/* Package Cards */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className="overflow-hidden border-2 hover:border-amber-600/20 transition-all duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-amber-600/5 to-orange-600/5">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1 flex items-center gap-2">
                          {pkg.id <= 3 && (
                            <Crown className="w-5 h-5 text-amber-600" />
                          )}
                          {pkg.id > 3 && (
                            <Landmark className="w-5 h-5 text-amber-600" />
                          )}
                          {pkg.title}
                        </CardTitle>
                        <CardDescription className="text-sm font-medium text-amber-700">
                          {pkg.subtitle}
                        </CardDescription>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {pkg.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4">
                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-amber-600" />
                        Highlights
                      </h4>
                      <div className="space-y-1">
                        {pkg.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs"
                          >
                            <CheckCircle className="w-2 h-2 text-green-600 mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Itinerary */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Itinerary</h4>
                      <div className="space-y-2">
                        {pkg.itinerary.map((item, idx) => (
                          <div
                            key={idx}
                            className="border-l-2 border-amber-600/20 pl-3"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Badge
                                variant="outline"
                                className="text-xs py-0 px-1 border-amber-600/50"
                              >
                                {item.day}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-3 border-t">
                      <Button
                        size="sm"
                        className="bg-amber-600 hover:bg-amber-700"
                        asChild
                      >
                        <Link to="/booking">
                          <Calendar className="w-3 h-3 mr-1" />
                          Book Package
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">Contact for Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Discover Ethiopia's Rich Heritage
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Journey through ancient kingdoms and living cultures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Journey
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-amber-900"
                asChild
              >
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
