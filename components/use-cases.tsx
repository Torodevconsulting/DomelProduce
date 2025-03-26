import Image from "next/image"

export default function UseCases() {
  const useCases = [
    {
      title: "Global Gap",
      description: "Nuestro compromiso con la excelencia agrícola, garantizando trazabilidad, sostenibilidad y seguridad en cada etapa de producción de frutas.",
      image: "/globalgap.png",
      metrics: ["98% de reducción de riesgos fitosanitarios", "Control de trazabilidad en el 100% de la cadena de producción", "Cumplimiento del 95% de protocolos de sostenibilidad agrícola"],
    },
    {
      title: "HACCP",
      description: "Implementamos rigurosos protocolos de control alimentario que previenen riesgos, asegurando la máxima calidad e inocuidad de nuestras frutas.",
      image: "/haccp.png",
      metrics: ["99.7% de precisión en control de puntos críticos", "Eliminación del 99% de potenciales contaminantes", "Eliminación del 99% de potenciales contaminantes"],
    },
    {
      title: "ISO 22000",
      description: "Respaldamos nuestra gestión con un sistema internacional de seguridad alimentaria que optimiza procesos y mantiene estándares de clase mundial.",
      image: "/iso22000.png",
      metrics: ["Mejora de eficiencia operativa en un 85%", "Reducción de errores de proceso en un 92%", "Optimización de costos de calidad en un 78%"],
    },
    {
      title: "Organic Certification",
      description: "Ratificamos nuestro compromiso con prácticas agrícolas naturales, libres de químicos, que preservan el ecosistema y la salud del consumidor.",
      image: "/organic.png",
      metrics: ["100% libre de pesticidas sintéticos", "90% menor impacto ambiental vs agricultura tradicional", "85% de conservación de biodiversidad en zonas de cultivos"],
    },
  ]

  return (
    <section id="use-cases" className="py-24 bg-background border-b border-border/10">
      <div className="container mx-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-purple-500"></div>
              <span className="text-purple-500 font-medium text-sm">LO QUE RESPALDA NUESTRA CALIDAD</span>
              <div className="h-px w-8 bg-purple-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Certificaciones</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Nuestros productos cuentan con certificaciones internacionales líderes como Global GAP, HACCP, ISO 22000, Fair Trade y Organic Certification. Estas acreditaciones garantizan un proceso de producción sostenible, seguro y de máxima calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-muted/50 rounded-xl p-7 hover:bg-muted transition-colors duration-300">
                <div className="mb-6"><Image src={useCase.image} alt={useCase.title} width={48} height={48} /></div>
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

