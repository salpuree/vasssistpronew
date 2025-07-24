
import { Car, Crown, Briefcase, Plane } from 'lucide-react'

export function IndustriesSection() {
  const industries = [
    {
      icon: Crown,
      title: 'Luxury Limousines',
      description: 'Premium limousine services for special events and corporate travel'
    },
    {
      icon: Briefcase,
      title: 'Executive Chauffeur',
      description: 'Professional chauffeur services for business executives and VIPs'
    },
    {
      icon: Car,
      title: 'Corporate Transport',
      description: 'Reliable transportation solutions for corporate clients'
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Seamless airport pickup and drop-off services'
    }
  ]

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up gradient-text">
            Industries <span className="gradient-text">We Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Specialized solutions for the luxury ground transportation industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-background rounded-lg p-6 border border-border group hover:border-primary/50 transition-all duration-300 shadow-lg hover-lift">
              <div className="w-16 h-16 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                <industry.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{industry.title}</h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>

        {/* Market Coverage */}
        <div className="mt-16 glass-card rounded-lg p-8 neon-glow shadow-2xl hover:shadow-3xl hover:scale-[1.01] transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Global Market Coverage</h3>
            <p className="text-muted-foreground">
              Serving luxury ground transportation companies across key markets with AI-powered solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">🇺🇸</div>
                  <div className="font-semibold">United States</div>
                  <div className="text-sm text-muted-foreground">Coast to coast coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">🇬🇧</div>
                  <div className="font-semibold">United Kingdom</div>
                  <div className="text-sm text-muted-foreground">London and beyond</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">🇨🇦</div>
                  <div className="font-semibold">Canada</div>
                  <div className="text-sm text-muted-foreground">From coast to coast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
