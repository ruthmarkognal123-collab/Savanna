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
  Calendar,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Star,
  Heart,
} from "lucide-react";

const festivals = [
  {
    id: 1,
    title: "Meskel Festival",
    date: "September 27",
    location: "Addis Ababa (Meskel Square), Axum, Gondar, Lalibela",
    description:
      "Iconic bonfire festival celebrating the discovery of the True Cross, with thousands gathering in song and dance.",
    price: "1,500 ETB",
    priceUSD: "($27 USD)",
    highlights: [
      "Demera bonfire ceremony",
      "Traditional processions",
      "Religious celebrations",
      "Cultural performances",
    ],
  },
  {
    id: 2,
    title: "Timkat Festival (Epiphany)",
    date: "January 19-20",
    location: "Gondar (Fasilides' Bath), Lalibela, Addis Ababa",
    description:
      "A dazzling baptism festival with colorful processions, chanting priests, and water blessings.",
    price: "2,200 ETB",
    priceUSD: "($40 USD)",
    highlights: [
      "Water blessing ceremonies",
      "Colorful processions",
      "Traditional music",
      "Religious rituals",
    ],
  },
  {
    id: 3,
    title: "Ethiopian Christmas (Genna)",
    date: "January 7",
    location: "Lalibela, Gondar, Addis Ababa",
    description:
      "Solemn yet festive celebration of Christ's birth with candlelit services, traditional games, and communal feasts.",
    price: "1,800 ETB",
    priceUSD: "($32 USD)",
    highlights: [
      "Candlelit church services",
      "Traditional games",
      "Communal feasts",
      "Cultural celebrations",
    ],
  },
  {
    id: 4,
    title: "Irreecha Festival",
    date: "September 29",
    location: "Bishoftu (Lake Hora Arsedi), Addis Ababa",
    description:
      "A thanksgiving festival marking the end of the rainy season, with water rituals, blessings, and colorful gatherings.",
    price: "1,600 ETB",
    priceUSD: "($29 USD)",
    highlights: [
      "Thanksgiving ceremonies",
      "Water rituals",
      "Traditional blessings",
      "Cultural unity",
    ],
  },
  {
    id: 5,
    title: "Ethiopian Easter (Fasika)",
    date: "April 20",
    location: "Lalibela, Axum, Addis Ababa",
    description:
      "Powerful spiritual celebration ending the 55-day fast with joyous feasts and candlelit services.",
    price: "2,000 ETB",
    priceUSD: "($36 USD)",
    highlights: [
      "End of fasting period",
      "Joyous celebrations",
      "Traditional feasts",
      "Spiritual ceremonies",
    ],
  },
  {
    id: 6,
    title: "Fichee-Chambalaalla (Sidama New Year)",
    date: "June 27",
    location: "Hawassa & Sidama Region",
    description:
      "UNESCO-recognized festival of the Sidama people, with music, dance, and communal feasts.",
    price: "1,700 ETB",
    priceUSD: "($30 USD)",
    highlights: [
      "UNESCO recognition",
      "Traditional music",
      "Cultural dances",
      "Community feasts",
    ],
  },
  {
    id: 7,
    title: "Ashenda (Girls' Festival)",
    date: "August 23-25",
    location: "Mekelle, Lalibela",
    description:
      "Vibrant northern tradition where girls sing, dance, and dress in colorful attire to honor the Virgin Mary.",
    price: "1,400 ETB",
    priceUSD: "($25 USD)",
    highlights: [
      "Girls' celebrations",
      "Colorful traditional dress",
      "Singing and dancing",
      "Cultural traditions",
    ],
  },
];

export default function EventsHolidaysPackages() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-900/20 via-pink-800/20 to-purple-900/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="h-10 w-10 text-purple-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Events & Holiday Experience Tours
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Ethiopia's vibrant festivals and celebration experiences
              throughout the year
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-3 py-1">
                <Users className="w-3 h-3 mr-1" />
                30+ Successful Tours
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Star className="w-3 h-3 mr-1" />
                1+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Heart className="w-3 h-3 mr-1" />
                Cultural Immersion
              </Badge>
            </div>
          </div>
        </section>

        {/* Special Offer Highlight */}
        <section className="py-8 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              🎉 Meskel 2025 — Special Offer
            </h2>
            <p className="text-lg mb-4">
              September 27, 2025 (Meskerem 17) - Addis Ababa
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Half-Day Experience</h4>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Includes</h4>
                  <ul className="text-xs space-y-1 opacity-90">
                    <li>• Hotel pickup & guide</li>
                    <li>• Reserved viewing zone</li>
                    <li>• Traditional coffee ceremony</li>
                    <li>• Cultural briefing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Special Discounts</h4>
                  <ul className="text-xs space-y-1 opacity-90">
                    <li>• Early-Bird: 10% off (Book by Aug 31)</li>
                    <li>• Groups 4-7: 12% off</li>
                    <li>• Groups 8-12: 15% off</li>
                  </ul>
                </div>
              </div>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/booking">
                <Calendar className="mr-2 h-5 w-5" />
                Book Meskel 2025 Now
              </Link>
            </Button>
          </div>
        </section>

        {/* Festival Cards */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {festivals.map((festival) => (
                <Card
                  key={festival.id}
                  className="overflow-hidden border-2 hover:border-purple-600/20 transition-all duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-purple-600/5 to-pink-600/5">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      {festival.title}
                    </CardTitle>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{festival.date}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3 h-3 mt-1 flex-shrink-0" />
                        <span className="text-xs">{festival.location}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {festival.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Highlights</h4>
                      <div className="space-y-1">
                        {festival.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs"
                          >
                            <CheckCircle className="w-2 h-2 text-purple-600" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700"
                        asChild
                      >
                        <Link to="/booking">
                          <Calendar className="w-3 h-3 mr-1" />
                          Book Festival
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">More Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Experience Ethiopia's Vibrant Festivals
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join authentic celebrations and create unforgettable cultural
              memories
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
                  Book Festival Experience
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-purple-900"
                asChild
              >
                <Link to="/contact">Plan Your Visit</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
