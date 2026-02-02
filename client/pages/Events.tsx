import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Star,
  Heart,
  Church,
  Crown,
  Users,
} from "lucide-react";

const seasonalEvents = [
  {
    id: 1,
    title: "Ethiopian Christmas (Genna)",
    date: "January 7",
    location: "Lalibela, Gondar, Addis Ababa",
    description:
      "Solemn yet festive celebration of Christ's birth with candlelit services, traditional games, and communal feasts.",
    highlights: [
      "Candlelit church services",
      "Traditional games",
      "Communal feasts",
      "Cultural celebrations",
    ],
    icon: Church,
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "Timkat (Epiphany)",
    date: "January 19–20",
    location: "Gondar (Fasilides' Bath), Lalibela, Addis Ababa (Jan Meda)",
    description:
      "A dazzling baptism festival with colorful processions, chanting priests, and water blessings.",
    highlights: [
      "Water blessing ceremonies",
      "Colorful processions",
      "Traditional music",
      "Religious rituals",
    ],
    icon: Crown,
    color: "text-purple-600",
  },
  {
    id: 3,
    title: "Ethiopian Easter (Fasika)",
    date: "April 20",
    location: "Lalibela, Axum, Addis Ababa",
    description:
      "Powerful spiritual celebration ending the 55-day fast with joyous feasts and candlelit services.",
    highlights: [
      "End of fasting period",
      "Joyous celebrations",
      "Traditional feasts",
      "Spiritual ceremonies",
    ],
    icon: Heart,
    color: "text-pink-600",
  },
  {
    id: 4,
    title: "Fichee-Chambalaalla (Sidama New Year)",
    date: "June 27",
    location: "Hawassa & Sidama Region",
    description:
      "UNESCO-recognized festival of the Sidama people, with music, dance, and communal feasts.",
    highlights: [
      "UNESCO recognition",
      "Traditional music",
      "Cultural dances",
      "Community feasts",
    ],
    icon: Star,
    color: "text-yellow-600",
  },
  {
    id: 5,
    title: "Ashenda (Girls' Festival)",
    date: "August 23–25",
    location: "Mekelle, Lalibela",
    description:
      "Vibrant northern tradition where girls sing, dance, and dress in colorful attire to honor the Virgin Mary.",
    highlights: [
      "Girls' celebrations",
      "Colorful traditional dress",
      "Singing and dancing",
      "Cultural traditions",
    ],
    icon: Users,
    color: "text-indigo-600",
  },
  {
    id: 6,
    title: "Shuwalid Festival",
    date: "Dates vary (after Ramadan/Eid season)",
    location: "Harar (UNESCO walled city)",
    description:
      "Harar's centuries-old Islamic festival honoring saints with processions, music, and colorful cultural displays.",
    highlights: [
      "Islamic cultural heritage",
      "Saint processions",
      "Traditional music",
      "Cultural displays",
    ],
    icon: Crown,
    color: "text-green-600",
  },
  {
    id: 7,
    title: "Irreecha (Oromo Thanksgiving)",
    date: "September 29",
    location: "Bishoftu (Lake Hora Arsedi), Addis Ababa",
    description:
      "A thanksgiving festival marking the end of the rainy season, with water rituals, blessings, and colorful gatherings.",
    highlights: [
      "Thanksgiving ceremonies",
      "Water rituals",
      "Traditional blessings",
      "Cultural unity",
    ],
    icon: Heart,
    color: "text-teal-600",
  },
  {
    id: 8,
    title: "Meskel (Finding of the True Cross)",
    date: "September 27",
    location: "Addis Ababa (Meskel Square), Axum, Gondar, Lalibela",
    description:
      "Iconic bonfire festival celebrating the discovery of the True Cross, with thousands gathering in song and dance.",
    highlights: [
      "Demera bonfire ceremony",
      "Traditional processions",
      "Religious celebrations",
      "Cultural performances",
    ],
    icon: Star,
    color: "text-orange-600",
  },
];

export default function Events() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-900/20 via-yellow-800/20 to-orange-900/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="h-10 w-10 text-orange-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Key Seasonal Holidays & Festivals in Ethiopia
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience Ethiopia's vibrant cultural calendar filled with
              ancient traditions, religious celebrations, and colorful festivals
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-3 py-1">
                <Star className="w-3 h-3 mr-1" />
                Religious Celebrations
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Heart className="w-3 h-3 mr-1" />
                Cultural Festivals
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Users className="w-3 h-3 mr-1" />
                Community Gatherings
              </Badge>
            </div>
          </div>
        </section>

        {/* Seasonal Events Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {seasonalEvents.map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden border-2 hover:border-orange-600/20 transition-all duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                    <div className="flex items-start justify-between mb-2">
                      <event.icon
                        className={`w-6 h-6 ${event.color} flex-shrink-0`}
                      />
                      <Badge variant="outline" className="text-xs">
                        {event.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {event.title}
                    </CardTitle>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 mt-1 flex-shrink-0" />
                      <span className="text-xs leading-tight">
                        {event.location}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Highlights</h4>
                      <div className="space-y-1">
                        {event.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs"
                          >
                            <span className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        className="bg-orange-600 hover:bg-orange-700"
                        asChild
                      >
                        <Link to={`/event-booking?eventId=${event.id}`}>
                          <Calendar className="w-3 h-3 mr-1" />
                          Join Festival
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

        {/* Festival Calendar */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Festival Calendar Overview
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Plan your visit around Ethiopia's most significant cultural and
                religious celebrations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">
                    January
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>Genna (Jan 7)</li>
                    <li>Timkat (Jan 19-20)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg text-pink-600">
                    April & June
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>Fasika (Apr 20)</li>
                    <li>Fichee-Chambalaalla (Jun 27)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg text-indigo-600">
                    August
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>Ashenda (Aug 23-25)</li>
                    <li>Shuwalid (Varies)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">
                    September
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>Meskel (Sep 27)</li>
                    <li>Irreecha (Sep 29)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-orange-900 via-yellow-800 to-orange-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Experience Ethiopia's Living Culture
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join authentic celebrations and witness traditions that have been
              preserved for centuries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/packages/events-holidays">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Festival Experience
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-orange-900"
                asChild
              >
                <Link to="/contact">Plan Your Cultural Visit</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
