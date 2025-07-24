import { ArrowRight, Globe, Clock, Zap } from 'lucide-react'
import { Button } from './ui/button'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/60 z-1"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card mb-8 hover-lift group">
            <Globe className="h-4 w-4 mr-2 text-brand-blue group-hover:text-brand-blue-light transition-colors" />
            <span className="text-sm font-medium text-shimmer">Serving Global Markets Since 2008</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Your Global{' '}
            <span className="gradient-text">Dispatch Team</span>
            <br />
            + AI-Powered{' '}
            <span className="gradient-text">Tech Partner</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            24/7 remote dispatch operations and cutting-edge AI-powered tech solutions for luxury ground transportation companies worldwide
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-brand-blue" />
              <span className="text-sm font-medium">24/7 Operations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-brand-blue" />
              <span className="text-sm font-medium">Global Coverage</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-brand-blue" />
              <span className="text-sm font-medium">AI-Powered Tech Solutions</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark text-white shadow-lg hover:shadow-xl group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Book Free Discovery Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-blue opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Button>
            <Button size="lg" variant="outline" className="glass-card border-brand-blue/30 hover:border-brand-blue group relative overflow-hidden">
              <span className="relative z-10 group-hover:text-brand-blue transition-colors">Explore Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-blue-light/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-brand-blue/10 to-brand-blue-light/10 rounded-full parallax-float blur-sm"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-brand-blue-light/10 to-brand-blue-dark/10 rounded-full parallax-float blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-brand-blue-dark/10 to-brand-blue/10 rounded-full parallax-float blur-sm" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-gradient-to-br from-brand-blue/10 to-brand-blue-light/10 rounded-full parallax-float blur-sm" style={{ animationDelay: '3s' }}></div>
    </section>
  )
}