export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">Success Stories</h2>
          <p className="text-xl text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
            See how leading companies are transforming their operations with MindSync.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 relative">
              <p className="text-foreground/80 mb-6 pt-4 relative z-10">
                MindSync has revolutionized our repair shop. We've captured the expertise of our senior mechanics and
                now our newer staff perform at expert levels within weeks, not years.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Testimonial author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Karen Vásquez</h4>
                  <p className="text-sm text-foreground/60">Operations Director, AutoFix Inc.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 relative">
              <p className="text-foreground/80 mb-6 pt-4 relative z-10">
                The ROI was immediate. Our maintenance team now resolves issues 60% faster with MindSync's AI guidance,
                and our downtime has been reduced by over 40%.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Testimonial author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Santiago Cabrera</h4>
                  <p className="text-sm text-foreground/60">CTO, Industrial Solutions Ltd.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case study preview */}
          <div className="mt-16 bg-gradient-to-r from-purple-800 to-indigo-900 rounded-xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Nuestro Éxito: Aguacate, Mango y Uva</h3>
                <p className="text-blue-100 mb-6">
                Nuestros productos estrellas han posicionado a Domel Produce como un referente en la exportación de fruta peruana. Con una facturación de 21 millones de dólares en 2024 y una visión clara de expansión en el mercado europeo, somos tu mejor aliado en importación de frutas.
                </p>
                <div>
                  <button className="bg-white text-purple-900 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Revisa nuestro calendario de exportación
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/manzanas.jpg"
                  alt="Case study preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

