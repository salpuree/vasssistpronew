
import { MapPin, Users, Award, Clock } from 'lucide-react'

export function AboutSection() {
  const stats = [
    { icon: Clock, value: '17+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Expert Team Members' },
    { icon: MapPin, value: '3', label: 'Global Markets' },
    { icon: Award, value: '24/7', label: 'Always Available' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-200 to-purple-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Meet the <span className="gradient-text">People</span> Behind Your Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We're not just a service provider – we're your dedicated team of professionals who understand the luxury transportation industry inside and out.
          </p>
          <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Since 2008, our team of 50+ skilled professionals has been the backbone of successful transportation companies, combining human expertise with cutting-edge AI technology.
          </p>
        </div>

        {/* Team Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-background rounded-lg p-6 border border-border shadow-lg hover-lift">
            <div className="w-20 h-20 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 text-brand-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Dedicated Dispatch Team</h3>
            <p className="text-sm text-muted-foreground">Experienced professionals who know your business like their own</p>
          </div>
          <div className="text-center bg-background rounded-lg p-6 border border-border shadow-lg hover-lift">
            <div className="w-20 h-20 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10 text-brand-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Industry Veterans</h3>
            <p className="text-sm text-muted-foreground">17+ years of experience in luxury ground transportation</p>
          </div>
          <div className="text-center bg-background rounded-lg p-6 border border-border shadow-lg hover-lift">
            <div className="w-20 h-20 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-10 w-10 text-brand-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Always There for You</h3>
            <p className="text-sm text-muted-foreground">24/7 support from real people who care about your success</p>
          </div>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group shadow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value === '13+' ? '17+' : stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="glass-card rounded-lg p-8 neon-glow shadow-2xl hover:shadow-3xl hover:scale-[1.01] transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">AI-Powered</span> Operations Excellence
            </h3>
            <p className="text-muted-foreground mb-4">
              As a USA-registered company, we leverage cutting-edge AI technology to provide cost-effective, high-quality services while maintaining the highest standards of professionalism and reliability.
            </p>
            <p className="text-muted-foreground">
              We understand the nuances of different markets and time zones, ensuring seamless AI-enhanced operations for your business around the clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
