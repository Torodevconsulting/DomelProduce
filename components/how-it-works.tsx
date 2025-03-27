export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "From the Field",
      description:
        "t Domel Produce, our journey begins in the most fertile fields. Each fruit is the result of meticulous care, working in harmony with local farmers who know every furrow of land. We carefully select each crop, ensuring that only the best fruits arrive at our facilities.",
    },
    {
      number: "02",
      title: "Through the Product",
      description:
        "We transform natural richness into the highest quality products. Our selection, cleaning, and packaging processes are designed to preserve the essence and freshness of each fruit. With cutting-edge technology and a dedicated team, we guarantee that each product maintains its original flavor and nutritional properties.",
    },
    {
      number: "03",
      title: "To the Consumer's Table",
      description:
        "Our mission does not end with exportation. We are committed to ensuring that each Domel Produce fruit travels a safe path to the end consumer. From sophisticated preservation methods to efficient logistics, we make sure our products arrive intact, maintaining their exceptional quality.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-green-700"></div>
              <span className="text-green-700 font-medium text-sm">Our Values</span>
              <div className="h-px w-8 bg-green-700"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">From the fiel to the table</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Domel Produce: Growing Quality, Shipping Taste.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4 flex flex-col">
                    <span className="text-5xl font-bold text-green-700/30">{step.number}</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-foreground/70 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

