import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Building, FileText, Shield } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <FileText className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-lg px-4 py-2">
              Legal Document
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Company Info Card */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Building className="h-6 w-6 text-primary" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Effective Date</h4>
                  <p className="text-muted-foreground">17 July 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Legal Name</h4>
                  <p className="text-muted-foreground">Anand Siddhartha</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Trade Name</h4>
                  <p className="text-muted-foreground">SidPin Digital</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">GSTIN</h4>
                  <p className="text-muted-foreground">05NBLPS9917M1ZG</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Type</h4>
                  <p className="text-muted-foreground">Proprietorship</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Services</h4>
                  <p className="text-muted-foreground">Digital Marketing, Web Development, Branding, Photography & Videography</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Mail className="h-6 w-6 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    Gali No. 03, Miyawali Dharmshala, Raiwala, Haridwar-Dehradun Road, 
                    Haripur Kalan, Pratitnagar, Dehradun, Uttarakhand – 249205
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-muted-foreground">+91 74659 29244</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">sidpinworkspace@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="grid gap-6">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to SidPin Digital, a proprietorship firm registered under Indian GST law. 
                  These Terms and Conditions govern your access to and use of our services, platforms, 
                  and website. By availing our services, you agree to be legally bound by the terms stated below.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>3. Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">SidPin Digital offers but is not limited to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Digital Marketing (SEO, Social Media, Advertising)</li>
                  <li>• Website Development & Design</li>
                  <li>• Content Creation (Photography, Videography, Reels)</li>
                  <li>• Graphic Design</li>
                  <li>• Google Business Optimization</li>
                  <li>• Influencer & UGC Campaigns</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Service agreements will be project-specific and may require formal documentation, 
                  invoices, or contracts depending on the scope.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>4. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• All services must be confirmed in writing before commencement.</li>
                  <li>• A 50% advance payment is required before the start of any project, unless otherwise agreed in writing.</li>
                  <li>• Remaining balance must be paid upon delivery or milestone completion as per the agreed quotation.</li>
                  <li>• Delays in payment may result in service suspension and/or legal action.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>5. Cancellation & Refund Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• If a project is cancelled within 15 days of signing, 50% of the advance will be refunded.</li>
                  <li>• No refunds will be issued after 30 days of project initiation or for completed milestones.</li>
                  <li>• For digital services like ads, reels, and websites — once development or execution begins, refunds are not applicable.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>6. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    All content, including but not limited to graphics, videos, photographs, and website code 
                    created by SidPin Digital, shall remain the intellectual property of SidPin Digital unless 
                    otherwise transferred under a written agreement.
                  </p>
                  <p>
                    Client-provided content must be licensed or owned by the client. SidPin Digital is not 
                    responsible for copyright violations on third-party assets provided by the client.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>7. Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Both parties agree not to disclose any confidential information shared during the course 
                  of a project without prior written consent. This includes business plans, pricing, 
                  campaign strategies, and login credentials.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">SidPin Digital shall not be liable for:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Any indirect or consequential loss.</li>
                  <li>• Any damages arising due to third-party platforms (e.g., social media restrictions, ad account bans).</li>
                  <li>• Delays due to force majeure or client-side inaction.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>9. Jurisdiction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All disputes arising from services rendered by SidPin Digital shall fall under the 
                  jurisdiction of courts located in Dehradun, Uttarakhand, India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>10. Modifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SidPin Digital reserves the right to modify these Terms and Conditions at any time. 
                  Clients will be notified of major updates via email or website.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8" />

          {/* Agreement Notice */}
          <Card className="border-primary bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Agreement Acknowledgment</h3>
                  <p className="text-muted-foreground">
                    By engaging with SidPin Digital, you acknowledge that you have read, understood, 
                    and agreed to the above Terms and Conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}