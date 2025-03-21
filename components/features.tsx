import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  return (
    <section id="features-detail" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Easy Energy Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our platform makes it simple to share excess solar energy with those who need it, creating a
                community-powered energy ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Detailed Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Track your energy production, consumption, savings, and environmental impact with our comprehensive
                analytics dashboard.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Flexible Payment Options</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Choose from various payment methods and billing cycles that suit your preferences and financial
                situation.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Predictive AI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our AI algorithms predict energy production and consumption patterns to optimize your energy usage and
                maximize savings.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Carbon Footprint Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Monitor your reduced carbon emissions and see the positive environmental impact you're making in
                real-time.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Community Marketplace</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Connect with other environmentally conscious individuals and businesses in our community marketplace for
                solar equipment and services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

