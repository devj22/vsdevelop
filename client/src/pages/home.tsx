import { Button } from "@/components/ui/button";
import { Download, MapPin, Phone, Mail, Building2 } from "lucide-react";

import exterior1 from "@assets/stock_images/luxury_modern_house__3c8c9d63.jpg";
import exterior2 from "@assets/stock_images/luxury_modern_house__dfeddadb.jpg";
import livingRoom from "@assets/stock_images/modern_house_interio_daa8052b.jpg";
import kitchen from "@assets/stock_images/luxury_kitchen_inter_53bf5c99.jpg";
import backyard from "@assets/stock_images/beautiful_backyard_p_5092cb0c.jpg";

const propertyImages = [
  { src: exterior1, alt: "Stunning modern home exterior with contemporary architecture", label: "Exterior View" },
  { src: exterior2, alt: "Beautiful house facade with elegant landscaping", label: "Front Entrance" },
  { src: livingRoom, alt: "Spacious living room with natural lighting", label: "Living Space" },
  { src: kitchen, alt: "Modern luxury kitchen with premium finishes", label: "Gourmet Kitchen" },
  { src: backyard, alt: "Relaxing backyard patio and outdoor living area", label: "Outdoor Living" },
];

export default function Home() {
  const handleDownload = () => {
    const brochureContent = `
PREMIER PROPERTIES
Luxury Real Estate Brochure
================================

DISCOVER YOUR DREAM PROPERTY

Thank you for your interest in Premier Properties. 
We specialize in finding exceptional homes for discerning buyers.

PROPERTY HIGHLIGHTS:
- Stunning modern architecture
- Premium finishes throughout  
- Spacious living areas with natural light
- Gourmet kitchen with high-end appliances
- Beautiful outdoor living spaces
- Prime location in Beverly Hills

CONTACT US:
123 Luxury Avenue, Suite 500
Beverly Hills, CA 90210
Phone: (310) 555-1234
Email: info@premierproperties.com

© ${new Date().getFullYear()} Premier Properties. All rights reserved.
    `.trim();

    const blob = new Blob([brochureContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "premier-properties-brochure.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-7 w-7 text-primary" />
              <span className="font-serif text-xl font-semibold tracking-tight" data-testid="text-brand">
                Premier Properties
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#gallery" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-gallery">
                Gallery
              </a>
              <a href="#download" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-download">
                Brochure
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" data-testid="text-hero-title">
            Discover Your Dream Property
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-subtitle">
            Experience luxury living at its finest. Browse our exclusive collection of premium properties designed for those who appreciate the extraordinary.
          </p>
        </div>
      </section>

      <section id="gallery" className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {propertyImages.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                data-testid={`card-image-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white font-medium text-sm" data-testid={`text-image-label-${index}`}>
                    {image.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyImages.slice(2).map((image, index) => (
              <div
                key={index + 2}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                data-testid={`card-image-${index + 2}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white font-medium text-sm" data-testid={`text-image-label-${index + 2}`}>
                    {image.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-4" data-testid="text-cta-title">
            Ready to Explore?
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-subtitle">
            Download our comprehensive property brochure and discover all the details about this exceptional residence.
          </p>
          <Button
            size="lg"
            onClick={handleDownload}
            className="px-8 py-6 text-lg font-semibold"
            data-testid="button-download"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Now
          </Button>
        </div>
      </section>

      <footer id="contact" className="border-t bg-muted/30 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="font-serif text-xl font-semibold" data-testid="text-footer-brand">
                  Premier Properties
                </span>
              </div>
              <p className="text-muted-foreground max-w-md" data-testid="text-footer-tagline">
                Your trusted partner in finding exceptional homes. We specialize in luxury real estate and are committed to helping you discover the perfect property.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4" data-testid="text-footer-address-heading">
                Visit Us
              </h3>
              <address className="not-italic space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div data-testid="text-footer-address">
                    <p>123 Luxury Avenue, Suite 500</p>
                    <p>Beverly Hills, CA 90210</p>
                    <p>United States</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="tel:+13105551234"
                    className="hover:text-primary transition-colors"
                    data-testid="link-phone"
                  >
                    (310) 555-1234
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="mailto:info@premierproperties.com"
                    className="hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    info@premierproperties.com
                  </a>
                </div>
              </address>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              &copy; {new Date().getFullYear()} Premier Properties. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
