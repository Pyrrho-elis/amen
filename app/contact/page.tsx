import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24 space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          We're here to help. Reach out with any questions about admissions, programs, or general inquiries.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-bold">Our Location</h3>
                <p className="text-muted-foreground">Dukem City, Ethiopia</p> 
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="text-muted-foreground">Main Office: (+251) 9130-75806</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p className="text-muted-foreground">info@amenacademy.edu</p>
                <p className="text-muted-foreground">admissions@amenacademy.edu</p>
              </div>
            </CardContent>
          </Card>
          <div>
            <h3 className="text-lg font-bold mb-2">Office Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 3:00 PM</p>
            <p className="text-muted-foreground">Saturday: 9:00 AM - 12:00 PM (Admin Office)</p>
            <p className="text-muted-foreground">Sunday: Closed</p>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Send Us a Message</h2>
              <form className="space-y-4" action="/success">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

