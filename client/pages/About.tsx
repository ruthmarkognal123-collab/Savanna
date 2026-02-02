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
  Mountain,
  Heart,
  Globe,
  Users,
  Award,
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Camera,
  MessageSquare,
} from "lucide-react";

const founders = [
  {
    name: "Hawariyaw Thomas",
    role: "Founder and CEO",
    bio: "Born and raised in Addis Ababa, his journey began with childhood road trips to visit family in rural Ethiopia. What started as curiosity became a calling. From passion to profession, Hawariyaw turned vision into movement — leading one of Ethiopia's rising travel companies.",
    image: "",
    expertise: ["Leadership", "Tourism Development", "Ethiopian Culture"],
  },
  {
    name: "Eyob Niguise",
    role: "CoFounder and Tour organiser",
    bio: "SAVANNA is my love letter to nature—a place to escape, breathe, and find yourself in the wild. It started with a life-changing hike up to a Mountain's, where I felt the pull to share this freedom. Nature's taught me to slow down, stay present, and respect its rhythm.",
    image: "",
    expertise: ["Tour Organization", "Nature Guiding", "Adventure Planning"],
  },
];

const values = [
  {
    icon: Heart,
    title: "Best Travel Experiences",
    description:
      "Deliver the best travel experiences to our guests, tourists, and travelers.",
  },
  {
    icon: Award,
    title: "Professional & Passionate Service",
    description: "Offer a balance of professional service and passionate care.",
  },
  {
    icon: Users,
    title: "National Pride",
    description:
      "Cultivate national pride by promoting Ethiopia's culture, history, and victories.",
  },
  {
    icon: Leaf,
    title: "Diverse Tourism",
    description: "Highlight and promote Ethiopia's diverse tourism offerings.",
  },
];

export default function About() {
  const founderImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fcf29d67e9d8f47c0b87d901590002add",
    "https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fa750feb727b14fc1b59ef08ce44ef6eb",
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1
              className="text-4xl font-bold mb-4"
              style={{
                color: "#f17c33",
                fontWeight: "700",
              }}
            >
              About{" "}
              <span
                style={{
                  color: "#f17c33",
                  fontWeight: "700",
                }}
              >
                Savanna
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your gateway to authentic Ethiopian adventures since 2024
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card/80 backdrop-blur rounded-lg p-6 text-center">
                <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">30+</h3>
                <p className="text-muted-foreground">Successful Tours</p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-lg p-6 text-center">
                <Mountain className="h-10 w-10 text-secondary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">50+</h3>
                <p className="text-muted-foreground">Destinations</p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-lg p-6 text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">1+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg mb-6">
                Savanna Hiking and Events was officially founded on March 24,
                2024, inside the halls of Lion Ethiopia Tourism, Hotel, and
                Business College. The idea sparked not in a boardroom, but in a
                classroom — between two passionate friends from the Tour
                Operation Department, both driven by a shared dream: To create
                something meaningful in Ethiopia's tourism industry.
              </p>
              <p className="text-lg mb-6">
                What started as small conversations after lectures turned into
                serious planning. Late nights turned into early mornings, filled
                with ideas, maps, and ambitions. With no big capital or company
                behind them, only passion, they launched Savanna — with a
                mission not just to organize hikes, but to build a community,
                share stories, and grow Ethiopia's travel culture.
              </p>
              <p className="text-lg mb-6">
                Savanna was born from love — love for nature, adventure, people,
                and a deep belief in what travel can teach us: unity, patience,
                and self-discovery. In just a short time, the team grew. Hikes
                became larger, strangers became family, and the Savanna brand
                started echoing in the hearts of those who joined our journeys.
              </p>
              <p className="text-lg">
                But Savanna is not just a name. It's a movement — one that
                honors discipline, connection, and the idea that every hill
                climbed together builds more than muscles — it builds trust,
                passion, and purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Meet Our Founders
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate individuals behind Savanna's commitment to
                authentic Ethiopian experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <Card key={index} className="overflow-hidden">
                  <div
                    className={`relative h-64 bg-muted ${index === 1 ? "flex flex-col" : ""}`}
                  >
                    {index === 0 ? (
                      <img
                        src={founderImages[index]}
                        alt={founder.name}
                        className="w-full h-64 object-cover mt-auto"
                      />
                    ) : (
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fa750feb727b14fc1b59ef08ce44ef6eb?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fa750feb727b14fc1b59ef08ce44ef6eb?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fa750feb727b14fc1b59ef08ce44ef6eb?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fa750feb727b14fc1b59ef08ce44ef6eb?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fa750feb727b14fc1b59ef08ce44ef6eb?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fa750feb727b14fc1b59ef08ce44ef6eb?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fa750feb727b14fc1b59ef08ce44ef6eb?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F0b6f636c39774feaaaf0f9cf489dd6a8%2Fa750feb727b14fc1b59ef08ce44ef6eb"
                        alt={founder.name}
                        className="object-cover object-center w-full min-h-5 min-w-5 overflow-hidden max-w-64 mx-auto"
                        style={{ aspectRatio: "0.98" }}
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{founder.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {founder.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {founder.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    Grow tourism at a national level. Make Ethiopia the top
                    chosen destination in Africa. Create a strong travel culture
                    within Ethiopia.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    Become one of Africa's leading travel agents and organizers.
                    Contribute to a 10–15% increase in Africa's travel industry
                    by 2035–2040. Establish Savanna as one of the biggest travel
                    brands globally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Savanna
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Social Media */}
        <section className="py-16 px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg opacity-90 mb-8">
                Ready to start planning your Ethiopian adventure? We'd love to
                hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-primary-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="ghost"
                    className="justify-start w-full text-primary-foreground hover:bg-primary-foreground/20 p-3"
                    asChild
                  >
                    <a href="mailto:savannaethiopiatravels@gmail.com">
                      <Mail className="h-5 w-5 mr-3" />
                      savannaethiopiatravels@gmail.com
                    </a>
                  </Button>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="justify-start w-full text-primary-foreground hover:bg-primary-foreground/20 p-3"
                      asChild
                    >
                      <a href="tel:0909930093">
                        <Phone className="h-5 w-5 mr-3" />
                        0909930093
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start w-full text-primary-foreground hover:bg-primary-foreground/20 p-3"
                      asChild
                    >
                      <a href="tel:0904149468">
                        <Phone className="h-5 w-5 mr-3" />
                        0904149468
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start w-full text-primary-foreground hover:bg-primary-foreground/20 p-3"
                      asChild
                    >
                      <a href="tel:0944780840">
                        <Phone className="h-5 w-5 mr-3" />
                        0944780840
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-sm opacity-90">
                    <MapPin className="h-4 w-4" />
                    <span>
                      Ethiopia, Addis Ababa, Bulgaria mazoriya, aynalem baze
                      building 5th floor 514
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-primary-foreground">
                    Follow Our Adventures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-6">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary-foreground hover:bg-primary-foreground/20"
                      asChild
                    >
                      <a
                        href="https://www.instagram.com/savannahikingandevents?igsh=MXE2cWc0Z2hjaXF2cg%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary-foreground hover:bg-primary-foreground/20"
                      asChild
                    >
                      <a
                        href="https://www.tiktok.com/@savannahikingandevents?_t=ZM-8z2Je9y8Iir&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Camera className="h-6 w-6" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary-foreground hover:bg-primary-foreground/20"
                      asChild
                    >
                      <a
                        href="https://t.me/Savannahikes"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare className="h-6 w-6" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-center mt-4 opacity-90">
                    Stay updated with our latest adventures and travel tips
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/feedback">
                  <Mail className="mr-2 h-5 w-5" />
                  Send us a Message
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
