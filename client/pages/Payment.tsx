import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Shield,
  Calendar,
  DollarSign,
  CheckCircle,
  Info,
} from "lucide-react";

const paymentMethods = [
  {
    method: "Bank Transfer",
    accepted: true,
    fees: "No fees",
    security: "High",
    description:
      "Direct bank transfers in USD or ETB to our Awash Bank account",
    bankDetails: {
      bank: "Awash Bank",
      accountName: "Savanna Ethiopia Travel",
      accountNumber: "013041492619302",
    },
  },
  {
    method: "Cash Payment",
    accepted: true,
    fees: "No fees",
    security: "Medium",
    description:
      "USD or ETB cash payments accepted at our office or upon tour start",
    bankDetails: {
      bank: "Awash Bank",
      accountName: "Savanna Ethiopia Travel",
      accountNumber: "013041492619302",
    },
  },
];

export default function Payment() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <section className="relative bg-gradient-to-r from-vibrant-blue/20 via-vibrant-purple/20 to-vibrant-teal/20 py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CreditCard className="h-10 w-10 text-vibrant-blue" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-vibrant-blue bg-clip-text text-transparent">
                Payment Options
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Secure and flexible payment methods for booking your Ethiopian
              adventure
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {paymentMethods.map((method, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-2 border-primary/20"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{method.method}</span>
                      {method.accepted && (
                        <Badge className="bg-green-600 text-white">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Accepted
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {method.description}
                    </p>

                    {/* Bank Details */}
                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold mb-3 text-primary">
                        Bank Account Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Bank:</span>
                          <span>{method.bankDetails.bank}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Account Name:</span>
                          <span>{method.bankDetails.accountName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Account Number:</span>
                          <span className="font-mono bg-background px-2 py-1 rounded border">
                            {method.bankDetails.accountNumber}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Processing Fees:</span>
                        <span className="font-medium text-green-600">
                          {method.fees}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Security Level:</span>
                        <Badge
                          variant={
                            method.security === "High" ? "default" : "secondary"
                          }
                        >
                          {method.security}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-vibrant-orange" />
                  Booking & Payment Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 bg-vibrant-blue rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Booking Confirmation</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      25% deposit required
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Secures your spot and begins trip planning
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Balance Due</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      75% remaining balance
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Due 30 days before departure date
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 bg-vibrant-teal rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Trip Ready</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Final confirmation
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Receive detailed itinerary and travel documents
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-vibrant-red" />
                    Security & Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-vibrant-teal" />
                      SSL encrypted payment processing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-vibrant-teal" />
                      PCI DSS compliant systems
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-vibrant-teal" />
                      No payment details stored
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-vibrant-teal" />
                      Refund protection available
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-vibrant-blue" />
                    Important Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • All prices quoted in ETB with USD equivalent shown
                    </li>
                    <li>• Bank transfer preferred for advance payments</li>
                    <li>• Cash payments accepted in USD or ETB</li>
                    <li>• Same account for both transfer and cash payment</li>
                    <li>• Current exchange rate: 1 USD = 142.59 ETB</li>
                    <li>• Travel insurance recommended for all bookings</li>
                    <li>• Group discounts available for 6+ travelers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-vibrant-blue hover:from-primary/90 hover:to-vibrant-blue/90"
                asChild
              >
                <Link to="/booking">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Start Your Booking
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
