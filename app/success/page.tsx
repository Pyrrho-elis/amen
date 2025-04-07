"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "contact"

  const titles = {
    contact: "Message Sent Successfully!",
    registration: "Registration Submitted Successfully!",
  }

  const descriptions = {
    contact: "Thank you for reaching out to us. We have received your message and will get back to you shortly.",
    registration:
      "Thank you for submitting your registration to Amen Academy. We have received your application and will review it promptly.",
  }

  const nextSteps = {
    contact:
      "Our team typically responds within 1-2 business days. If your matter is urgent, please call our office directly.",
    registration:
      "Our admissions team will review your application and contact you regarding the next steps in the enrollment process.",
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24 flex items-center justify-center min-h-[calc(100vh-5rem-1px)]">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">{titles[type as keyof typeof titles]}</CardTitle>
          <CardDescription>{descriptions[type as keyof typeof descriptions]}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">{nextSteps[type as keyof typeof nextSteps]}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

