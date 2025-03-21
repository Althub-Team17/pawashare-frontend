export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-emerald-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-5xl font-bold text-emerald-500 mb-4">1</div>
            <h3 className="text-xl font-bold mb-4">Register & Assess</h3>
            <p className="text-gray-700">
              Create your account and tell us about your energy needs or generation capacity. Our system will analyze
              your location and solar potential to create the right match for you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-5xl font-bold text-emerald-500 mb-4">2</div>
            <h3 className="text-xl font-bold mb-4">Select Your Plan</h3>
            <p className="text-gray-700">
              Choose from our flexible plans that suit your needs. Whether you're looking to sell excess energy or
              purchase clean power, we have options that maximize your savings and environmental impact.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-5xl font-bold text-emerald-500 mb-4">3</div>
            <h3 className="text-xl font-bold mb-4">Connect & Save</h3>
            <p className="text-gray-700">
              Once matched, our platform handles all the technical details. Start sharing or receiving clean energy
              immediately and track your savings and environmental impact through our intuitive dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

