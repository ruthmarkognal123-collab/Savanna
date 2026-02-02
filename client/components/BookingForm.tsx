import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Send, User, Mail, Phone, MapPin } from "lucide-react";

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  destination: string;
  tourCategory: string;
  departureDate: string;
  returnDate: string;
  numberOfTravelers: string;
  hikingLevel: string;
  accommodationType: string;
  additionalServices: string[];
  culturalInterests: string[];
  dietaryRequirements: string;
  healthConditions: string;
  specialRequests: string;
  howDidYouHear: string;
}

const destinations = [
  "Lalibela",
  "Simien Mountains",
  "Danakil Depression",
  "Bale Mountains",
  "Harar",
  "South Omo Valley",
  "Gondar",
  "Axum",
  "Wonchi Crater",
  "Blue Nile Falls",
];

const tourCategories = [
  "Nature & Adventure",
  "Historical & Cultural",
  "City Tours",
  "Events & Holidays",
  "Luxury Travel",
];

const hikingLevels = ["Beginner", "Intermediate", "Advanced"];

const accommodationTypes = [
  "Hotel",
  "Lodge",
  "Guesthouse",
  "Camping",
  "Luxury Stay",
];

const additionalServicesOptions = [
  "Guided Tours",
  "Car Rental",
  "Airport Transfers",
  "Domestic Flights",
  "Travel Insurance",
  "Photography & Videography",
];

const culturalInterestsOptions = [
  "Tribal Visits",
  "UNESCO World Heritage Sites",
  "Local Festivals",
  "Culinary Experiences",
  "Coffee Tours",
];

const dietaryOptions = [
  "Vegetarian",
  "Vegan",
  "Halal",
  "Kosher",
  "Gluten-Free",
  "No Restrictions",
];

const hearAboutUsOptions = [
  "Website",
  "Social Media",
  "Friend/Referral",
  "Travel Agency",
  "Event",
  "Other",
];

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    destination: "",
    tourCategory: "",
    departureDate: "",
    returnDate: "",
    numberOfTravelers: "",
    hikingLevel: "",
    accommodationType: "",
    additionalServices: [],
    culturalInterests: [],
    dietaryRequirements: "",
    healthConditions: "",
    specialRequests: "",
    howDidYouHear: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (
    field: "additionalServices" | "culturalInterests",
    value: string,
    checked: boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(
        "Thank you for your booking request! Our team will review your details and get in touch with a personalized travel plan within 24 hours.",
      );
      setIsSubmitting(false);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        nationality: "",
        destination: "",
        tourCategory: "",
        departureDate: "",
        returnDate: "",
        numberOfTravelers: "",
        hikingLevel: "",
        accommodationType: "",
        additionalServices: [],
        culturalInterests: [],
        dietaryRequirements: "",
        healthConditions: "",
        specialRequests: "",
        howDidYouHear: "",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-2 border-primary/20 shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
              <CalendarDays className="h-8 w-8 text-primary" />
              <span
                style={{
                  color: "#f17c33",
                  fontWeight: "700",
                }}
              >
                Savanna
              </span>{" "}
              Ethiopia Travels – Booking Form
            </CardTitle>
            <CardDescription className="text-lg">
              Complete this form to start planning your Ethiopian adventure with
              us
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor="fullName"
                    className="flex items-center gap-2 mb-2"
                  >
                    <User className="h-4 w-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your complete legal name as it appears on your passport"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    required
                    className="border-2 border-muted hover:border-primary/50 focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Please enter your complete legal name as it appears on your
                    passport or ID for booking records.
                  </p>
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="flex items-center gap-2 mb-2"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="border-2 border-muted hover:border-primary/50 focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Required for communication, sending itineraries, and booking
                    confirmations.
                  </p>
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="flex items-center gap-2 mb-2"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="border-2 border-muted hover:border-primary/50 focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Include country code. Used for contact, updates, and
                    emergencies.
                  </p>
                </div>

                <div>
                  <Label htmlFor="nationality" className="mb-2 block">
                    Nationality *
                  </Label>
                  <Input
                    id="nationality"
                    placeholder="e.g., American, British, Canadian"
                    value={formData.nationality}
                    onChange={(e) =>
                      handleInputChange("nationality", e.target.value)
                    }
                    required
                    className="border-2 border-muted hover:border-primary/50 focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Helps us provide tailored travel advice, including visa
                    requirements for Ethiopia.
                  </p>
                </div>
              </div>

              {/* Trip Details */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Trip Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="destination" className="mb-2 block">
                      Destination *
                    </Label>
                    <Select
                      value={formData.destination}
                      onValueChange={(value) =>
                        handleInputChange("destination", value)
                      }
                    >
                      <SelectTrigger className="border-2 border-muted hover:border-primary/50">
                        <SelectValue placeholder="Choose your preferred Ethiopian destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((dest) => (
                          <SelectItem key={dest} value={dest}>
                            {dest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="tourCategory" className="mb-2 block">
                      Tour Category *
                    </Label>
                    <Select
                      value={formData.tourCategory}
                      onValueChange={(value) =>
                        handleInputChange("tourCategory", value)
                      }
                    >
                      <SelectTrigger className="border-2 border-muted hover:border-primary/50">
                        <SelectValue placeholder="Select travel experience type" />
                      </SelectTrigger>
                      <SelectContent>
                        {tourCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="departureDate" className="mb-2 block">
                      Departure Date *
                    </Label>
                    <Input
                      id="departureDate"
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) =>
                        handleInputChange("departureDate", e.target.value)
                      }
                      required
                      className="border-2 border-muted hover:border-primary/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="returnDate" className="mb-2 block">
                      Return Date *
                    </Label>
                    <Input
                      id="returnDate"
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) =>
                        handleInputChange("returnDate", e.target.value)
                      }
                      required
                      className="border-2 border-muted hover:border-primary/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="numberOfTravelers" className="mb-2 block">
                      Number of Travelers *
                    </Label>
                    <Input
                      id="numberOfTravelers"
                      type="number"
                      min="1"
                      placeholder="Including children"
                      value={formData.numberOfTravelers}
                      onChange={(e) =>
                        handleInputChange("numberOfTravelers", e.target.value)
                      }
                      required
                      className="border-2 border-muted hover:border-primary/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hikingLevel" className="mb-2 block">
                      Hiking Level
                    </Label>
                    <Select
                      value={formData.hikingLevel}
                      onValueChange={(value) =>
                        handleInputChange("hikingLevel", value)
                      }
                    >
                      <SelectTrigger className="border-2 border-muted hover:border-primary/50">
                        <SelectValue placeholder="Select your fitness level" />
                      </SelectTrigger>
                      <SelectContent>
                        {hikingLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground mt-1">
                      Helps us recommend the right itinerary for you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accommodation & Services */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Accommodation & Services
                </h3>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="accommodationType" className="mb-2 block">
                      Accommodation Type
                    </Label>
                    <Select
                      value={formData.accommodationType}
                      onValueChange={(value) =>
                        handleInputChange("accommodationType", value)
                      }
                    >
                      <SelectTrigger className="border-2 border-muted hover:border-primary/50">
                        <SelectValue placeholder="Choose your preferred lodging option" />
                      </SelectTrigger>
                      <SelectContent>
                        {accommodationTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-3 block">
                      Additional Services (Optional)
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {additionalServicesOptions.map((service) => (
                        <div
                          key={service}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`service-${service}`}
                            checked={formData.additionalServices.includes(
                              service,
                            )}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(
                                "additionalServices",
                                service,
                                checked as boolean,
                              )
                            }
                          />
                          <Label
                            htmlFor={`service-${service}`}
                            className="text-sm"
                          >
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Cultural Interests</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {culturalInterestsOptions.map((interest) => (
                        <div
                          key={interest}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`interest-${interest}`}
                            checked={formData.culturalInterests.includes(
                              interest,
                            )}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(
                                "culturalInterests",
                                interest,
                                checked as boolean,
                              )
                            }
                          />
                          <Label
                            htmlFor={`interest-${interest}`}
                            className="text-sm"
                          >
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Preferences */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Personal Preferences
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="dietaryRequirements" className="mb-2 block">
                      Dietary Requirements
                    </Label>
                    <Select
                      value={formData.dietaryRequirements}
                      onValueChange={(value) =>
                        handleInputChange("dietaryRequirements", value)
                      }
                    >
                      <SelectTrigger className="border-2 border-muted hover:border-primary/50">
                        <SelectValue placeholder="Select dietary preferences" />
                      </SelectTrigger>
                      <SelectContent>
                        {dietaryOptions.map((diet) => (
                          <SelectItem key={diet} value={diet}>
                            {diet}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="howDidYouHear" className="mb-2 block">
                      How Did You Hear About Us?
                    </Label>
                    <Select
                      value={formData.howDidYouHear}
                      onValueChange={(value) =>
                        handleInputChange("howDidYouHear", value)
                      }
                    >
                      <SelectTrigger className="border-2 border-muted hover:border-primary/50">
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        {hearAboutUsOptions.map((source) => (
                          <SelectItem key={source} value={source}>
                            {source}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <div>
                    <Label htmlFor="healthConditions" className="mb-2 block">
                      Health Conditions (Optional)
                    </Label>
                    <Textarea
                      id="healthConditions"
                      placeholder="Share medical needs or allergies to ensure safety during remote hikes or long trips"
                      value={formData.healthConditions}
                      onChange={(e) =>
                        handleInputChange("healthConditions", e.target.value)
                      }
                      className="border-2 border-muted hover:border-primary/50 focus:border-primary"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialRequests" className="mb-2 block">
                      Special Requests
                    </Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Accessibility requirements, honeymoon arrangements, specific cultural activities, or any other special needs"
                      value={formData.specialRequests}
                      onChange={(e) =>
                        handleInputChange("specialRequests", e.target.value)
                      }
                      className="border-2 border-muted hover:border-primary/50 focus:border-primary"
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  {isSubmitting ? (
                    "Processing Your Booking..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Booking Request
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Our team will review your details and get in touch with a
                  personalized travel plan within 24 hours.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
