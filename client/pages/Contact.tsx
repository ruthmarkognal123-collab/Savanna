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
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Building,
  Calendar,
  Navigation,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "+251 911 123 456 (24/7 Emergency)",
      "+251 11 551 8429 (Office Hours)",
      "+251 944 567 890 (Bookings)",
    ],
    color: "text-primary",
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: [
      "info@savannaethiopia.com",
      "bookings@savannaethiopia.com",
      "support@savannaethiopia.com",
    ],
    color: "text-secondary",
  },
  {
    icon: MapPin,
    title: "Office Location",
    details: [
      "Bole Road, Near Edna Mall",
      "Addis Ababa, Ethiopia",
      "GPS: 9.0180° N, 38.7614° E",
    ],
    color: "text-primary",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday - Friday: 8:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 4:00 PM",
      "Sunday: Emergency only",
    ],
    color: "text-secondary",
  },
];

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageSquare className="h-10 w-10 text-primary" />
              <h1
                className="text-4xl font-bold"
                style={{
                  color: "#f17c33",
                  fontWeight: "700",
                }}
              >
                Contact{" "}
                <span
                  style={{
                    color: "#f17c33",
                    fontWeight: "700",
                  }}
                >
                  Savanna
                </span>{" "}
                Ethiopia
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch with our travel experts for special packages, custom
              tours, and personalized Ethiopian adventures
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-primary text-white px-4 py-2">
                24/7 Emergency Support
              </Badge>
              <Badge className="bg-secondary text-white px-4 py-2">
                Same Day Response
              </Badge>
              <Badge
                variant="outline"
                className="border-primary text-primary px-4 py-2"
              >
                Free Consultation
              </Badge>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20"
                >
                  <CardHeader>
                    <CardTitle
                      className={`flex items-center gap-3 ${info.color}`}
                    >
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5" />
                      </div>
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Special Notice for Packages */}
            <Card className="mb-12 border-2 border-secondary/50 bg-gradient-to-r from-secondary/5 to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Calendar className="h-5 w-5" />
                  Special Offers & Package Bookings
                </CardTitle>
                <CardDescription className="text-base">
                  For special deals and custom packages, please contact us
                  directly for personalized pricing and availability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Call for Packages</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Speak directly with our team
                    </p>
                    <Badge className="bg-primary text-white">
                      +251 911 123 456
                    </Badge>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Email for Details</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Get written quotations
                    </p>
                    <Badge className="bg-secondary text-white">
                      bookings@savanna.et
                    </Badge>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Visit Our Office</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Face-to-face consultation
                    </p>
                    <Badge variant="outline">Bole Road, Addis Ababa</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="text-center bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Plan Your Ethiopian Adventure?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our experienced team is here to help you create unforgettable
                  memories. Contact us today for personalized service and
                  exclusive packages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:0909930093">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: 0909930093
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email: bookings@savanna.et
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/M2QLPpRzY3hbXC797?g_st=ipc",
                        "_blank",
                      )
                    }
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Visit Our Office
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
