
import { 
  Phone, 
  Monitor, 
  MessageSquare, 
  CheckCircle, 
  Code, 
  Workflow, 
  Database,
  Zap
} from 'lucide-react'

export function ServicesSection() {
  const dispatchServices = [
    {
      icon: Phone,
      title: '24/7 Booking Entry & Dispatch',
      description: 'Round-the-clock booking management and dispatch operations to keep your fleet moving'
    },
    {
      icon: Monitor,
      title: 'Trip Monitoring & Live Updates',
      description: 'Real-time trip tracking and status updates to ensure smooth operations'
    },
    {
      icon: MessageSquare,
      title: 'Customer Communication',
      description: 'Professional phone, email, and chat support for your clients'
    },
    {
      icon: CheckCircle,
      title: 'Quality Control & Accuracy',
      description: 'Rigorous quality assurance processes to maintain service excellence'
    }
  ]

  const techServices = [
    {
      icon: Code,
      title: 'AI-Powered Custom Tools & Automations',
      description: 'Bespoke AI solutions including smart email parsers, intelligent dashboards, and automated web portals'
    },
    {
      icon: Workflow,
      title: 'Smart API Integrations',
      description: 'AI-enhanced seamless integrations with LimoAnywhere, GRiDD, and other platforms'
    },
    {
      icon: Database,
      title: 'AI-Driven Workflow Optimization',
      description: 'Machine learning-powered processes and intelligent automated workflows for maximum efficiency'
    },
    {
      icon: Zap,
      title: 'AI-Powered Smart Automation',
      description: 'Advanced AI-powered tools to reduce manual work and improve accuracy'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up gradient-text">
            What <span className="gradient-text">We Do</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Our comprehensive suite of services combines human expertise with cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Dispatch Services */}
          <div className="glass-card rounded-xl p-8 hover-lift group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue/30 to-brand-blue-light/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 neon-glow">
                  <Phone className="h-6 w-6 text-brand-blue group-hover:text-brand-blue-light transition-colors" />
                </div>
                <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">Dispatch Services</h3>
              </div>
              <p className="text-muted-foreground mb-8 group-hover:text-foreground/80 transition-colors">
                Professional remote operations team handling all aspects of your dispatch needs
              </p>
              <div className="space-y-6">
                {dispatchServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 group/item glass-card p-4 rounded-lg hover-lift">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover/item:from-neon-cyan/30 group-hover/item:to-neon-blue/30 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <service.icon className="h-5 w-5 text-primary group-hover/item:text-neon-cyan transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 group-hover/item:text-primary transition-colors">{service.title}</h4>
                      <p className="text-sm text-muted-foreground group-hover/item:text-foreground/70 transition-colors">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Solutions */}
          <div className="glass-card rounded-xl p-8 hover-lift group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue/30 to-brand-blue-dark/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 neon-glow">
                  <Code className="h-6 w-6 text-brand-blue group-hover:text-brand-blue-dark transition-colors" />
                </div>
                <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">AI-Powered Tech Solutions</h3>
              </div>
              <p className="text-muted-foreground mb-8 group-hover:text-foreground/80 transition-colors">
                AI-powered custom technology solutions designed to optimize your business operations
              </p>
              <div className="space-y-6">
                {techServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 group/item glass-card p-4 rounded-lg hover-lift">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover/item:from-neon-blue/30 group-hover/item:to-neon-purple/30 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <service.icon className="h-5 w-5 text-primary group-hover/item:text-neon-blue transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 group-hover/item:text-primary transition-colors">{service.title}</h4>
                      <p className="text-sm text-muted-foreground group-hover/item:text-foreground/70 transition-colors">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
