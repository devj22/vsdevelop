import { Button } from "@/components/ui/button";
import { Download, MapPin, Phone, Mail, Building2 } from "lucide-react";

import royale22Main from "@assets/royale22-main.png";
import apartmentAmenities from "@assets/apartment-amenities.png";
import externalAmenities from "@assets/external-amenities.png";
import floorPlan from "@assets/floor-plan.png";

const propertyImages = [
  { src: royale22Main, alt: "Royale 22 - Where Wishes Come True - Stunning tower at night", label: "Royale 22" },
  { src: apartmentAmenities, alt: "Apartment amenities and building features", label: "Apartment Amenities" },
  { src: externalAmenities, alt: "External amenities including lobby and parking", label: "External Amenities" },
  { src: floorPlan, alt: "Floor plan layouts for 1 BHK apartments", label: "Floor Plans" },
];

export default function Home() {
  const handleDownload = () => {
    const brochureContent = `
VS DEVELOPERS
Royale 22 - Where Wishes Come True
================================

DISCOVER YOUR DREAM HOME

Thank you for your interest in VS Developers. 
We specialize in creating exceptional living spaces.

ROYALE 22 HIGHLIGHTS:
- Premium 1 BHK apartments (435-437 sq.ft. RERA carpet)
- Vitrified flooring in all rooms
- Granite platform kitchen with stainless steel sink
- Full height glazed tiles in bathrooms
- UPVC/Aluminium sliding windows
- Decorative entrance lobby
- Two high speed lifts
- Mechanical car parking
- CCTV surveillance in common areas
- Concealed copper wiring
- Water proofing treatment on external facade

CONTACT US:
VS Developers
Phone: Contact for details
Email: info@vsdevelopers.com

© ${new Date().getFullYear()} VS Developers. All rights reserved.
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
                VS Developers
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {propertyImages.map((image, index) => (
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
                  VS Developers
                </span>
              </div>
              <p className="text-muted-foreground max-w-md" data-testid="text-footer-tagline">
                Your trusted partner in premium real estate development. We specialize in creating exceptional living spaces and are committed to helping you discover your perfect home.
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
                    <p>VS DEVELOPERS</p>
                    <p>A-503, Sterling Court</p>
                    <p>Maheshwari Nagar, Andheri East</p>
                    <p>Mumbai – 400093</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="tel:9930801525"
                    className="hover:text-primary transition-colors"
                    data-testid="link-phone"
                  >
                    9930801525
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="mailto:info@vsdevelopers.com"
                    className="hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    info@vsdevelopers.com
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <Download className="h-4 w-4 text-muted-foreground shrink-0" />
                  <a
                    href="https://drive.google.com/file/d/1Uwxr2T_Ld5xNb5dWQbLVXIzfXuc9xyg4/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-download-drive"
                  >
                    Download Now
                  </a>
                </div>
              </address>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              &copy; {new Date().getFullYear()} VS Developers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
