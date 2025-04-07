"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Amen Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
            News & Events
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Button asChild variant="default">
            <Link href="/register">Register</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 space-y-4">
          <Link
            href="/"
            className="block text-sm font-medium transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-sm font-medium transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/news"
            className="block text-sm font-medium transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            News & Events
          </Link>
          <Link
            href="/contact"
            className="block text-sm font-medium transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Button asChild variant="default" className="w-full" onClick={toggleMenu}>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      )}
    </header>
  )
}

