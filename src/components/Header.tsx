import { useState } from 'react'
import { Menu, X, Phone, Users, Award } from 'lucide-react'
import { Button } from './ui/button'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from './ThemeProvider'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/50 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <img 
                  src={theme === 'light' ? '/vassist-pro-logo.png' : '/vassist-pro-logofinal.png'} 
                  alt="VAssist Pro Logo" 
                  className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-foreground/90 hover:text-brand-blue font-medium text-lg transition-all duration-300 hover:scale-105 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-6">
            {/* Trust indicators */}
            <div className="hidden md:flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-brand-blue" />
                <span className="font-medium">50+ Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-brand-blue" />
                <span className="font-medium">Since 2008</span>
              </div>
            </div>
            
            <ThemeToggle />
            
            <Button 
              size="lg" 
              className="hidden sm:flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue-dark text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              <span>Book Call</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-3 px-4 text-foreground hover:text-brand-blue transition-colors duration-200 hover:bg-brand-blue/10 rounded-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              size="lg" 
              className="w-full mt-6 flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blue-dark text-white"
            >
              <Phone className="h-4 w-4" />
              <span>Book Discovery Call</span>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}