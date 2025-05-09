import Image from "next/image"

export default function UseCases() {
  const useCases = [
    {
      title: "Global Gap",
      description: "Our commitment to agricultural excellence, ensuring traceability, sustainability, and safety at every stage of fruit production.",
      image: "/globalgap.png",
      metrics: ["98% reduction in phytosanitary risks", "100% traceability control throughout the production chain", "95% compliance with agricultural sustainability protocols"],
    },
    {
      title: "SMETA",
      description: "Our ethical commitment guarantees fair labor conditions, transparency, and social responsibility throughout our entire fruit production chain.",
      image: "/smeta.png",
      metrics: ["95% improvement in worker welfare conditions", "Increased visibility in production processes", "Alignment with global social responsibility guidelines"],
    },
    {
      title: "USDA Certification",
      description: "Our USDA certification ensures that our fruits meet the highest standards of quality, safety, and organic integrity as set by the United States Department of Agriculture.",
      image: "/usda.png",
      metrics: ["100% compliance with USDA organic standards", "Enhanced market access in the United States", "Rigorous annual inspections passed"],
    },
    {
      title: "Organic Certification",
      description: "We confirm our commitment to natural agricultural practices, chemical-free, that preserve the ecosystem and consumer health.",
      image: "/organic.png",
      metrics: ["100% free of synthetic pesticides", "90% lower environmental impact vs traditional agriculture", "85% biodiversity conservation in cultivation areas"],
    },
  ]

  return (
    <section id="use-cases" className="py-24 bg-background border-b border-border/10">
      <div className="container mx-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-green-700"></div>
              <span className="text-green-700 font-medium text-sm">WHAT BACKS OUR QUALITY</span>
              <div className="h-px w-8 bg-purple-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Certifications</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our products have leading international certifications such as Global Gap, USDA, ISO 22000, Fair Trade, and Organic Certification. These accreditations guarantee a sustainable, safe, and highest quality production process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 ">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-200 rounded-xl p-7 hover:bg-muted transition-colors duration-300 shadow-xl">
                <div className="flex items-center justify-center mb-6 ">
                  <Image src={useCase.image} alt={useCase.title} width={58} height={58} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-foreground/70 mb-6">{useCase.description}</p>
                <ul className="grid gap-2">
                  {useCase.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/60">
                      <div className="h-1 w-1 rounded-full bg-purple-500"></div>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

