"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon } from "lucide-react"

export default function SignupPage() {
  const [userType, setUserType] = useState<"lender" | "borrower">("lender")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { userType, ...formData })
    // This would be connected to your backend authentication system
    alert("Account creation functionality will be implemented by the backend team")
  }

  return (
    <div className="min-h-screen bg-emerald-50 flex">
      {/* Left panel with image */}
      <div className="hidden md:flex md:w-1/2 relative">
        <div className="absolute top-6 left-6 z-10">
          <h1 className="text-3xl font-bold text-black">Pawashare</h1>
        </div>
        <div className="absolute top-6 right-6 z-10">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">Back to website</Button>
          </Link>
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ei7ooBlz9NQV35IQB8O03D6wqpPcqS.png"
          alt="Solar panels"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right panel with form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-4">Create an account</h1>

          <div className="flex items-center mb-8">
            <p className="text-gray-700">Already have an account?</p>
            <Link href="/login" className="ml-2 font-bold text-black hover:underline">
              Login
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            {/* User type selector */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <Button
                type="button"
                className={`rounded-lg ${
                  userType === "lender"
                    ? "bg-emerald-300 hover:bg-emerald-400 text-black"
                    : "bg-gray-200 hover:bg-gray-300 text-black"
                }`}
                onClick={() => setUserType("lender")}
              >
                Lender
              </Button>
              <Button
                type="button"
                className={`rounded-lg ${
                  userType === "borrower"
                    ? "bg-emerald-300 hover:bg-emerald-400 text-black"
                    : "bg-gray-200 hover:bg-gray-300 text-black"
                }`}
                onClick={() => setUserType("borrower")}
              >
                Borrower
              </Button>
            </div>

            {/* Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="rounded-lg h-12"
                  required
                />
              </div>
              <div>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="rounded-lg h-12"
                  required
                />
              </div>
            </div>

            {/* Email field */}
            <div className="mb-4 relative">
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="rounded-lg h-12 pr-10"
                required
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <EyeIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Password field */}
            <div className="mb-6">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="rounded-lg h-12"
                required
              />
            </div>

            {/* Terms checkbox */}
            <div className="flex items-center mb-6">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked as boolean }))}
                className="h-6 w-6 rounded-sm border-gray-300"
              />
              <label htmlFor="terms" className="ml-2 text-sm">
                I agree to the Terms and Conditions
              </label>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-900 text-white h-12 rounded-lg mb-8"
              disabled={!formData.agreeToTerms}
            >
              Create account
            </Button>

            {/* Social login divider */}
            <div className="flex items-center mb-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">Or register with</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social login buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                className="bg-green-800 hover:bg-green-900 text-white rounded-lg flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
                Google
              </Button>
              <Button
                type="button"
                className="bg-green-800 hover:bg-green-900 text-white rounded-lg flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.101,23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085,1.848-5.978,5.858-5.978c0.401,0,0.955,0.042,1.569,0.103 c0.645,0.06,1.405,0.241,2.273,0.541v3.461c-0.575-0.043-1.051-0.043-1.43-0.043c-1.87,0-2.511,0.811-2.511,2.47v1.026h3.803 l-0.546,3.667h-3.257v7.98H9.101z" />
                </svg>
                Facebook
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

