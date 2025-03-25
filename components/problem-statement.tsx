export default function ProblemStatement() {
  return (
    <section className="py-24 bg-background border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Misión</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Domel Produce está comprometido a entregar productos de calidad premium a consumidores en todo el mundo, fomentando asociaciones sólidas con productores y manteniendo los más altos estándares de la industria en todos los aspectos de nuestras operaciones.
              </p>
              <div className="h-1 w-20 bg-red-500/80 rounded-full"></div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Visión</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Ser el líder global en la distribución sostenible de productos agrícolas, reconocidos por nuestro compromiso inquebrantable con la calidad, la innovación y la satisfacción del cliente, mientras empoderamos a los productores locales y contribuimos a comunidades más saludables en todo el mundo.
              </p>
              <div className="h-1 w-20 bg-purple-500/80 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

