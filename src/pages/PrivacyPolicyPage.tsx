import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Shield, Eye, Lock, Database } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-lg px-4 py-2">
              Privacy Protection
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Company Info Card */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Eye className="h-6 w-6 text-primary" />
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
                  <h4 className="font-semibold mb-2">Company Name</h4>
                  <p className="text-muted-foreground">SidPin Digital</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Legal Owner</h4>
                  <p className="text-muted-foreground">Anand Siddhartha (Proprietor)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">GSTIN</h4>
                  <p className="text-muted-foreground">05NBLPS9917M1ZG</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      Gali No. 03, Miyawali Dharmshala, Raiwala, Haridwar-Dehradun Road, 
                      Haripur Kalan, Pratitnagar, Dehradun, Uttarakhand – 249205
                    </p>
                  </div>
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
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+91 74659 29244</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">sidpinworkspace@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Policy Sections */}
          <div className="grid gap-6">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  SidPin Digital ("we", "our", or "us") values your privacy. This Privacy Policy explains 
                  how we collect, use, share, and protect your personal information when you visit our 
                  website or use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  2. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">We may collect the following types of information:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-4 text-left font-semibold">Type of Information</th>
                        <th className="border border-border p-4 text-left font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-4 font-medium">Personal Information</td>
                        <td className="border border-border p-4 text-muted-foreground">Name, email address, phone number, billing address, etc.</td>
                      </tr>
                      <tr className="bg-muted/25">
                        <td className="border border-border p-4 font-medium">Business Information</td>
                        <td className="border border-border p-4 text-muted-foreground">Company name, GST details, business address, project-related details</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4 font-medium">Technical Data</td>
                        <td className="border border-border p-4 text-muted-foreground">IP address, browser type, device information, and website usage data</td>
                      </tr>
                      <tr className="bg-muted/25">
                        <td className="border border-border p-4 font-medium">Media Content</td>
                        <td className="border border-border p-4 text-muted-foreground">Photos, videos, or branding materials shared during service execution</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>3. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">We use your data to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Deliver and manage our digital services</li>
                  <li>• Communicate with you regarding your project or inquiry</li>
                  <li>• Send invoices, updates, or promotional material</li>
                  <li>• Improve user experience and services</li>
                  <li>• Comply with legal or regulatory requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>4. Sharing of Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p className="font-medium text-foreground">We do not sell or rent your personal data.</p>
                  <p>However, we may share it with:</p>
                  <ul className="space-y-2">
                    <li>• Our trusted team members or subcontractors involved in your project</li>
                    <li>• Payment gateway providers (for processing fees/invoices)</li>
                    <li>• Legal authorities when required by law</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  5. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use industry-standard tools and precautions to protect your information from unauthorized 
                  access, loss, or misuse. Your data is stored securely and only accessible to authorized personnel.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>6. Cookies & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our website may use cookies or similar tools to track user behavior for analytics, 
                  user experience improvements, and ad targeting. You can disable cookies via your browser settings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>7. Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="space-y-2">
                    <li>• Request access to your personal data</li>
                    <li>• Request correction or deletion of your data</li>
                    <li>• Withdraw consent to marketing emails at any time</li>
                  </ul>
                  <p className="text-sm">
                    To exercise these rights, please email us at <span className="font-medium text-primary">sidpinworkspace@gmail.com</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>8. Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our website or services may include links to external platforms (like Facebook, Instagram, YouTube, etc.). 
                  We are not responsible for the privacy practices of these sites.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle>9. Changes to Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This Privacy Policy may be updated occasionally. All changes will be posted on our website, 
                  and the updated date will be mentioned.
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
                  <h3 className="font-semibold text-lg mb-2">Policy Agreement</h3>
                  <p className="text-muted-foreground mb-4">
                    By using our services or website, you agree to this Privacy Policy.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For questions or concerns, feel free to contact us at <span className="font-medium text-primary">sidpinworkspace@gmail.com</span>
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
