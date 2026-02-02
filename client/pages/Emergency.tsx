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
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Phone,
  AlertTriangle,
  Shield,
  Heart,
  Flame,
  Zap,
  Building,
  Copy,
  Mail,
} from "lucide-react";

const nationalEmergency = [
  {
    service: "General Emergency (all services)",
    number: "911",
    icon: AlertTriangle,
  },
  {
    service: "Police Hotline",
    number: "991",
    description: "Federal Police – 24/7",
    icon: Shield,
  },
  { service: "Ambulance / Medical (Red Cross)", number: "907", icon: Heart },
  { service: "Fire Department", number: "939", icon: Flame },
  { service: "Information Hotline", number: "997", icon: Phone },
];

const addisAbabaServices = [
  {
    category: "Police & Security",
    contacts: [
      { service: "Federal Police HQ", number: "+251 11 551 2744" },
      { service: "Addis Ababa City Police", number: "+251 11 155 9122" },
      { service: "Traffic Police", number: "+251 11 552 8222" },
    ],
  },
  {
    category: "Medical & Ambulance",
    contacts: [
      { service: "Red Cross Ambulance", number: "907" },
      { service: "Minilik II Hospital Ambulance", number: "+251 11 123 4272" },
      {
        service: "St. Paul's Hospital (24/7 emergency)",
        number: "+251 11 277 3000",
      },
    ],
  },
  {
    category: "Fire & Rescue",
    contacts: [
      { service: "Arada Station (central)", number: "+251 11 112 3341" },
      { service: "Kirkos Station", number: "+251 11 465 0642" },
      { service: "Megenagna Station", number: "+251 11 663 0390" },
    ],
  },
];

const utilities = [
  { area: "North", number: "+251 112 595657" },
  { area: "South", number: "+251 114 431478" },
  { area: "East", number: "+251 116 465144" },
  { area: "West", number: "+251 113 490585" },
  { area: "Central", number: "+251 111 262105" },
];

const embassies = [
  {
    country: "🇺🇸 U.S. Embassy",
    phone: "+251 11 130 6000",
    description: "24/7 emergencies",
    email: "AddisACS@state.gov",
  },
  {
    country: "🇦🇺 Australian Embassy",
    phone: "+251 11 667 2651 / +251 11 667 2652",
    description: "Business hours",
    emergency: "+61 2 6261 3305",
    emergencyDesc: "24/7 Consular Emergency Centre",
  },
  {
    country: "🇨🇦 Canadian Embassy",
    description:
      "Dial 991 or contact Global Affairs Canada Emergency Watch and Response Centre",
  },
  {
    country: "🇮🇳 Indian Embassy",
    phone: "+251 911 506 852",
    description: "24/7 Emergency Mobile",
    email: "cons.addisababa@mea.gov.in",
  },
  {
    country: "🇮🇱 Israeli Embassy",
    phone: "+251 116 195 500",
    description: "After-hours emergency (press 1)",
  },
  {
    country: "🇸🇪 Swedish Embassy",
    phone: "+251 11 518 0000",
    email: "ambassaden.addis-abeba@gov.se",
  },
];

export default function Emergency() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-900/20 via-orange-800/20 to-red-900/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertTriangle className="h-10 w-10 text-red-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                🚨 Ethiopia Emergency Contacts
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you are traveling in Ethiopia and face an emergency, here are
              the most important numbers and embassy contacts.
            </p>
            <Alert className="max-w-2xl mx-auto border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                Always save these numbers in your phone before traveling.
                Contact your tour operator, hotel, or local police post in
                remote areas.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* National Emergency Numbers */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <Phone className="h-8 w-8 text-red-600" />
              📞 Nationwide Emergency Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nationalEmergency.map((emergency, index) => (
                <Card
                  key={index}
                  className="border-2 border-red-200 hover:border-red-300 transition-colors"
                >
                  <CardHeader className="text-center">
                    <emergency.icon className="h-8 w-8 mx-auto mb-2 text-red-600" />
                    <CardTitle className="text-lg">
                      {emergency.service}
                    </CardTitle>
                    {emergency.description && (
                      <CardDescription>{emergency.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-4">
                      {emergency.number}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(emergency.number)}
                      className="w-full"
                    >
                      <Copy className="w-3 h-3 mr-2" />
                      Copy Number
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Addis Ababa Specific Services */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              🚓🚑🔥 Addis Ababa Emergency Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {addisAbabaServices.map((category, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.contacts.map((contact, contactIndex) => (
                        <div
                          key={contactIndex}
                          className="border-b border-muted pb-3 last:border-b-0 last:pb-0"
                        >
                          <div className="font-semibold text-sm mb-1">
                            {contact.service}
                          </div>
                          <Button
                            variant="ghost"
                            className="text-lg font-bold text-primary hover:bg-primary/10 p-2 h-auto justify-start"
                            asChild
                          >
                            <a href={`tel:${contact.number}`}>
                              <Phone className="w-4 h-4 mr-2" />
                              {contact.number}
                            </a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Utilities */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <Zap className="h-8 w-8 text-yellow-600" />⚡ Electricity
              Emergencies (Addis Ababa)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {utilities.map((utility, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{utility.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      className="text-sm font-bold text-yellow-700 hover:bg-yellow-100 p-2 h-auto"
                      asChild
                    >
                      <a href={`tel:${utility.number}`}>
                        <Phone className="w-3 h-3 mr-1" />
                        {utility.number}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Embassy Contacts */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <Building className="h-8 w-8 text-blue-600" />
              🏛️ Embassy Emergency Contacts in Addis Ababa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {embassies.map((embassy, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg">{embassy.country}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {embassy.phone && (
                      <div>
                        <div className="font-semibold text-sm mb-2">Phone:</div>
                        <Button
                          variant="ghost"
                          className="font-bold text-blue-600 hover:bg-blue-100 p-2 h-auto justify-start w-full"
                          asChild
                        >
                          <a href={`tel:${embassy.phone.replace(/\s+/g, "")}`}>
                            <Phone className="w-4 h-4 mr-2" />
                            {embassy.phone}
                          </a>
                        </Button>
                        {embassy.description && (
                          <div className="text-xs text-muted-foreground mt-1">
                            ({embassy.description})
                          </div>
                        )}
                      </div>
                    )}
                    {embassy.emergency && (
                      <div>
                        <div className="font-semibold text-sm mb-2">
                          Emergency:
                        </div>
                        <Button
                          variant="ghost"
                          className="font-bold text-red-600 hover:bg-red-100 p-2 h-auto justify-start w-full"
                          asChild
                        >
                          <a
                            href={`tel:${embassy.emergency.replace(/\s+/g, "")}`}
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            {embassy.emergency}
                          </a>
                        </Button>
                        {embassy.emergencyDesc && (
                          <div className="text-xs text-muted-foreground">
                            ({embassy.emergencyDesc})
                          </div>
                        )}
                      </div>
                    )}
                    {embassy.email && (
                      <div>
                        <div className="font-semibold text-sm mb-2">Email:</div>
                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:bg-blue-100 p-2 h-auto justify-start w-full text-sm"
                          asChild
                        >
                          <a href={`mailto:${embassy.email}`}>
                            <Mail className="w-4 h-4 mr-2" />
                            {embassy.email}
                          </a>
                        </Button>
                      </div>
                    )}
                    {embassy.description && !embassy.phone && (
                      <div className="text-sm text-muted-foreground">
                        {embassy.description}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <Alert className="border-yellow-200 bg-yellow-50 mb-8">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                <strong>⚠️ Note for Travelers:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Always save these numbers in your phone before traveling.
                  </li>
                  <li>
                    Some hotlines (like 911, 991, 907) work best within Addis
                    Ababa and larger cities.
                  </li>
                  <li>
                    For remote areas, contact your tour operator, hotel, or
                    local police post immediately.
                  </li>
                  <li>
                    Embassy contacts should be used only by their citizens.
                  </li>
                </ul>
              </AlertDescription>
            </Alert>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="destructive" asChild>
                  <a href="tel:911">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 911 Emergency
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/safety">
                    <Shield className="mr-2 h-5 w-5" />
                    Safety Information
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
