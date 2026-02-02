import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import ImageUploadSlot from "@/components/ImageUploadSlot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Camera, Car } from "lucide-react";

const attractions = [
  {
    name: "National Museum of Ethiopia",
    description: "Home to Lucy, the 3.2 million-year-old hominid fossil",
    duration: "2-3 hours",
    highlights: ["Lucy fossil", "Ancient artifacts", "Cultural exhibits"],
    image: ""
  },
  {
    name: "Holy Trinity Cathedral",
    description: "Beautiful Orthodox cathedral with stunning architecture",
    duration: "1-2 hours", 
    highlights: ["Religious art", "Imperial tombs", "Architecture"],
    image: ""
  },
  {
    name: "Merkato Market",
    description: "One of Africa's largest open-air markets",
    duration: "3-4 hours",
    highlights: ["Local crafts", "Spices", "Cultural immersion"],
    image: ""
  }
];

export default function AddisAbaba() {
  const [images, setImages] = useState<Array<string | undefined>>(
    Array.from({ length: attractions.length }, () => undefined),
  );
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <section className="relative bg-gradient-to-r from-vibrant-blue/20 via-vibrant-purple/20 to-vibrant-teal/20 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-vibrant-blue bg-clip-text text-transparent mb-4">
              Addis Ababa & Surroundings
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover Ethiopia's vibrant capital city and its fascinating surroundings
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attractions.map((attraction, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-muted">
                    <ImageUploadSlot
                      value={images[index]}
                      onChange={(url) =>
                        setImages((prev) => {
                          const next = [...prev];
                          next[index] = url;
                          return next;
                        })
                      }
                      alt={attraction.name}
                      widthClass="w-full"
                      heightClass="h-48"
                      rounded=""
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{attraction.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-vibrant-orange" />
                      <span className="text-sm text-muted-foreground">{attraction.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{attraction.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {attraction.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" size="sm" asChild>
                      <Link to="/booking">
                        <Camera className="w-4 h-4 mr-2" />
                        Book This Tour
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
