
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Bot, CheckCircle2 } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    operatingHours: "",
    services: "",
    bookingRequirements: "",
    faqs: "",
    policies: "",
    phone: "",
    email: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Save to localStorage
      localStorage.setItem("receptionistData", JSON.stringify(formData))
      router.push("/dashboard")
    }
  }

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Bot className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">Setup Your AI Receptionist</h1>
            <p className="text-gray-600">Step {step} of 3</p>
          </div>

          {/* Progress Bar */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${
                  i <= step ? "bg-purple-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold mb-6">Business Information</h2>
                  <div>
                    <Label htmlFor="businessName">Business Name*</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={e => updateField("businessName", e.target.value)}
                      placeholder="Enter your business name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry*</Label>
                    <Input
                      id="industry"
                      value={formData.industry}
                      onChange={e => updateField("industry", e.target.value)}
                      placeholder="e.g., Healthcare, Legal, Real Estate"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="operatingHours">Operating Hours*</Label>
                    <Input
                      id="operatingHours"
                      value={formData.operatingHours}
                      onChange={e => updateField("operatingHours", e.target.value)}
                      placeholder="e.g., Mon-Fri 9AM-5PM"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="services">Services Offered*</Label>
                    <Textarea
                      id="services"
                      value={formData.services}
                      onChange={e => updateField("services", e.target.value)}
                      placeholder="List your main services (one per line)"
                      rows={4}
                      required
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-bold mb-6">Booking & FAQs</h2>
                  <div>
                    <Label htmlFor="bookingRequirements">Appointment Booking Requirements</Label>
                    <Textarea
                      id="bookingRequirements"
                      value={formData.bookingRequirements}
                      onChange={e => updateField("bookingRequirements", e.target.value)}
                      placeholder="Describe your booking process and requirements"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="faqs">Common Questions & Answers*</Label>
                    <Textarea
                      id="faqs"
                      value={formData.faqs}
                      onChange={e => updateField("faqs", e.target.value)}
                      placeholder="Q: What are your hours?\nA: We're open Mon-Fri 9-5\n\nQ: Do you accept insurance?\nA: Yes, we accept most major insurance"
                      rows={6}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="policies">Company Policies</Label>
                    <Textarea
                      id="policies"
                      value={formData.policies}
                      onChange={e => updateField("policies", e.target.value)}
                      placeholder="Cancellation policy, payment terms, etc."
                      rows={4}
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-2xl font-bold mb-6">Contact Preferences</h2>
                  <div>
                    <Label htmlFor="phone">Business Phone Number*</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={e => updateField("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Business Email*</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={e => updateField("email", e.target.value)}
                      placeholder="contact@business.com"
                      required
                    />
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-green-900 mb-1">Almost there!</h3>
                        <p className="text-green-800 text-sm">
                          Our 3-agent AI system will process your information, generate a custom system prompt, 
                          and test your receptionist for any issues.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-4 pt-4">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}
                <Button type="submit" className="flex-1">
                  {step === 3 ? "Deploy Receptionist" : "Continue"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
