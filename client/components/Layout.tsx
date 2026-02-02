import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Menu,
  Mountain,
  Home,
  Info,
  Camera,
  Star,
  Gift,
  MapPin,
  Shield,
  Leaf,
  Phone,
  DollarSign,
  Calendar,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Info },
  { label: "Testimonials", href: "/testimonials", icon: Star },
  { label: "Special Offers", href: "/offers", icon: Gift },
  { label: "Travel Tips", href: "/travel-tips", icon: MapPin },
  { label: "Safety Info", href: "/safety", icon: Shield },
  { label: "Sustainability", href: "/sustainability", icon: Leaf },
  { label: "Emergency Contact", href: "/emergency", icon: Phone },
  { label: "Payment Options", href: "/payment", icon: DollarSign },
  { label: "Seasonal Events", href: "/events", icon: Calendar },
  { label: "Customer Feedback", href: "/feedback", icon: MessageSquare },
];

const faqItems = [
  {
    question: "What should I bring for hiking tours?",
    answer:
      "Essential items include comfortable hiking boots, weather-appropriate clothing, sunscreen, water bottles, and a first-aid kit. We provide detailed packing lists for each specific trip.",
  },
  {
    question: "What is the best time to visit Ethiopia?",
    answer:
      "The dry season (October to March) is generally the best time for most activities. However, different regions have optimal visiting times depending on your planned activities.",
  },
  {
    question: "Do you provide travel insurance?",
    answer:
      "We can help arrange travel insurance through our partners. We strongly recommend comprehensive coverage for all our adventure tours.",
  },
  {
    question: "What languages do your guides speak?",
    answer:
      "Our guides are fluent in English, Amharic, and several local languages depending on the region. We can arrange guides for other languages upon request.",
  },
];

function SidebarContent() {
  const location = useLocation();
  const [faqOpen, setFaqOpen] = useState(false);
  const [openFaqItems, setOpenFaqItems] = useState<number[]>([]);
  const [logoUrl, setLogoUrl] = useState<string | undefined>(undefined);

  const toggleFaqItem = (index: number) => {
    setOpenFaqItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="h-full w-full lg:w-64 bg-gradient-to-b from-background via-muted/20 to-background border-r border-border flex flex-col">
      <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
        <div
          className="text-xl font-bold"
          style={{
            color: "#d97607",
          }}
        >
          Savanna
        </div>
        <Link to="/" className="flex items-center gap-2" />
        <p className="text-sm text-muted-foreground mt-1 font-medium">
          🇪🇹 Ethiopian Adventures
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <Collapsible open={faqOpen} onOpenChange={setFaqOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md">
              <span className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                FAQ
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${faqOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 mt-2">
              {faqItems.map((item, index) => (
                <Collapsible
                  key={index}
                  open={openFaqItems.includes(index)}
                  onOpenChange={() => toggleFaqItem(index)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-xs text-left text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md">
                    <span className="line-clamp-2">{item.question}</span>
                    <ChevronDown
                      className={`h-3 w-3 flex-shrink-0 ml-2 transition-transform ${openFaqItems.includes(index) ? "rotate-180" : ""}`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 py-2">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </nav>
    </div>
  );
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <SidebarContent />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center gap-2">
            <span
              className="text-lg font-bold"
              style={{
                color: "#f17c33",
                fontWeight: "700",
              }}
            >
              Savanna
            </span>
          </Link>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="p-0 w-80 bg-gradient-to-b from-background to-muted/30"
            >
              <VisuallyHidden.Root>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden.Root>
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main Content */}
      <main
        className="flex-1 overflow-y-auto lg:ml-0 pt-16 lg:pt-0"
        style={{ height: "5000px" }}
      >
        {children}
      </main>
    </div>
  );
}
