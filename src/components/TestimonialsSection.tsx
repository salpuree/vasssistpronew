
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "VAssist Pro has transformed our operations. Their 24/7 support and AI-powered tech solutions have increased our efficiency by 40%.",
      author: "Operations Director",
      company: "Premium Chauffeur Services, USA",
      rating: 5
    },
    {
      quote: "The quality of service is exceptional. They understand our business needs and deliver consistently reliable results.",
      author: "CEO",
      company: "Executive Transport, UK",
      rating: 5
    },
    {
      quote: "Their AI-powered dashboard and smart API integrations have streamlined our entire workflow. Highly recommended!",
      author: "IT Manager",
      company: "Canadian Luxury Transport",
      rating: 5
    }
  ]

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "40%", label: "Efficiency Increase" },
    { value: "<2min", label: "Response Time" },
    { value: "50+", label: "Happy Clients" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up gradient-text">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Trusted by luxury ground transportation companies worldwide
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border shadow-xl hover-lift">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Us Features */}
        <div className="mt-16 glass-card rounded-lg p-8 neon-glow shadow-2xl hover:shadow-3xl hover:scale-[1.01] transition-all duration-300">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Since 2008</div>
              <div className="text-sm text-muted-foreground">17+ years of experience in the industry</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Trained Team</div>
              <div className="text-sm text-muted-foreground">Highly skilled and certified professionals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">AI-Powered Tools</div>
              <div className="text-sm text-muted-foreground">Advanced AI technology solutions for your needs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Always On</div>
              <div className="text-sm text-muted-foreground">24/7 support and monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
