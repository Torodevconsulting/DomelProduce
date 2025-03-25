export default function ProblemStatement() {
  return (
    <section className="py-24 bg-background border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Skilled labor shortages are increasing, making training and expertise transfer a major challenge.
                Companies struggle to maintain quality as experienced workers retire.
              </p>
              <div className="h-1 w-20 bg-red-500/80 rounded-full"></div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                MindSync captures human intelligence and scales it using AI, enabling businesses to operate without
                skill gaps. We transform expertise into accessible digital knowledge.
              </p>
              <div className="h-1 w-20 bg-purple-500/80 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

