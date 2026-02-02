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
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Shield,
  AlertTriangle,
  MapPin,
  Heart,
  Thermometer,
  Users,
  Plane,
  Phone,
  Calendar,
} from "lucide-react";

const safetyTips = [
  {
    category: "General Tips",
    icon: Shield,
    tips: [
      "Stay updated with official travel advisories and avoid protests",
      "Use travel insurance that covers medical care and emergencies",
      "Keep valuables secure; carry copies of documents instead of originals",
      "Avoid walking alone at night — use trusted taxis or hotel transport",
    ],
  },
  {
    category: "Regional Safety",
    icon: MapPin,
    tips: [
      "Addis Ababa: Safe but watch for pickpockets in crowded areas",
      "Amhara & Tigray: Check advisories before visiting due to periodic unrest",
      "Border Regions: Avoid travel near Somalia, Eritrea, Sudan, and South Sudan",
      "Southern Ethiopia: Generally safe (Hawassa, Arba Minch, Omo Valley) but stay cautious in remote tribal areas",
      "Danakil Depression: Visit only with reputable operators and escorts",
    ],
  },
  {
    category: "Health & Environment",
    icon: Heart,
    tips: [
      "Consult a doctor for recommended vaccines and malaria prevention",
      "Drink bottled/filtered water; avoid unsafe street food",
      "Prepare for varied climates: cold highlands and very hot lowlands",
      "Be aware of altitude sickness and volcanic/seismic risks in some areas",
    ],
  },
  {
    category: "Culture & Laws",
    icon: Users,
    tips: [
      "Dress modestly, especially at religious sites",
      "LGBTQ+ travelers should note local laws prohibit same-sex relationships",
      "Drug laws are strict; drones require permits",
      "Confirm if times are given in Ethiopian or European time",
    ],
  },
  {
    category: "Transport",
    icon: Plane,
    tips: [
      "Road travel can be risky; avoid night driving",
      "Use hotel taxis, rideshare, or domestic flights instead of minibuses",
      "If driving, carry an International Driving Permit and park securely",
    ],
  },
];

const emergencyContacts = [
  {
    service: "Emergency (all services)",
    number: "911",
    description: "Nationwide emergency number",
  },
  {
    service: "Police Hotline",
    number: "991",
    description: "Federal Police – 24/7",
  },
  {
    service: "Ambulance / Medical",
    number: "907",
    description: "Red Cross ambulance services",
  },
  {
    service: "Fire Department",
    number: "939",
    description: "Fire and rescue services",
  },
  {
    service: "Information Hotline",
    number: "997",
    description: "General information services",
  },
];

export default function Safety() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-900/20 via-orange-800/20 to-red-900/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-10 w-10 text-red-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Safety Information for Tourists in Ethiopia
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Welcome to Ethiopia — a land of history, landscapes, and cultures.
              Ethiopia is generally safe and welcoming, but being informed
              ensures a smooth and enjoyable trip.
            </p>
            <Alert className="max-w-2xl mx-auto border-orange-200 bg-orange-50">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800">
                With awareness and good preparation, Ethiopia offers one of
                Africa's most rewarding travel experiences.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Safety Categories */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {safetyTips.map((category, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-red-600/20 transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <category.icon className="h-6 w-6 text-red-600" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tip}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                <Phone className="h-8 w-8 text-red-600" />
                Emergency Contacts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Important numbers to save in your phone before traveling to
                Ethiopia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{contact.service}</CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {contact.number}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="mt-12 border-blue-200 bg-blue-50">
              <Phone className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <strong>Note for Travelers:</strong> Always save these numbers
                in your phone before traveling. Some hotlines work best within
                Addis Ababa and larger cities. For remote areas, contact your
                tour operator, hotel, or local police post immediately.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Additional Safety Information */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center gap-3">
                  <Shield className="h-6 w-6" />
                  Final Safety Note
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 leading-relaxed mb-6">
                  With awareness and good preparation, Ethiopia offers one of
                  Africa's most rewarding travel experiences — from Lalibela's
                  rock-hewn churches to the cliffs of the Simien Mountains. Most
                  visits are safe, unforgettable, and enriched by Ethiopia's
                  warm hospitality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700" asChild>
                    <Link to="/booking">
                      <Calendar className="mr-2 h-4 w-4" />
                      Plan Safe Travel
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/emergency">
                      <Phone className="mr-2 h-4 w-4" />
                      Emergency Contacts
                    </Link>
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
