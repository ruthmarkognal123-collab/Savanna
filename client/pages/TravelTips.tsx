import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Backpack,
  MapPin,
  DollarSign,
  Thermometer,
  Camera,
  Shield,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Plane,
} from "lucide-react";

const packingLists = {
  trekking: [
    { item: "Waterproof hiking boots", essential: true },
    { item: "Moisture-wicking clothing", essential: true },
    { item: "Rain jacket and pants", essential: true },
    { item: "Warm fleece or down jacket", essential: true },
    { item: "Sun hat and sunglasses", essential: true },
    { item: "Sunscreen (SPF 30+)", essential: true },
    { item: "First aid kit", essential: true },
    { item: "Water bottles/hydration system", essential: true },
    { item: "Headlamp with extra batteries", essential: true },
    { item: "Quick-dry towel", essential: false },
    { item: "Trekking poles", essential: false },
    { item: "Gaiters", essential: false },
  ],
  cultural: [
    { item: "Modest clothing for religious sites", essential: true },
    { item: "Comfortable walking shoes", essential: true },
    { item: "Light scarf or shawl", essential: true },
    { item: "Small daypack", essential: true },
    { item: "Camera with extra batteries", essential: true },
    { item: "Notebook and pen", essential: false },
    { item: "Small gifts for hosts", essential: false },
    { item: "Phrasebook or translation app", essential: false },
  ],
  general: [
    { item: "Valid passport (6+ months validity)", essential: true },
    { item: "Visa (if required)", essential: true },
    { item: "Travel insurance documents", essential: true },
    { item: "Vaccination certificates", essential: true },
    { item: "Prescription medications", essential: true },
    { item: "Insect repellent", essential: true },
    { item: "Hand sanitizer", essential: true },
    { item: "Universal power adapter", essential: true },
    { item: "Copies of important documents", essential: true },
    { item: "Emergency contact information", essential: true },
  ],
};

const currencyTips = [
  {
    title: "Ethiopian Birr (ETB)",
    description: "The official currency of Ethiopia",
    tips: [
      "1 USD ≈ 142.20 ETB (rates fluctuate)",
      "Cash is king - many places don't accept cards",
      "Bring clean, newer USD bills for better exchange rates",
      "Exchange at banks or official exchange bureaus only",
    ],
    color: "bg-vibrant-blue",
  },
  {
    title: "Where to Exchange",
    description: "Best places to exchange money",
    tips: [
      "Banks: Most reliable but slower service",
      "Hotels: Convenient but lower rates",
      "Official bureaus: Good rates and faster service",
      "Avoid black market exchanges - illegal and risky",
    ],
    color: "bg-vibrant-orange",
  },
  {
    title: "Payment Methods",
    description: "How to pay for goods and services",
    tips: [
      "Cash for markets, street food, rural areas",
      "Credit cards accepted in upscale hotels/restaurants",
      "Mobile payments growing but not universal",
      "Always have small bills for tips and small purchases",
    ],
    color: "bg-vibrant-teal",
  },
];

export default function TravelTips() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-vibrant-teal/20 via-vibrant-blue/20 to-vibrant-purple/20 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="h-10 w-10 text-vibrant-teal" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-vibrant-teal bg-clip-text text-transparent">
                Travel Tips & Essentials
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to know for a successful and comfortable
              journey through Ethiopia
            </p>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="packing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-muted/50">
                <TabsTrigger value="packing" className="text-sm">
                  Packing Lists
                </TabsTrigger>
                <TabsTrigger value="currency" className="text-sm">
                  Currency & Money
                </TabsTrigger>
                <TabsTrigger value="health" className="text-sm">
                  Health & Safety
                </TabsTrigger>
                <TabsTrigger value="culture" className="text-sm">
                  Cultural Tips
                </TabsTrigger>
              </TabsList>

              {/* Packing Lists */}
              <TabsContent value="packing" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {Object.entries(packingLists).map(([category, items]) => (
                    <Card
                      key={category}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 capitalize">
                          <Backpack className="h-5 w-5 text-vibrant-blue" />
                          {category} Essentials
                        </CardTitle>
                        <CardDescription>
                          {category === "trekking" &&
                            "For mountain and hiking adventures"}
                          {category === "cultural" &&
                            "For cultural tours and city visits"}
                          {category === "general" &&
                            "Essential items for all trips"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {items.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle
                                className={`h-4 w-4 ${item.essential ? "text-vibrant-teal" : "text-muted-foreground"}`}
                              />
                              <span
                                className={`text-sm ${item.essential ? "font-medium" : "text-muted-foreground"}`}
                              >
                                {item.item}
                              </span>
                              {item.essential && (
                                <Badge
                                  variant="secondary"
                                  className="text-xs bg-vibrant-orange/20 text-vibrant-orange"
                                >
                                  Essential
                                </Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Currency & Money */}
              <TabsContent value="currency" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {currencyTips.map((tip, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-vibrant-orange" />
                          {tip.title}
                        </CardTitle>
                        <CardDescription>{tip.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {tip.tips.map((tipItem, tipIndex) => (
                            <li
                              key={tipIndex}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${tip.color} mt-2 flex-shrink-0`}
                              />
                              {tipItem}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-r from-muted/50 to-background">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-vibrant-orange" />
                      Important Money Tips
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">ATM Availability</h4>
                        <p className="text-muted-foreground">
                          ATMs are available in major cities but may be
                          unreliable. Don't rely solely on cards.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Tipping Culture</h4>
                        <p className="text-muted-foreground">
                          10-15% in restaurants, 50-100 ETB per day for guides,
                          small amounts for services.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Health & Safety */}
              <TabsContent value="health" className="mt-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="vaccinations">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-vibrant-red" />
                        Required & Recommended Vaccinations
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-vibrant-red">
                            Required
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              • Yellow Fever (if coming from endemic areas)
                            </li>
                            <li>• COVID-19 vaccination</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-vibrant-orange">
                            Recommended
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Hepatitis A & B</li>
                            <li>• Typhoid</li>
                            <li>• Meningitis</li>
                            <li>• Routine vaccines (MMR, DPT, flu)</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="altitude">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <Thermometer className="h-5 w-5 text-vibrant-blue" />
                        Altitude & Climate Considerations
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">
                            High Altitude Areas
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Simien Mountains (4000m+), Bale Mountains (4000m+),
                            some areas of Lalibela (2500m)
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li>• Ascend gradually when possible</li>
                            <li>• Stay hydrated and avoid alcohol</li>
                            <li>
                              • Watch for symptoms: headaches, nausea, fatigue
                            </li>
                            <li>• Descend if symptoms worsen</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Climate Zones</h4>
                          <p className="text-sm text-muted-foreground">
                            Ethiopia has diverse climates from cool highlands to
                            hot deserts. Pack accordingly for your specific
                            destinations.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="water-food">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-vibrant-teal" />
                        Water & Food Safety
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Water Safety</h4>
                          <ul className="space-y-1 text-sm">
                            <li>
                              • Drink only bottled or properly purified water
                            </li>
                            <li>• Use bottled water for brushing teeth</li>
                            <li>• Avoid ice unless from trusted sources</li>
                            <li>
                              • Carry water purification tablets as backup
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Food Safety</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Eat freshly cooked, hot food</li>
                            <li>
                              • Avoid raw vegetables and fruits you can't peel
                            </li>
                            <li>• Be cautious with street food initially</li>
                            <li>• Try traditional dishes but start slowly</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              {/* Cultural Tips */}
              <TabsContent value="culture" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-vibrant-purple" />
                        Religious & Cultural Etiquette
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Dress modestly, especially at religious sites
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Remove shoes when entering churches and homes
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Ask permission before photographing people
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Learn basic greetings in Amharic
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Respect fasting periods and dietary restrictions
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Camera className="h-5 w-5 text-vibrant-orange" />
                        Photography Guidelines
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-vibrant-orange mt-0.5 flex-shrink-0" />
                          No photos of military installations or personnel
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Photography fees may apply at some sites
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Respect "no photography" areas in churches
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Be sensitive when photographing tribal communities
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Bring extra batteries and memory cards
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Plane className="h-5 w-5 text-vibrant-blue" />
                        Transportation Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Book domestic flights early for better prices
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Road conditions vary - longer travel times expected
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Private vehicles recommended for comfort and
                          flexibility
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-vibrant-orange mt-0.5 flex-shrink-0" />
                          Avoid driving at night in rural areas
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-vibrant-pink" />
                        Local Customs & Manners
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Coffee ceremony is an important social ritual
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Sharing food is common - accept graciously
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Use your right hand for greetings and eating
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Be patient - "Ethiopian time" is more relaxed
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-vibrant-teal mt-0.5 flex-shrink-0" />
                          Bargaining is expected in markets
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </Layout>
  );
}
