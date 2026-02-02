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
  TreePine,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Calendar,
  Mountain,
  Flame,
} from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Simien Mountains Trek",
    duration: "5 Days",
    difficulty: "Advanced",
    groupSize: "2-15 people",
    idealFor:
      "Experienced trekkers seeking dramatic landscapes and endemic wildlife",
    price: "8,500 ETB",
    priceUSD: "($150 USD)",
    highlights: [
      "Dramatic escarpments and peaks over 4,000 meters",
      "Endemic wildlife: gelada baboons and Walia ibex",
      "Ras Dashen summit (Ethiopia's highest at 4,543m)",
      "UNESCO World Heritage National Park",
      "Spectacular mountain camping",
      "Local village encounters",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Gondar to Sankaber Camp",
        description:
          "Transfer from Gondar to Debark for park registration. Drive to Buyit Ras and trek (3–4 hours) to Sankaber campsite, spotting wildlife en route.",
      },
      {
        day: "Day 2",
        title: "Sankaber to Geech Camp",
        description:
          "Trek (6–7 hours) along the escarpment to Jinbar Waterfall and Geech village. Observe gelada troops and birdlife.",
      },
      {
        day: "Day 3",
        title: "Geech to Chennek Camp",
        description:
          "Ascend to Imet Gogo peak (3,926m) for views, then descend to Chennek (7–8 hours total). Possible walia ibex sightings.",
      },
      {
        day: "Day 4",
        title: "Chennek to Ambiko",
        description:
          "Trek to Ambiko (8–9 hours), preparing for the optional Ras Dashen summit (Ethiopia's highest at 4,543m).",
      },
      {
        day: "Day 5",
        title: "Summit and Return",
        description:
          "Early ascent to Ras Dashen (4–5 hours up), descend, and drive back to Gondar.",
      },
    ],
    includes: [
      "4 nights in tented camps (tents, sleeping mats provided)",
      "Full board with packed lunches, hot dinners, and breakfasts",
      "Transfers from Gondar, mules for luggage, and park shuttle",
      "Scout, cook, English-speaking guide, and park entrance fees",
      "Camping equipment, wildlife spotting opportunities",
      "Basic medical supplies",
    ],
    excludes: ["Sleeping bags", "Tips", "Flights to Gondar"],
  },
  {
    id: 2,
    title: "Danakil Depression Expedition",
    duration: "3 Days",
    difficulty: "Advanced",
    groupSize: "4-12 people",
    idealFor:
      "Adventure seekers wanting to experience one of Earth's most extreme environments",
    price: "12,000 ETB",
    priceUSD: "($215 USD)",
    highlights: [
      "One of the hottest and lowest places on Earth",
      "Active Erta Ale volcano with lava lake",
      "Dallol's psychedelic sulfur springs and acid pools",
      "Salt mining operations and camel caravans",
      "Afar nomad cultural encounters",
      "Extreme volcanic landscapes",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Mekele to Erta Ale Volcano",
        description:
          "Depart from Mekele or Semera. Drive through Afar region to Dodom base camp. Evening hike (3–4 hours) to Erta Ale's summit to witness the active lava lake. Overnight camping at the volcano rim.",
      },
      {
        day: "Day 2",
        title: "Erta Ale to Hamed Ela",
        description:
          "Morning descent and drive to Lake Afdera for a swim in its salt waters. Continue to Hamed Ela village, interacting with Afar nomads. Overnight in basic huts or camping.",
      },
      {
        day: "Day 3",
        title: "Dallol and Return",
        description:
          "Explore Dallol's psychedelic sulfur springs and acid pools. Visit the salt canyons and camel caravans mining salt. Drive back toward Mekele.",
      },
    ],
    includes: [
      "2 nights in camping setups (tents, sleeping bags provided)",
      "Full board with simple, portable meals",
      "Air-conditioned 4x4 vehicles in convoy, armed escorts for security",
      "Experienced Afar guide, cook and drivers",
      "Camping gear, mineral water and first aid kit",
    ],
    excludes: [
      "Flights to/from Mekele",
      "Personal gear (headlamp, sturdy shoes)",
      "Gratuities",
    ],
  },
  {
    id: 3,
    title: "Bale Mountains Eco Trek",
    duration: "5 Days",
    difficulty: "Intermediate",
    groupSize: "2-12 people",
    idealFor: "Wildlife enthusiasts and eco-tourism lovers",
    price: "9,200 ETB",
    priceUSD: "($165 USD)",
    highlights: [
      "Afro-alpine landscapes and endemic species",
      "Ethiopian wolves on Sanetti Plateau",
      "Harenna Forest with black-maned lions",
      "Tullu Dimtu peak trek (4,000m+)",
      "Diverse ecosystems from grasslands to forests",
      "Colobus monkeys and endemic plants",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Addis Ababa to Dinsho",
        description:
          "Drive south to Dinsho headquarters. Afternoon hike in Gaysay Grasslands for nyala and warthog spotting.",
      },
      {
        day: "Day 2",
        title: "Dinsho to Sanetti Plateau",
        description:
          "Drive to the plateau (4,000m+), observing Ethiopian wolves and birds. Trek to Tullu Dimtu peak. Overnight in lodge.",
      },
      {
        day: "Day 3",
        title: "Harenna Forest Exploration",
        description:
          "Descend to the forest for black-maned lions, colobus monkeys, and endemic plants. Optional horse trekking.",
      },
      {
        day: "Day 4",
        title: "Web Valley and Waterfalls",
        description:
          "Hike through valleys, visiting waterfalls and caves. Focus on biodiversity and photography.",
      },
      {
        day: "Day 5",
        title: "Return to Addis Ababa",
        description: "Morning wildlife drive, then drive back to Addis Ababa.",
      },
    ],
    includes: [
      "4 nights in eco-lodges like Bale Mountain Lodge (en-suite rooms)",
      "Full board with picnic lunches and lodge dinners",
      "4x4 vehicle for transfers and park drives",
      "Park ranger, naturalist guide, and entrance fees",
      "Binoculars rental, horse/mule support",
      "Conservation briefing",
    ],
    excludes: ["Personal trekking gear", "Additional activities like fishing"],
  },
];

export default function NatureAdventurePackages() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-900/20 via-emerald-800/20 to-green-900/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TreePine className="h-10 w-10 text-green-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Nature & Adventure Tours
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience Ethiopia's most spectacular natural wonders and extreme
              landscapes
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
                <Mountain className="w-3 h-3 mr-1" />
                Expert Guides
              </Badge>
            </div>
          </div>
        </section>

        {/* Package Cards */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className="overflow-hidden border-2 hover:border-green-600/20 transition-all duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-green-600/5 to-emerald-600/5">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                          {pkg.id === 1 && (
                            <Mountain className="w-6 h-6 text-green-600" />
                          )}
                          {pkg.id === 2 && (
                            <Flame className="w-6 h-6 text-orange-600" />
                          )}
                          {pkg.id === 3 && (
                            <TreePine className="w-6 h-6 text-green-600" />
                          )}
                          {pkg.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {pkg.idealFor}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-emerald-600" />
                        <span>{pkg.groupSize}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          pkg.difficulty === "Advanced"
                            ? "border-red-500 text-red-700"
                            : pkg.difficulty === "Intermediate"
                              ? "border-yellow-500 text-yellow-700"
                              : "border-green-500 text-green-700"
                        }`}
                      >
                        {pkg.difficulty} Level
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Itinerary */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Itinerary</h4>
                      <div className="space-y-3">
                        {pkg.itinerary.map((item, idx) => (
                          <div
                            key={idx}
                            className="border-l-2 border-green-600/20 pl-4"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                              <Badge
                                variant="outline"
                                className="text-xs w-fit border-green-600/50"
                              >
                                {item.day}
                              </Badge>
                              <span className="font-medium text-sm">
                                {item.title}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Includes */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Package Includes</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {pkg.includes.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Excludes */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Excludes</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {pkg.excludes.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="w-3 h-3 border border-red-300 rounded-full mt-1 flex-shrink-0"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                      <Button
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        asChild
                      >
                        <Link to="/booking">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book This Adventure
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
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
        <section className="py-16 px-6 bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Experience Ethiopia's most spectacular natural wonders with expert
              guides
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
                  Book Your Adventure
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-900"
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
