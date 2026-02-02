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
import { Star, Quote, Heart, Calendar, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Absolutely incredible experience! The Simien Mountains trek was beyond my wildest dreams. Our guide was knowledgeable and the landscapes were breathtaking. Highly recommend Savanna for anyone seeking authentic Ethiopian adventures.",
    rating: 5,
    destination: "Simien Mountains",
    date: "March 2024",
    experience: "Mountain Trekking",
  },
  {
    id: 2,
    content:
      "The Lalibela churches tour was a spiritual journey I'll never forget. The organization was perfect and our guide brought history to life. Professional service with genuine passion for Ethiopian heritage.",
    rating: 5,
    destination: "Lalibela",
    date: "February 2024",
    experience: "Cultural Tour",
  },
  {
    id: 3,
    content:
      "Amazing cultural experience in the Omo Valley. Meeting different tribes and learning about their traditions was eye-opening. Savanna handled everything with respect and professionalism.",
    rating: 5,
    destination: "Omo Valley",
    date: "January 2024",
    experience: "Cultural Immersion",
  },
  {
    id: 4,
    content:
      "The Danakil Depression expedition was extreme but so worth it! Seeing the lava lake at Erta Ale was magical. Expert guides made the challenging journey safe and memorable.",
    rating: 5,
    destination: "Danakil Depression",
    date: "December 2023",
    experience: "Adventure Tour",
  },
  {
    id: 5,
    content:
      "Fantastic coffee tour in Jimma! Learning about Ethiopia's coffee heritage from bean to cup was fascinating. The local families we met were so welcoming. Perfect blend of education and culture.",
    rating: 5,
    destination: "Jimma",
    date: "November 2023",
    experience: "Coffee Tour",
  },
  {
    id: 6,
    content:
      "The Harar city exploration exceeded expectations. The hyena feeding ceremony was thrilling and the old city is truly magical. Great local insights and historical knowledge from our guide.",
    rating: 5,
    destination: "Harar",
    date: "October 2023",
    experience: "Historical Tour",
  },
  {
    id: 7,
    content:
      "Wonderful bird watching safari in Awash National Park. Saw incredible wildlife and learned so much about Ethiopian ecosystems. The photography opportunities were endless.",
    rating: 5,
    destination: "Awash National Park",
    date: "September 2023",
    experience: "Wildlife Safari",
  },
  {
    id: 8,
    content:
      "The Bale Mountains wildlife experience was outstanding. Spotting Ethiopian wolves was a highlight! The eco-lodges were comfortable and the entire trip was well-organized.",
    rating: 5,
    destination: "Bale Mountains",
    date: "August 2023",
    experience: "Eco Trek",
  },
  {
    id: 9,
    content:
      "Incredible journey to Axum's ancient sites. Standing among the obelisks felt like traveling back in time. Our guide's knowledge of Ethiopian history was impressive.",
    rating: 5,
    destination: "Axum",
    date: "July 2023",
    experience: "Archaeological Tour",
  },
  {
    id: 10,
    content:
      "The Gondar castles tour was like stepping into a fairy tale. Beautiful architecture and rich history perfectly presented. Savanna's attention to detail made this trip special.",
    rating: 5,
    destination: "Gondar",
    date: "June 2023",
    experience: "Historical Tour",
  },
  {
    id: 11,
    content:
      "Amazing Timkat festival experience! Being part of this colorful religious celebration was deeply moving. The cultural immersion was authentic and respectfully managed.",
    rating: 5,
    destination: "Various Locations",
    date: "January 2023",
    experience: "Festival Tour",
  },
  {
    id: 12,
    content:
      "The Dorze village visit was enlightening. Learning traditional weaving techniques and tasting kocho bread was a unique cultural exchange. Highly educational and fun.",
    rating: 5,
    destination: "Dorze Village",
    date: "May 2023",
    experience: "Cultural Village Tour",
  },
  {
    id: 13,
    content:
      "Perfect combination of nature and culture in Arba Minch. The boat safari on Lake Chamo was exciting and the local communities were incredibly welcoming. Great value for money.",
    rating: 5,
    destination: "Arba Minch",
    date: "April 2023",
    experience: "Lake Safari",
  },
  {
    id: 14,
    content:
      "Unforgettable Blue Nile Falls expedition. The power of the waterfalls was awe-inspiring and the surrounding landscapes were beautiful. Excellent photography opportunities throughout.",
    rating: 5,
    destination: "Blue Nile Falls",
    date: "March 2023",
    experience: "Nature Tour",
  },
  {
    id: 15,
    content:
      "The highland trekking experience was challenging but incredibly rewarding. Stunning mountain views and traditional village encounters made every step worthwhile. Professional guides throughout.",
    rating: 5,
    destination: "Ethiopian Highlands",
    date: "February 2023",
    experience: "Highland Trek",
  },
  {
    id: 16,
    content:
      "Wonderful introduction to Ethiopian culture through the Addis Ababa city tour. From museums to markets, every stop was interesting and well-explained. Great starting point for Ethiopia exploration.",
    rating: 5,
    destination: "Addis Ababa",
    date: "January 2023",
    experience: "City Tour",
  },
  {
    id: 17,
    content:
      "The rock churches of Tigray were absolutely spectacular. Climbing to cliff-top churches was adventurous and spiritually moving. Incredible ancient art and breathtaking views.",
    rating: 5,
    destination: "Tigray",
    date: "December 2022",
    experience: "Religious Sites Tour",
  },
  {
    id: 18,
    content:
      "Amazing crater lakes tour around Bishoftu. Each lake had its own character and the volcanic landscapes were fascinating. Perfect day trip with geological and cultural insights.",
    rating: 5,
    destination: "Bishoftu",
    date: "November 2022",
    experience: "Crater Lakes Tour",
  },
];

export default function Testimonials() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Customer Testimonials
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Real experiences from travelers who discovered Ethiopia with
              Savanna Ethiopia Travel
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-3 py-1">
                <Heart className="w-3 h-3 mr-1" />
                30+ Successful Tours
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Star className="w-3 h-3 mr-1" />
                1+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                100% Satisfaction Rate
              </Badge>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 relative"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500 fill-current" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-primary/30" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.destination}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      "{testimonial.content}"
                    </p>

                    <div className="pt-3 border-t">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.experience}
                      </Badge>
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
              Ready to Create Your Own Amazing Story?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join the growing family of satisfied travelers who have discovered
              Ethiopia with us
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
                <Link to="/feedback">
                  <Heart className="mr-2 h-5 w-5" />
                  Share Your Experience
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
