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
  Building,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Calendar,
  Car,
  TreePine,
} from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Addis Ababa City Tour — Culture, Nature & Nightlife Experience",
    duration: "Full Day (9:00 AM – 10:00 PM)",
    style: "Mixed Experience (Museums, Parks, Local Life & Night Culture)",
    groupSize: "Private or Small Group (2–15 people)",
    idealFor:
      "Travelers looking for a complete Addis Ababa experience in one day",
    price: "2,500 ETB",
    priceUSD: "($45 USD)",
    highlights: [
      "National Museum of Ethiopia",
      "Ethnological Museum",
      "Entoto Park & Scenic Drive",
      "Local Market Stop",
      "Friendship Park Walk",
      "Dinner at Fendika Cultural Center",
    ],
    itinerary: [
      {
        time: "09:00 AM",
        activity: "Pickup & Briefing",
        description:
          "Hotel pickup by your guide & driver. Brief introduction to the day's journey over complimentary Ethiopian coffee",
      },
      {
        time: "09:30 AM",
        activity: "National Museum of Ethiopia",
        description:
          'Home to the famous fossil "Lucy". Archaeological, anthropological, and artistic treasures of Ethiopia',
      },
      {
        time: "11:00 AM",
        activity: "Ethnological Museum",
        description:
          "Located in Haile Selassie's former palace. Showcases the diversity of Ethiopia's cultures, traditions, and music",
      },
      {
        time: "12:30 PM",
        activity: "Lunch Break",
        description:
          "Choose between a traditional Ethiopian lunch (injera & stew, served with local rituals) OR international cuisine upon request",
      },
      {
        time: "2:00 PM",
        activity: "Entoto Park & Scenic Drive",
        description:
          "Drive to the forested Entoto Hills. Enjoy panoramic views of the city. Walk or drive through Entoto Natural Park",
      },
      {
        time: "4:00 PM",
        activity: "Local Market Stop",
        description:
          "Visit Shiro Meda or Mercato for traditional clothes & souvenirs",
      },
      {
        time: "6:00 PM",
        activity: "Friendship Park Walk",
        description:
          "Stroll in this modern park built near Unity Park. Water fountains, gardens, sculptures",
      },
      {
        time: "8:00 PM",
        activity: "Dinner at Fendika Cultural Center",
        description:
          "Eat, dance, and experience Ethiopia's vibrant live music scene. Traditional azmari music, contemporary art & cultural storytelling",
      },
    ],
    includes: [
      "Professional English-speaking guide",
      "Comfortable private vehicle with fuel & driver",
      "All entrance fees (museums, parks)",
      "Lunch (traditional or international option)",
      "Dinner & Cultural Night at Fendika",
      "Bottled water, light snacks",
    ],
    tips: [
      "Dress modestly and comfortably",
      "Bring a jacket for Entoto (cooler temperatures)",
      "Wear comfortable walking shoes",
    ],
  },
  {
    id: 2,
    title: "Full-Day Addis Ababa City Tour",
    duration: "Full Day (9:00 AM – 10:30 PM)",
    style: "Relaxed, Informative, Immersive",
    groupSize: "Private or Small Group",
    idealFor: "History lovers, first-time visitors, cultural explorers",
    price: "2,800 ETB",
    priceUSD: "($50 USD)",
    highlights: [
      "Unity Park",
      "Adwa Victory Museum",
      "Ethiopian Science Museum",
      "Friendship Park Walk",
      "Traditional Lunch Experience",
      "Fendika Cultural Night",
    ],
    itinerary: [
      {
        time: "9:00 AM",
        activity: "Hotel Pickup & Day Briefing",
        description:
          "Meet your local guide and start your journey with an intro to Addis Ababa's stories",
      },
      {
        time: "9:30 AM",
        activity: "Unity Park",
        description:
          "Tour the beautifully restored palace of Emperor Menelik II. See the imperial throne, lion zoo, banquet hall",
      },
      {
        time: "11:30 AM",
        activity: "Adwa Victory Museum",
        description:
          "Explore one of the most powerful historical sites in Africa. Discover how Ethiopia became the only African nation to defeat European colonization",
      },
      {
        time: "1:00 PM",
        activity: "Traditional Lunch Experience",
        description:
          "Enjoy a flavorful Ethiopian lunch. Injera platters, vegan options, spicy stews, and refreshing local juices",
      },
      {
        time: "2:30 PM",
        activity: "Local Market Visit",
        description:
          "Visit Shiro Meda or a merkato market with your guide. See handwoven scarves, spices, leather goods",
      },
      {
        time: "3:30 PM",
        activity: "Ethiopian Science Museum",
        description:
          "Visit the stunning dome-shaped building representing Ethiopia's innovation path",
      },
      {
        time: "5:30 PM",
        activity: "Friendship Park Walk",
        description:
          "Take a peaceful walk through this landscaped garden oasis. Enjoy water features, flower paths",
      },
      {
        time: "7:45 PM",
        activity: "Dinner & Cultural Night at Fendika",
        description:
          "Step into Ethiopia's most authentic cultural hub. Live Azmari music, dance performances",
      },
    ],
    includes: [
      "All entrance fees (Unity Park, Adwa Museum, Science Museum, Fendika show)",
      "Private vehicle with driver and fuel",
      "Professional English-speaking local guide",
      "Lunch at a traditional restaurant",
      "Dinner and drinks at Fendika Cultural Center",
      "Market visit with shopping assistance",
      "Bottled water, local snacks, and coffee break",
      "All taxes and service charges",
    ],
  },
  {
    id: 3,
    title: "Suba Menagesha Forest Adventure",
    duration: "1 Day",
    style: "Nature & Wildlife",
    groupSize: "Small Groups",
    idealFor: "Nature lovers and wildlife enthusiasts",
    price: "1,800 ETB",
    priceUSD: "($32 USD)",
    highlights: [
      "Ethiopia's oldest state-protected forest",
      "Towering juniper and wild olive trees",
      "Wildlife spotting: monkeys, antelopes, and colorful birds",
      "Scenic hiking trails and panoramic views",
    ],
    itinerary: [
      {
        time: "Morning",
        activity: "Departure from Addis Ababa",
        description:
          "1 hr drive. Entry into the forest and start of guided hike",
      },
      {
        time: "Midday",
        activity: "Wildlife and birdwatching",
        description: "Photography stops and nature exploration",
      },
      {
        time: "Afternoon",
        activity: "Picnic lunch in forest",
        description:
          "Relaxation under the ancient trees. Return to Addis Ababa by evening",
      },
    ],
    includes: [
      "Transportation (Addis Ababa – Suba – Addis Ababa)",
      "Professional tour guide",
      "Entrance fees",
      "Picnic lunch & bottled water",
    ],
  },
  {
    id: 4,
    title: "Yerer Mountain & Bishoftu Lakes Combo",
    duration: "1 Day",
    style: "Hiking & Cultural",
    groupSize: "Small Groups",
    idealFor: "Trekking and photography enthusiasts",
    price: "2,000 ETB",
    priceUSD: "($36 USD)",
    highlights: [
      "Sacred mountain with cultural significance",
      "Stunning landscapes and sweeping views",
      "Village encounters & local traditions",
      "Ideal for trekking and photography",
    ],
    itinerary: [
      {
        time: "Morning",
        activity: "Early departure to Yerer",
        description: "Scenic drive to the base of Yerer mountain",
      },
      {
        time: "Midday",
        activity: "Guided trek up the mountain",
        description:
          "Cultural storytelling, summit exploration, photography session",
      },
      {
        time: "Afternoon",
        activity: "Descent and picnic lunch",
        description: "Lunch with views. Return to Addis Ababa by evening",
      },
    ],
    includes: [
      "Transportation (Addis Ababa – Yerer – Addis Ababa)",
      "Professional hiking guide",
      "Entrance fees",
      "Picnic lunch & bottled water",
    ],
  },
  {
    id: 5,
    title: "Debre Libanos & Portuguese Bridge",
    duration: "1 Day",
    style: "Historical & Scenic",
    groupSize: "Small Groups",
    idealFor: "History and culture enthusiasts",
    price: "2,200 ETB",
    priceUSD: "($40 USD)",
    highlights: [
      "Historic 13th-century monastery founded by Saint Tekle Haymanot",
      "Religious art and Ethiopian Orthodox heritage",
      "Panoramic views of the Blue Nile Gorge",
      "Scenic countryside drive",
    ],
    itinerary: [
      {
        time: "Morning",
        activity: "Departure to Debre Libanos",
        description: "2.5 hrs drive. Arrival at monastery, guided visit",
      },
      {
        time: "Midday",
        activity: "Portuguese Bridge visit",
        description:
          "Famous bridge with views of the gorge. Picnic lunch with scenic backdrop",
      },
      {
        time: "Afternoon",
        activity: "Gorge cliff hike",
        description:
          "Short hike along the gorge cliffs, wildlife spotting, photography. Return to Addis Ababa by evening",
      },
    ],
    includes: [
      "Transportation (Addis Ababa – Debre Libanos – Addis Ababa)",
      "Professional tour guide",
      "Entrance fees & local site contributions",
      "Picnic lunch & bottled water",
    ],
  },
];

export default function AddisAbabaPackages() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Addis Ababa City Tour & Around
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover Ethiopia's vibrant capital and nearby attractions with
              our comprehensive tour packages
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
                  className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          {pkg.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {pkg.idealFor}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-secondary" />
                        <span>{pkg.groupSize}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
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
                    {pkg.itinerary && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Itinerary</h4>
                        <div className="space-y-3">
                          {pkg.itinerary.map((item, idx) => (
                            <div
                              key={idx}
                              className="border-l-2 border-primary/20 pl-4"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                                <Badge
                                  variant="outline"
                                  className="text-xs w-fit"
                                >
                                  {item.time}
                                </Badge>
                                <span className="font-medium text-sm">
                                  {item.activity}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

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

                    {/* Tips */}
                    {pkg.tips && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Tips</h4>
                        <div className="space-y-2">
                          {pkg.tips.map((tip, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                              <span>{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                      <Button className="flex-1" asChild>
                        <Link to="/booking">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book This Package
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
        <section className="py-16 px-6 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore Addis Ababa?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join us for an unforgettable journey through Ethiopia's vibrant
              capital
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
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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
