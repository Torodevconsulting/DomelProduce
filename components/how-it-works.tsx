export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Capture Knowledge",
      description:
        "Our AI learns from experienced professionals through observation, conversation, and documentation. We digitize expertise that would otherwise be lost.",
    },
    {
      number: "02",
      title: "Scale Expertise",
      description:
        "Our platform transforms captured knowledge into AI-powered guidance and automation systems that can be deployed across your organization.",
    },
    {
      number: "03",
      title: "Optimize Workflows",
      description:
        "Implement AI-assisted execution of complex tasks, enabling faster, smarter operations with reduced training time and consistent quality.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-purple-500"></div>
              <span className="text-purple-500 font-medium text-sm">THE PROCESS</span>
              <div className="h-px w-8 bg-purple-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How MindSync Works</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our three-step process transforms human expertise into scalable AI solutions
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4 flex flex-col">
                    <span className="text-5xl font-bold text-purple-500/30">{step.number}</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-foreground/70 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.5rem] top-full h-16 w-px bg-purple-500/20 hidden md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

