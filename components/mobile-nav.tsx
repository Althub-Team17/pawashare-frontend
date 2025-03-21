"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gradient-to-r from-sky-200 to-emerald-200 p-4 shadow-lg z-50">
          <nav className="flex flex-col space-y-4">
            <Link href="#about" className="text-sm font-medium hover:text-emerald-700" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-emerald-700"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#features-detail"
              className="text-sm font-medium hover:text-emerald-700"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-emerald-700"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-emerald-700" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-emerald-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-emerald-300">
              <Button variant="ghost" className="justify-start">
                Login
              </Button>
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">Sign up</Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

