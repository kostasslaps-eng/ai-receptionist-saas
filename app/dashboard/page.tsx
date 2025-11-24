
"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, CheckCircle2, Phone, Mail, Clock, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  const [businessData, setBusinessData] = useState<any>(null)
  const [receptionistStatus, setReceptionistStatus] = useState("processing")

  useEffect(() => {
    const data = localStorage.getItem("receptionistData")
    if (data) {
      setBusinessData(JSON.parse(data))
      // Simulate AI processing
      setTimeout(() => setReceptionistStatus("active"), 2000)
    }
  }, [])

  const activities = [
    { time: "2 min ago", action: "Answered call from potential client", icon: Phone },
    { time: "15 min ago", action: "Scheduled appointment for tomorrow at 2 PM", icon: Clock },
    { time: "1 hour ago", action: "Sent follow-up email to inquiry", icon: Mail },
    { time: "2 hours ago", action: "Updated FAQ responses", icon: CheckCircle2 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="h-8 w-8 text-purple-600" />
              <div>
                <h1 className="text-2xl font-bold">AI Receptionist Dashboard</h1>
                <p className="text-sm text-gray-600">{businessData?.businessName || "Loading..."}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${receptionistStatus === "active" ? "bg-green-500 animate-pulse" : "bg-yellow-500"}`} />
              <span className="text-sm font-medium">
                {receptionistStatus === "active" ? "Active" : "Processing..."}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Calls Today</p>
                    <p className="text-3xl font-bold">47</p>
                  </div>
                  <Phone className="h-10 w-10 text-purple-600 opacity-20" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Appointments</p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <Clock className="h-10 w-10 text-blue-600 opacity-20" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Satisfaction</p>
                    <p className="text-3xl font-bold">98%</p>
                  </div>
                  <TrendingUp className="h-10 w-10 text-green-600 opacity-20" />
                </div>
              </Card>
            </div>

            {/* 3-Agent System Status */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">AI Agent System Status</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <CheckCircle2 className="text-green-600" size={24} />
                  <div className="flex-1">
                    <h3 className="font-semibold">Agent 1: Data Collection</h3>
                    <p className="text-sm text-gray-600">Successfully processed business information</p>
                  </div>
                  <span className="text-xs font-medium text-green-600">COMPLETE</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <CheckCircle2 className="text-green-600" size={24} />
                  <div className="flex-1">
                    <h3 className="font-semibold">Agent 2: Prompt Generator</h3>
                    <p className="text-sm text-gray-600">Created optimized system prompt for receptionist</p>
                  </div>
                  <span className="text-xs font-medium text-green-600">COMPLETE</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <CheckCircle2 className="text-green-600" size={24} />
                  <div className="flex-1">
                    <h3 className="font-semibold">Agent 3: Testing & Validation</h3>
                    <p className="text-sm text-gray-600">Passed all stress tests - no flaws detected</p>
                  </div>
                  <span className="text-xs font-medium text-green-600">COMPLETE</span>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {activities.map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <activity.icon className="text-purple-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Edit Business Info
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Update FAQs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Settings
                </Button>
              </div>
            </Card>

            {/* Business Info */}
            {businessData && (
              <Card className="p-6">
                <h3 className="font-bold mb-4">Business Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600">Industry</p>
                    <p className="font-medium">{businessData.industry}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Hours</p>
                    <p className="font-medium">{businessData.operatingHours}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Contact</p>
                    <p className="font-medium">{businessData.phone}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
