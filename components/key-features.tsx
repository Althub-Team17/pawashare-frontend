import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function KeyFeatures() {
  return (
    <section id="features" className="py-16 bg-emerald-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-none shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-emerald-500">Solar Energy Trading</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Seamlessly connect those who can supply solar energy with those who need it, creating a sustainable
                energy ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-emerald-500">Real-time Monitoring</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Track energy production and consumption in real-time with our intuitive dashboard that helps you
                visualize your impact.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-emerald-500">Smart Energy Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Optimize your energy usage with AI-powered recommendations that help you save money while reducing your
                carbon footprint.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

