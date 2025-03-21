export function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              At Pawashare, we believe that clean energy is a human right, born from the need to empower communities
              worldwide with sustainable power solutions. Our journey began with a simple idea: connect those who have
              excess solar energy with those who need it.
            </p>
            <p className="text-gray-700 mb-4">
              Founded by a team of renewable energy enthusiasts and tech innovators, we're on a mission to democratize
              access to clean energy and create a more sustainable future for all.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">Our Values</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-emerald-500">✓</span>
                <span>Sustainability: Putting the planet first in all we do</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-500">✓</span>
                <span>Accessibility: Making clean energy available to everyone</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-500">✓</span>
                <span>Innovation: Constantly improving our technology and approach</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-500">✓</span>
                <span>Community: Building a network of like-minded individuals</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600">We&apos;re committed to making solar energy accessible to everyone.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
            <div className="bg-emerald-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3 text-emerald-700">Mission</h3>
              <p className="text-gray-700">
                To accelerate the global transition to renewable energy by connecting solar panel owners with energy
                consumers, creating a more sustainable and equitable energy ecosystem.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-emerald-700">Vision</h3>
              <p className="text-gray-700">
                A world where clean energy is accessible to all, where communities are powered by the sun, and where our
                collective impact creates a sustainable future for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
