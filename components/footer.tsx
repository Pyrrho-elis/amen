import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Amen Academy</h3>
            <p className="text-sm text-muted-foreground">Excellence in Education since 2009</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-sm text-muted-foreground hover:text-primary">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-sm text-muted-foreground hover:text-primary">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Dukem, Ethiopia</li>
              <li className="text-sm text-muted-foreground">info@amenacademy.edu</li>
              <li className="text-sm text-muted-foreground">(+251) 9130-75806</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold">Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 3:00 PM</li>
              <li className="text-sm text-muted-foreground">Saturday: 9:00 AM - 12:00 PM (Admin Office)</li>
              <li className="text-sm text-muted-foreground">Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amen Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

