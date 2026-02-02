import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import ImageUploadSlot from "@/components/ImageUploadSlot";
import { useEditableImages } from "@/hooks/use-editable-images";
import {
  Mountain,
  Plane,
  Hotel,
  MapPin,
  Package,
  Car,
  ChevronDown,
  Star,
  Calendar,
  Users,
  Camera,
  TreePine,
  Waves,
  Building,
  Landmark,
  Compass,
  Mail,
  Phone,
  Instagram,
  ExternalLink,
  Edit,
  Save,
  RotateCcw,
} from "lucide-react";

const initialDestinations = [
  {
    name: "Lalibela",
    description: "Ancient rock-hewn churches and spiritual heritage",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    highlights: ["Rock Churches", "Religious Heritage", "UNESCO Site"],
    location: "Northern Ethiopia",
    bestTime: "October to March",
    duration: "2-3 days",
  },
  {
    name: "Wonchi",
    description: "Crater lake with stunning volcanic landscapes",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    highlights: ["Crater Lake", "Volcanic Views", "Boat Rides"],
    location: "Central Ethiopia",
    bestTime: "Year round",
    duration: "1-2 days",
  },
  {
    name: "South Omo",
    description: "Cultural diversity and traditional tribes",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop",
    highlights: ["Cultural Tours", "Tribal Villages", "River Activities"],
    location: "Southern Ethiopia",
    bestTime: "June to September",
    duration: "5-7 days",
  },
  {
    name: "Semien Mountains",
    description: "Dramatic peaks and endemic wildlife",
    image:
      "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=600&h=400&fit=crop",
    highlights: ["Mountain Trekking", "Wildlife", "Gelada Monkeys"],
    location: "Northern Ethiopia",
    bestTime: "October to March",
    duration: "3-5 days",
  },
  {
    name: "Bale Mountains",
    description: "Alpine plateaus and rare Ethiopian wolves",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
    highlights: ["Alpine Trekking", "Ethiopian Wolves", "Sanetti Plateau"],
    location: "Southeast Ethiopia",
    bestTime: "November to February",
    duration: "3-4 days",
  },
  {
    name: "Danakil",
    description: "One of the hottest and most unique places on Earth",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&h=400&fit=crop",
    highlights: ["Salt Mines", "Volcanic Activity", "Erta Ale"],
    location: "Northeast Ethiopia",
    bestTime: "November to February",
    duration: "4-6 days",
  },
];

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Domestic and international flight arrangements with competitive rates",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description:
      "Accommodation from luxury lodges to authentic local guesthouses",
  },
  {
    icon: MapPin,
    title: "City Tours",
    description:
      "Guided tours of Ethiopia's historic cities and cultural sites",
  },
  {
    icon: Package,
    title: "Tour Packages",
    description:
      "Complete adventure packages tailored to your interests and schedule",
  },
  {
    icon: Car,
    title: "Car Rentals",
    description: "Reliable vehicles with experienced drivers for safe travels",
  },
];

const exploreCategories = [
  {
    title: "Addis Ababa and Surroundings",
    icon: Building,
    description: "Explore Ethiopia's vibrant capital and nearby attractions",
    details:
      "Visit the National Museum, Holy Trinity Cathedral, Merkato market, and Mount Entoto. Day trips to Debre Libanos monastery and the Blue Nile Gorge.",
  },
  {
    title: "Nature and Adventures",
    icon: TreePine,
    description: "Outdoor activities and natural wonders",
    details:
      "Hiking, trekking, wildlife viewing, bird watching, and adventure sports in Ethiopia's diverse landscapes from highlands to lowlands.",
  },
  {
    title: "Historical and Cultural Spots",
    icon: Landmark,
    description: "Ancient civilizations and rich cultural heritage",
    details:
      "Visit ancient kingdoms, rock churches, castles, museums, and experience traditional Ethiopian culture and customs.",
  },
  {
    title: "Events and Holidays",
    icon: Calendar,
    description: "Festivals and celebration experiences",
    details:
      "Join Timkat (Epiphany), Meskel (Finding of the True Cross), and other traditional Ethiopian festivals and celebrations.",
  },
  {
    title: "UNESCO Registered Sites",
    icon: Star,
    description: "World Heritage Sites of Ethiopia",
    details:
      "Explore Lalibela churches, Simien National Park, Aksum obelisks, Harar old city, and the Lower Valley of the Omo.",
  },
  {
    title: "Discover by Direction",
    icon: Compass,
    description: "Regional exploration opportunities",
    details:
      "Northern Historical Circuit, Southern Cultural Route, Eastern Desert Adventures, Western Highland Expeditions.",
  },
];

export default function Index() {
  const [openCategories, setOpenCategories] = useState<number[]>([]);

  // Setup default images for editable functionality - memoized to prevent infinite loops
  const defaultImages = useMemo(
    () => ({
      heroLogo: {
        url: "https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2F41458e82451a4c9bb85682cd1a19ddd0",
        alt: "Savanna Logo",
        title: "Hero Logo",
      },
      ...Object.fromEntries(
        initialDestinations.map((dest, index) => [
          `destination-${index}`,
          {
            url: dest.image,
            alt: dest.name,
            title: dest.name,
            description: dest.description,
          },
        ]),
      ),
    }),
    [],
  );

  const {
    images,
    isEditMode,
    updateImage,
    getImage,
    resetImage,
    toggleEditMode,
  } = useEditableImages({
    storageKey: "homepage-images",
    defaultImages,
  });

  const toggleCategory = (index: number) => {
    setOpenCategories((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 py-20 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              {isEditMode ? (
                <ImageUploadSlot
                  value={getImage("heroLogo")?.url}
                  onChange={(url) =>
                    updateImage("heroLogo", { url, alt: "Savanna Logo" })
                  }
                  alt="Savanna Logo"
                  className="w-12 h-12"
                  widthClass="w-12"
                  heightClass="h-12"
                  rounded="rounded"
                  label="Logo"
                />
              ) : (
                <img
                  src={getImage("heroLogo")?.url || defaultImages.heroLogo.url}
                  alt="Savanna Logo"
                  className="w-12 h-12 rounded object-cover"
                />
              )}
              <h1
                className="text-5xl font-bold"
                style={{
                  color: "#d97607",
                  fontWeight: "700",
                }}
              >
                Savanna
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-2">
              Ethiopian Hiking & Travel Company
            </p>
            <div className="mb-8 max-w-3xl mx-auto">
              <Card className="bg-card/80 backdrop-blur border-2 border-orange-600/20 rounded-xl hover:border-orange-600/30 transition-colors">
                <CardHeader className="py-4 bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                  <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent flex items-center gap-2">
                    Welcome to Savanna Ethiopia Travel
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base leading-relaxed text-muted-foreground space-y-4">
                  <p>
                    Discover Ethiopia like never before — from the breathtaking
                    highlands and vibrant cultural festivals to the ancient
                    wonders carved in stone. At Savanna Ethiopia Travel, we
                    craft unforgettable journeys that blend adventure, history,
                    and authentic local experiences.
                  </p>
                  <p>
                    Whether you’re hiking through majestic mountains, exploring
                    UNESCO World Heritage sites, or immersing yourself in
                    Ethiopia’s diverse traditions, our expert guides ensure
                    every step of your journey is inspiring, safe, and deeply
                    memorable.
                  </p>
                  <p className="font-medium text-foreground">
                    Your Ethiopian adventure begins here.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Adventure Now
                </Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-card/80 backdrop-blur rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Expert Guides</h3>
                <p className="text-sm text-muted-foreground">
                  Local knowledge & experience
                </p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-lg p-4 text-center">
                <Star className="h-8 w-8 text-secondary mx-auto mb-2" />
                <h3 className="font-semibold">5-Star Service</h3>
                <p className="text-sm text-muted-foreground">
                  Exceptional customer care
                </p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-lg p-4 text-center">
                <Mountain className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Unique Destinations</h3>
                <p className="text-sm text-muted-foreground">
                  Off the beaten path adventures
                </p>
              </div>
            </div>
          </div>
          {/* Placeholder for background image */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-green-900 to-orange-900" />
          </div>
        </section>

        {/* Welcome to Ethiopia Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Welcome to Ethiopia – The Land of Origins
              </h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                ✨ Discover a country where history, culture, and nature come
                alive. Ethiopia is not just a destination; it’s a journey
                through time, from the world’s oldest human fossils to vibrant
                modern cities, from sacred rock-hewn churches to breathtaking
                mountain peaks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl hover:border-orange-600/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                  <CardTitle>🇪🇹 Ethiopia at a Glance</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Official Name: Federal Democratic Republic of Ethiopia
                    </li>
                    <li>
                      Capital City: Addis Ababa – “New Flower” 🌸 (also home to
                      the African Union)
                    </li>
                    <li>Location: Horn of Africa, East Africa</li>
                    <li>Population: ~120 million (2025 est.)</li>
                    <li>Language: Amharic (plus 80+ local languages)</li>
                    <li>Currency: Ethiopian Birr (ETB)</li>
                    <li>Time Zone: GMT+3 (East Africa Time)</li>
                    <li>Dialing Code: +251</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl hover:border-orange-600/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                  <CardTitle>🌞 Climate & Diversity</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>Ethiopia is a land of contrasts.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cool highlands perfect for trekking 🏔️</li>
                    <li>Sunny savannas full of wildlife 🦒</li>
                    <li>
                      The Danakil Depression – one of the hottest places on
                      Earth 🔥
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl hover:border-orange-600/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                  <CardTitle>🏆 What Makes Ethiopia Special?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      ☕ Birthplace of Coffee – taste it where it all began
                    </li>
                    <li>
                      🏛️ Ancient Civilizations – over 3,000 years of history
                    </li>
                    <li>
                      ✝️ Lalibela Rock-Hewn Churches – “The New Jerusalem”
                    </li>
                    <li>
                      ⛰️ Simien & Bale Mountains – dramatic landscapes & rare
                      wildlife
                    </li>
                    <li>
                      🌋 Danakil Depression – colorful salt flats, lava lakes,
                      and adventure
                    </li>
                    <li>
                      🔤 Unique Culture – Ge’ez alphabet, a 13-month calendar,
                      and vibrant traditions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl hover:border-orange-600/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                  <CardTitle>🌐 UNESCO World Heritage Sites</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="mb-2">
                    Ethiopia proudly hosts more than seven UNESCO sites:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Rock-Hewn Churches of Lalibela</li>
                    <li>Ancient City of Axum</li>
                    <li>Simien Mountains National Park</li>
                    <li>Harar Jugol – the living Islamic city</li>
                    <li>Tiya prehistoric stelae</li>
                    <li>Bale Mountains National Park</li>
                    <li>Konso Cultural Landscape</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 border-2 border-orange-600/20 bg-card/80 backdrop-blur rounded-xl hover:border-orange-600/30 transition-colors">
                <CardHeader className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5">
                  <CardTitle>💫 Why Visit Ethiopia?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p>
                    Because here, you don’t just travel—you experience origins,
                    spirituality, and adventure all in one country.
                  </p>
                  <p>
                    👉 Whether you’re chasing mountains, exploring deserts,
                    walking through ancient streets, or sipping the world’s
                    finest coffee, Ethiopia will welcome you with open arms and
                    unforgettable memories.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Popular Destinations
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore Ethiopia's most spectacular locations, from ancient
                churches to dramatic mountains
              </p>
              {isEditMode && (
                <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg max-w-md mx-auto">
                  <p className="text-sm text-orange-800">
                    📸 Edit mode active - Click on destination images to replace
                    them
                  </p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialDestinations.map((destination, index) => {
                const destinationImages = [
                  "https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2F9ede6bf9be5340ab80968855f77cd54c",
                  "https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2F2a35eccd7159402bac8b1d8c5c8c4619",
                  "https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2F55020136e8be486fa82816a2f105a420",
                  "https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fc843e6cf941f4a95b4a809b561ea102d",
                  "https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Feb510acb3d1f4c58bcbf91c11a1a6ebb",
                  "https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fe526a104afde4d3597169b0bb0d1fb39",
                ];
                const aspectRatios = [
                  "1.38",
                  "1.3",
                  "1.38",
                  "1.5",
                  "1.52",
                  "1.42",
                ];

                return (
                  <Card
                    key={index}
                    className={`overflow-hidden hover:shadow-lg transition-shadow group${index === 3 ? " flex flex-col" : ""}`}
                  >
                    {index === 3 ? (
                      <>
                        <img
                          loading="lazy"
                          srcSet={`${destinationImages[index]}?width=100 100w, ${destinationImages[index]}?width=200 200w, ${destinationImages[index]}?width=400 400w, ${destinationImages[index]}?width=800 800w, ${destinationImages[index]}?width=1200 1200w, ${destinationImages[index]}?width=1600 1600w, ${destinationImages[index]}?width=2000 2000w, ${destinationImages[index]}`}
                          className={`object-cover object-center w-full min-h-5 min-w-5 overflow-hidden my-auto`}
                          style={{ aspectRatio: aspectRatios[index] }}
                        />
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold">
                              {destination.name}
                            </h3>
                            <p className="text-muted-foreground">
                              {destination.description}
                            </p>

                            <div className="text-xs text-muted-foreground space-y-1">
                              <div className="flex justify-between">
                                <span className="font-medium">Location:</span>
                                <span>{destination.location}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Best time:</span>
                                <span>{destination.bestTime}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Duration:</span>
                                <span>{destination.duration}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {destination.highlights.map((highlight, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </>
                    ) : (
                      <>
                        <div className="relative h-48 bg-gradient-to-br from-muted/30 to-orange-100/20 flex flex-col">
                          <img
                            loading="lazy"
                            srcSet={`${destinationImages[index]}?width=100 100w, ${destinationImages[index]}?width=200 200w, ${destinationImages[index]}?width=400 400w, ${destinationImages[index]}?width=800 800w, ${destinationImages[index]}?width=1200 1200w, ${destinationImages[index]}?width=1600 1600w, ${destinationImages[index]}?width=2000 2000w, ${destinationImages[index]}`}
                            className={`object-cover object-center w-full min-h-5 min-w-5 overflow-hidden m-auto`}
                            style={{ aspectRatio: aspectRatios[index] }}
                          />
                          <div className="absolute bottom-4 left-4 text-white" />
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold">
                              {destination.name}
                            </h3>
                            <p className="text-muted-foreground">
                              {destination.description}
                            </p>

                            <div className="text-xs text-muted-foreground space-y-1">
                              <div className="flex justify-between">
                                <span className="font-medium">Location:</span>
                                <span>{destination.location}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Best time:</span>
                                <span>{destination.bestTime}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Duration:</span>
                                <span>{destination.duration}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {destination.highlights.map((highlight, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete travel solutions for your Ethiopian adventure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    {service.title !== "Tour Packages" ? (
                      <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    ) : null}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className="py-16 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Explore More
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover Ethiopia's diverse offerings through our specialized
                categories
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exploreCategories.map((category, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow group cursor-pointer border-2 hover:border-primary/20"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${
                          index === 0
                            ? "from-vibrant-blue to-vibrant-purple"
                            : index === 1
                              ? "from-vibrant-teal to-vibrant-blue"
                              : index === 2
                                ? "from-vibrant-orange to-vibrant-red"
                                : index === 3
                                  ? "from-vibrant-pink to-vibrant-purple"
                                  : index === 4
                                    ? "from-vibrant-red to-vibrant-orange"
                                    : "from-vibrant-teal to-vibrant-pink"
                        } rounded-lg flex items-center justify-center`}
                      >
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {category.details}
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                      asChild
                    >
                      <Link
                        to={
                          index === 0
                            ? "/packages/addis-ababa"
                            : index === 1
                              ? "/packages/nature-adventure"
                              : index === 2
                                ? "/packages/historical-cultural"
                                : index === 3
                                  ? "/packages/events-holidays"
                                  : index === 4
                                    ? "/packages/unesco-sites"
                                    : "/packages/discover-direction"
                        }
                        onClick={() => {
                          // Scroll to top when navigating to a new page
                          setTimeout(() => {
                            window.scrollTo(0, 0);
                          }, 100);
                        }}
                      >
                        <Compass className="w-4 h-4 mr-2" />
                        Explore {category.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg opacity-90 mb-8">
                Ready to start planning your Ethiopian adventure? Get in touch
                with us!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/20 w-full text-sm"
                    asChild
                  >
                    <a href="tel:0909930093">0909930093</a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/20 w-full text-sm"
                    asChild
                  >
                    <a href="tel:0904149468">0904149468</a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/20 w-full text-sm"
                    asChild
                  >
                    <a href="tel:0944780840">0944780840</a>
                  </Button>
                  <div className="inline-flex items-center rounded-md text-sm font-medium gap-2 h-9 justify-center leading-5 mt-2 whitespace-nowrap w-full px-3">
                    <p>working hours 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email & Location</h3>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/20 w-full text-xs"
                    asChild
                  >
                    <a href="mailto:savannaethiopiatravels@gmail.com">
                      savannaethiopiatravels@gmail.com
                    </a>
                  </Button>
                  <div className="space-y-1 text-xs opacity-90 mt-2">
                    <p>Ethiopia, Addis Ababa</p>
                    <p>
                      Bulgaria mazoriya, aynalem baze building 5th floor 514
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 text-center">
                <Instagram className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/20 w-full"
                    asChild
                  >
                    <a
                      href="https://www.instagram.com/savannahikingandevents?igsh=MXE2cWc0Z2hjaXF2cg%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/20 w-full"
                    asChild
                  >
                    <a
                      href="https://www.tiktok.com/@savannahikingandevents?_t=ZM-8z2Je9y8Iir&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TikTok
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/20 w-full"
                    asChild
                  >
                    <a
                      href="https://t.me/Savannahikes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Plan Your Trip
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link to="/feedback">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
