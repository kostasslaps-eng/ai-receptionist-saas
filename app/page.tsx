import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Bot, Clock, DollarSign, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold">AI Receptionist</span>
          </div>
          <Link href="/onboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            AI Receptionist for Your Business
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Never miss a call again. Our AI receptionist handles appointments, 
            answers questions, and manages customer inquiries 24/7 - at a fraction of the cost.
          </p>
          <Link href="/onboard">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Free Setup <Zap className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Clock className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Never miss a customer call, even outside business hours</p>
            </Card>
            <Card className="p-6">
              <DollarSign className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
              <p className="text-gray-600">Save thousands compared to hiring a full-time receptionist</p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Setup</h3>
              <p className="text-gray-600">Get your AI receptionist deployed in minutes, not weeks</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> 500 calls/month</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> Basic FAQ</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> Email notifications</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> Dashboard access</li>
              </ul>
              <Link href="/onboard">
                <Button variant="outline" className="w-full">Choose Plan</Button>
              </Link>
            </Card>

            {/* Professional */}
            <Card className="p-8 border-4 border-purple-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> 2,000 calls/month</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> Advanced AI training</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> Appointment booking</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> Priority support</li>
              </ul>
              <Link href="/onboard">
                <Button className="w-full">Choose Plan</Button>
              </Link>
            </Card>

            {/* Enterprise */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-4">$199<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> Unlimited calls</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> Custom AI training</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> CRM integration</li>
                <li className="flex items-center gap-2"><Check className="text-green-600" size={20} /> Dedicated support</li>
              </ul>
              <Link href="/onboard">
                <Button variant="outline" className="w-full">Choose Plan</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Set up your AI receptionist in just 5 minutes</p>
          <Link href="/onboard">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Free Setup Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 AI Receptionist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
