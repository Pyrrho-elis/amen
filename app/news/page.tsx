import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NewsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24 min-h-[calc(100vh-5rem-1px)]">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">News & Events</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Stay updated with the latest happenings and upcoming events at Amen Academy.
        </p>
      </div>

      <div className="mt-12 relative overflow-hidden">
        <Card className="p-8 md:p-12 text-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Coming Soon!</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              We're currently working on bringing you the latest news and events from Amen Academy. This section is
              under construction and will be available soon.
            </p>
            <div className="pt-4">
              <Button asChild variant="outline">
                <a href="/">Return to Home</a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Fade overlay */}
        {/* <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none"
          style={{ top: "70%" }}
        ></div> */}

        {/* Blurred content to simulate "read more" effect */}
        {/* <div className="mt-8 blur-sm opacity-40">
          <div className="grid gap-6 md:grid-cols-3">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-64 rounded-lg bg-muted"></div>
              ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}

