import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from './ui/button'

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg w-80 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Ready to transform your operations? Let's discuss your needs.
          </p>
          <div className="space-y-2">
            <Button className="w-full text-sm" size="sm">
              Book Discovery Call
            </Button>
            <Button variant="outline" className="w-full text-sm" size="sm">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      ) : null}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 bg-brand-blue hover:bg-brand-blue-dark text-white shadow-lg hover:shadow-xl animate-pulse-slow hover-lift"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}