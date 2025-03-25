import { Car, Wrench, HeadsetIcon } from "lucide-react"

export default function UseCases() {
  const useCases = [
    {
      title: "Automotive Repair",
      description: "AI-driven diagnostics and repair assistance that captures the expertise of master mechanics.",
      icon: <Car className="h-6 w-6 text-purple-500" />,
      metrics: ["70% faster training", "45% improved accuracy", "24/7 expertise access"],
    },
    {
      title: "Industrial Maintenance",
      description: "Preventive AI-powered maintenance systems that predict issues before they occur.",
      icon: <Wrench className="h-6 w-6 text-purple-500" />,
      metrics: ["60% reduced downtime", "40% cost savings", "Predictive maintenance"],
    },
    {
      title: "Technical Support",
      description: "AI replacing human consultants for technical guidance and troubleshooting.",
      icon: <HeadsetIcon className="h-6 w-6 text-purple-500" />,
      metrics: ["90% faster resolution", "Consistent quality", "Unlimited scaling"],
    },
  ]

  return (
    <section id="use-cases" className="py-24 bg-background border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-purple-500"></div>
              <span className="text-purple-500 font-medium text-sm">APPLICATIONS</span>
              <div className="h-px w-8 bg-purple-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Industry Applications</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              MindSync's technology adapts to various industries where expertise is critical
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-muted/50 rounded-xl p-8 hover:bg-muted transition-colors duration-300">
                <div className="mb-6">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-foreground/70 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/60">
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

