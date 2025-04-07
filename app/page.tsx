import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex gap-6 justify-center lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to Amen Academy</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Nurturing minds, building character, and preparing students for a successful future. Join our community
                of excellence today.
              </p>
              <div className="flex flex-row justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/register">Register Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            {/* <div className="mx-auto lg:ml-auto">
              <img
                alt="Amen Academy Students"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Amen Academy?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                We provide a nurturing environment where students can thrive academically, socially, and emotionally.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="border-0 shadow-sm transition-all hover:shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Academic Excellence</h3>
                <p className="text-muted-foreground">
                  Our rigorous curriculum challenges students to reach their full potential.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm transition-all hover:shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Supportive Community</h3>
                <p className="text-muted-foreground">
                  We foster a close-knit community where every student feels valued and supported.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm transition-all hover:shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Future-Ready Skills</h3>
                <p className="text-muted-foreground">
                  We prepare students with the skills and knowledge needed for success in college and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Join Our Community?</h2>
              <p className="max-w-[600px] md:text-xl">
                Registration for the upcoming academic year is now open. Secure your spot today!
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="/register" className="gap-1">
                Register Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

