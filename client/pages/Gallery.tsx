import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ImageUploadSlot from "@/components/ImageUploadSlot";
import { useEditableImages } from "@/hooks/use-editable-images";
import { Camera, MapPin, Calendar, Users, Edit, Save, RotateCcw } from "lucide-react";

export default function Gallery() {
  // Setup default images for gallery - memoized to prevent infinite loops
  const defaultImages = useMemo(() => Object.fromEntries(
    Array.from({ length: 20 }, (_, index) => [
      `gallery-${index}`,
      {
        url: `https://images.unsplash.com/photo-${1500000000000 + index * 1000000}?w=400&h=300&fit=crop`,
        alt: `Adventure Photo ${index + 1}`,
        title: `Adventure Title ${index + 1}`,
        description: "Share your adventure story and memories here...",
      }
    ])
  ), []);

  const {
    images,
    isEditMode,
    updateImage,
    getImage,
    resetImage,
    toggleEditMode,
    resetAllImages,
  } = useEditableImages({
    storageKey: 'gallery-images',
    defaultImages,
  });

  const [galleryMetadata, setGalleryMetadata] = useState<Record<string, {
    title: string;
    location: string;
    travelers: string;
    date: string;
    description: string;
  }>>({});

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/10 py-16 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Camera className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Travel Gallery
              </h1>
              <Button
                variant={isEditMode ? "destructive" : "outline"}
                size="sm"
                onClick={toggleEditMode}
                className="ml-4"
              >
                {isEditMode ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Gallery
                  </>
                )}
              </Button>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {isEditMode
                ? "📸 Edit mode active - Upload your own photos and edit details"
                : "Ethiopian adventures captured in moments"
              }
            </p>
            {isEditMode && (
              <div className="flex gap-2 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetAllImages}
                  className="text-orange-600 border-orange-300"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset All Images
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Object.keys(defaultImages).map((imageKey, index) => {
                const currentImage = getImage(imageKey);
                const metadata = galleryMetadata[imageKey] || {
                  title: `Adventure Title ${index + 1}`,
                  location: '',
                  travelers: '',
                  date: '',
                  description: 'Share your adventure story and memories here...'
                };

                const updateMetadata = (field: string, value: string) => {
                  setGalleryMetadata(prev => ({
                    ...prev,
                    [imageKey]: {
                      ...metadata,
                      [field]: value
                    }
                  }));
                };

                return (
                  <Card
                    key={imageKey}
                    className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-400/30"
                  >
                    <div className="relative">
                      {/* Image Slot */}
                      <div className="relative h-64 bg-gradient-to-br from-muted/30 to-orange-100/20">
                        {isEditMode ? (
                          <div className="relative">
                            <ImageUploadSlot
                              value={currentImage?.url}
                              onChange={(url) => updateImage(imageKey, {
                                url,
                                alt: `Adventure Photo ${index + 1}`,
                                title: metadata.title
                              })}
                              alt={`Adventure Photo ${index + 1}`}
                              className="h-64 rounded-t-lg"
                              heightClass="h-64"
                              label={`Upload photo ${index + 1}`}
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => resetImage(imageKey)}
                              className="absolute top-2 right-2 bg-white/90"
                            >
                              <RotateCcw className="h-3 w-3" />
                            </Button>
                          </div>
                        ) : (
                          <>
                            <img
                              src={currentImage?.url || defaultImages[imageKey].url}
                              alt={currentImage?.alt || `Adventure Photo ${index + 1}`}
                              className="w-full h-64 object-cover rounded-t-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          </>
                        )}

                        {/* Photo Info Overlay - only show in non-edit mode or when image exists */}
                        {(!isEditMode || currentImage?.url) && (
                          <div className="absolute bottom-3 left-3 right-3">
                            <div className="bg-white/95 backdrop-blur rounded-lg p-3">
                              <input
                                type="text"
                                value={metadata.title}
                                onChange={(e) => updateMetadata('title', e.target.value)}
                                placeholder={`Adventure Title ${index + 1}`}
                                className="w-full bg-transparent border-b border-orange-200 text-gray-800 placeholder-gray-500 text-sm font-semibold mb-2 pb-1 focus:outline-none focus:border-orange-400"
                              />
                              <div className="flex items-center gap-2 text-xs">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-orange-500" />
                                  <input
                                    type="text"
                                    value={metadata.location}
                                    onChange={(e) => updateMetadata('location', e.target.value)}
                                    placeholder="Location"
                                    className="bg-transparent border-b border-orange-200 text-gray-600 placeholder-gray-400 text-xs w-20 focus:outline-none focus:border-orange-400"
                                  />
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="w-3 h-3 text-orange-500" />
                                  <input
                                    type="text"
                                    value={metadata.travelers}
                                    onChange={(e) => updateMetadata('travelers', e.target.value)}
                                    placeholder="Travelers"
                                    className="bg-transparent border-b border-orange-200 text-gray-600 placeholder-gray-400 text-xs w-16 focus:outline-none focus:border-orange-400"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-4 bg-gradient-to-r from-background to-orange-50/30">
                        <textarea
                          value={metadata.description}
                          onChange={(e) => updateMetadata('description', e.target.value)}
                          placeholder="Share your adventure story and memories here..."
                          className="w-full text-sm text-muted-foreground mb-3 bg-transparent border border-orange-200 rounded p-2 resize-none focus:border-orange-400 focus:outline-none"
                          rows={3}
                        />
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-orange-500" />
                            <input
                              type="date"
                              value={metadata.date}
                              onChange={(e) => updateMetadata('date', e.target.value)}
                              className="bg-transparent border-b border-orange-200 text-muted-foreground text-xs focus:outline-none focus:border-orange-400"
                            />
                          </span>
                          <Badge
                            variant="outline"
                            className="text-xs border-orange-300 text-orange-700"
                          >
                            Photo {index + 1}
                          </Badge>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Instructions */}
            <div className="mt-12 text-center">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 max-w-3xl mx-auto">
                <Camera className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  How to Add Your Photos
                </h3>
                <div className="text-sm text-orange-700 space-y-2">
                  <p className="mb-3">
                    This gallery showcases our Ethiopian adventure experiences. Images are managed during development.
                  </p>
                  <div className="bg-white/50 rounded-lg p-3 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <Camera className="w-4 h-4 text-orange-600" />
                      <span className="font-semibold">Gallery Features</span>
                    </div>
                    <p className="text-xs">
                      Each image represents authentic Ethiopian travel experiences and destinations available through our tours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-primary via-orange-500 to-orange-600 text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Create Your Own Adventure Story!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Book your Ethiopian journey and fill these gallery slots with
              unforgettable memories
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
                <Link to="/packages/nature-adventure">
                  <Camera className="mr-2 h-5 w-5" />
                  Explore Packages
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
