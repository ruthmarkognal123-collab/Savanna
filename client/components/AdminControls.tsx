import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Shield, Eye, EyeOff, RotateCcw, Save } from 'lucide-react';

interface AdminControlsProps {
  isAdmin?: boolean;
  onToggleAdmin?: () => void;
}

export default function AdminControls({ 
  isAdmin = false, 
  onToggleAdmin 
}: AdminControlsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const clearAllData = () => {
    const confirmed = window.confirm(
      'Are you sure you want to clear all uploaded images? This action cannot be undone.'
    );
    
    if (confirmed) {
      // Clear all localStorage data related to images
      const keysToRemove = [
        'about-page-images',
        'homepage-images', 
        'gallery-images'
      ];
      
      keysToRemove.forEach(key => {
        localStorage.removeItem(key);
      });
      
      // Reload the page to reset all images
      window.location.reload();
    }
  };

  const exportData = () => {
    try {
      const data = {
        aboutImages: localStorage.getItem('about-page-images'),
        homepageImages: localStorage.getItem('homepage-images'),
        galleryImages: localStorage.getItem('gallery-images'),
        exportDate: new Date().toISOString(),
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json'
      });
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `savanna-images-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to export data:', error);
      alert('Failed to export data. Please try again.');
    }
  };

  const importData = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          
          if (data.aboutImages) {
            localStorage.setItem('about-page-images', data.aboutImages);
          }
          if (data.homepageImages) {
            localStorage.setItem('homepage-images', data.homepageImages);
          }
          if (data.galleryImages) {
            localStorage.setItem('gallery-images', data.galleryImages);
          }
          
          alert('Data imported successfully! The page will reload to apply changes.');
          window.location.reload();
        } catch (error) {
          console.error('Failed to import data:', error);
          alert('Failed to import data. Please check the file format.');
        }
      };
      reader.readAsText(file);
    };
    
    input.click();
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={isAdmin ? "destructive" : "outline"}
            size="sm"
            className="shadow-lg"
          >
            <Settings className="h-4 w-4 mr-2" />
            Admin
            {isAdmin && <Badge variant="secondary" className="ml-2">ON</Badge>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="end">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Admin Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Edit Mode</span>
                <Button
                  variant={isAdmin ? "destructive" : "outline"}
                  size="sm"
                  onClick={onToggleAdmin}
                >
                  {isAdmin ? (
                    <>
                      <EyeOff className="h-3 w-3 mr-2" />
                      Disable
                    </>
                  ) : (
                    <>
                      <Eye className="h-3 w-3 mr-2" />
                      Enable
                    </>
                  )}
                </Button>
              </div>
              
              {isAdmin && (
                <>
                  <div className="border-t pt-4 space-y-3">
                    <p className="text-xs text-muted-foreground">
                      Global Image Management
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={exportData}
                        className="text-xs"
                      >
                        <Save className="h-3 w-3 mr-1" />
                        Export
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={importData}
                        className="text-xs"
                      >
                        <Settings className="h-3 w-3 mr-1" />
                        Import
                      </Button>
                    </div>
                    
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={clearAllData}
                      className="w-full text-xs"
                    >
                      <RotateCcw className="h-3 w-3 mr-2" />
                      Reset All Images
                    </Button>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      Active Features:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">
                        About Page
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Destinations
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Gallery
                      </Badge>
                    </div>
                  </div>
                </>
              )}
              
              <div className="border-t pt-4">
                <p className="text-xs text-muted-foreground">
                  {isAdmin
                    ? "Image editing is enabled across all pages. Click on images to upload new ones."
                    : "Enable admin mode to edit images and access management tools."
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
