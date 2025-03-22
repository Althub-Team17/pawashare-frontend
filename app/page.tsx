import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { KeyFeatures } from "@/components/key-features"
import { AboutUs } from "@/components/about-us"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-sky-200 to-emerald-200">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl">PawaShare</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-medium hover:text-emerald-700">
              About Us
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-700">
              How It Works
            </Link>
            <Link href="#features-detail" className="text-sm font-medium hover:text-emerald-700">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-emerald-700">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-emerald-700">
              FAQ
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-emerald-700">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">Sign up</Button>
            </Link>
          </div>
          <MobileNav />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lg8Z2A0yUPJliLzhBtwwvxLHVxV7Rz.png"
            alt="Aerial view of solar panel farm with sun shining above"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 container flex flex-col items-start justify-center min-h-[600px] py-20 text-white">
          <div className="bg-black/40 p-8 rounded-lg backdrop-blur-sm max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold">Share Solar Energy with Your Community</h1>
            <p className="mt-4 text-lg md:text-xl">
              Connect with neighbors, reduce your carbon footprint, and save money by sharing excess solar energy
              through our innovative platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                  Get Started
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <KeyFeatures />

      {/* About Us Section */}
      <AboutUs />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Features */}
      <Features />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <Faq />

      {/* Contact */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PawaShare</h3>
              <p className="text-gray-400">Connecting communities through sustainable energy solutions.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PawaShare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
