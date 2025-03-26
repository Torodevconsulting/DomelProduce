export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Desde el campo",
      description:
        "En Domel Produce, nuestro viaje comienza en los campos más fértiles. Cada fruta es el resultado de un cuidado meticuloso, trabajando en armonía con agricultores locales que conocen cada surco de tierra. Seleccionamos minuciosamente cada cultivo, asegurando que solo los mejores frutos lleguen a nuestras instalaciones.",
    },
    {
      number: "02",
      title: "Pasando por el Producto",
      description:
        "Transformamos la riqueza natural en productos de la más alta calidad. Nuestros procesos de selección, limpieza y empaque están diseñados para preservar la esencia y frescura de cada fruta. Con tecnología de punta y un equipo dedicado, garantizamos que cada producto mantenga su sabor original y sus propiedades nutritivas.",
    },
    {
      number: "03",
      title: "Hasta la gente",
      description:
        "Nuestra misión no termina con la exportación. Nos comprometemos a que cada fruta de Domel Produce recorra un camino seguro hasta el consumidor final. Desde sofisticados métodos de conservación hasta una logística eficiente, nos aseguramos de que nuestros productos lleguen intactos, manteniendo su calidad excepcional.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-purple-500"></div>
              <span className="text-purple-500 font-medium text-sm">Nuestros Valores</span>
              <div className="h-px w-8 bg-purple-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Del campo a tu mesa</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Domel Produce: Cultivando calidad, exportando sabor.
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

