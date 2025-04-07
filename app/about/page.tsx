import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24 space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Amen Academy</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Our mission, vision, and commitment to educational excellence
        </p>
      </div>

      <div className="flex justify-center gap-8 items-center">
        {/* <div>
          <img
            alt="Amen Academy Campus"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            height="400"
            src="/placeholder.svg?height=400&width=600"
            width="600"
          />
        </div> */}
        <div className="space-y-4 w-1/2">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2009, Amen Academy was established with a vision to provide quality education that nurtures both
            academic excellence and character development.
          </p>
          <p className="text-muted-foreground">
            Our founders believed that education should prepare students not just for exams, but for life. This
            philosophy continues to guide our approach to teaching and learning today.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Our Mission & Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Mission</h3>
              <p className="text-muted-foreground">
                To provide a nurturing and challenging educational environment that empowers students to become lifelong
                learners and responsible global citizens.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Vision</h3>
              <p className="text-muted-foreground">
                To be recognized as a center of educational excellence that inspires students to discover their
                potential and make positive contributions to society.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Values</h3>
              <p className="text-muted-foreground">
                Excellence, Integrity, Respect, Responsibility, and Community guide everything we do at Amen Academy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

