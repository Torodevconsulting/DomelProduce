import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br bg-gray-200 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Explora Nuestras Campañas de Exportación
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Estamos listos para convertirnos en tu proveedor estratégico de frutas premium del Perú. Nuestra amplia experiencia en exportación y nuestro compromiso con la calidad nos permite ofrecer soluciones personalizadas que se adaptan perfectamente a tus necesidades de suministro
              </p>
            </div>

            <form className="max-w-md mx-auto space-y-4">
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground"
              />
              <select
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Your Industry
                </option>
                <option value="automotive">Automotive</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail</option>
                <option value="other">Other</option>
              </select>
              <Button size="lg" className="w-full bg-green-400 hover:bg-green-600 py-6 h-auto text-lg text-black">
                Request Early Access
              </Button>
              <p className="text-xs text-center text-foreground/50 mt-4">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

