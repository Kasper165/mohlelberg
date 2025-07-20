"use client"

import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function HomePage() {
  const isWithinBusinessHours = () => {
    const now = new Date()
    const currentDay = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    const currentTime = currentHour + currentMinute / 60

    // Check if it's weekend (Saturday = 6, Sunday = 0)
    if (currentDay === 0 || currentDay === 6) {
      return false // Closed on weekends
    }

    // Monday to Thursday: 07:00 - 16:00
    if (currentDay >= 1 && currentDay <= 4) {
      return currentTime >= 7.0 && currentTime < 16.0
    }

    // Friday: 07:00 - 15:00
    if (currentDay === 5) {
      return currentTime >= 7.0 && currentTime < 15.0
    }

    return false
  }

  const [isBusinessHours, setIsBusinessHours] = useState(isWithinBusinessHours())

  // Update business hours status every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBusinessHours(isWithinBusinessHours())
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  const handleCallClick = () => {
    if (isBusinessHours) {
      window.location.href = "tel:+4522815218"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/images/logo.webp" alt="Møhlenberg Snedker & Montage Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-amber-900">Møhlenberg</h1>
                <p className="text-sm text-amber-700">Snedker Og Montage ApS</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-amber-800">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+45 22 81 52 18</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    isBusinessHours ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {isBusinessHours ? "ÅBEN" : "LUKKET"}
                </span>
              </div>
              <Button
                className="bg-amber-800 hover:bg-amber-900"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Kontakt Os
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
            Din Specialist i Snedker- og Montagearbejde
          </h2>
          <p className="text-xl text-amber-800 mb-8 max-w-3xl mx-auto">
            Vi tilbyder professionel montering af køkkener, inventar, døre og vinduer samt præcist arbejde med lister og
            finish. Med fokus på kvalitet og detalje sikrer vi et flot og holdbart resultat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={`text-lg px-8 ${
                isBusinessHours ? "bg-amber-800 hover:bg-amber-900 cursor-pointer" : "bg-gray-500 cursor-not-allowed"
              }`}
              onClick={handleCallClick}
              disabled={!isBusinessHours}
            >
              {isBusinessHours ? "Ring Nu: +45 22 81 52 18" : "Ring i morgen kl. 07:00-16:00"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-800 text-amber-800 hover:bg-amber-50 text-lg px-8 bg-transparent"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              Se Vores Arbejde
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white/80">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Vores Specialer</h3>
            <p className="text-lg text-amber-800 max-w-3xl mx-auto">
              Møhlenberg Snedker Og Montage ApS er din pålidelige partner for professionelt snedker- og montagearbejde.
              Vi leverer kvalitet og præcision i hver detalje.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-4 border-amber-300 shadow-2xl shadow-amber-400/60 hover:shadow-amber-500/80 drop-shadow-xl bg-white/95 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-2 ring-amber-300/50">
                  <span className="text-2xl text-amber-800">🏠</span>
                </div>
                <h4 className="text-xl font-semibold text-amber-900 mb-2">Køkkener & Inventar</h4>
                <p className="text-amber-700">
                  Professionel montering af køkkener og inventar med fokus på funktionalitet og æstetik
                </p>
              </CardContent>
            </Card>

            <Card className="border-4 border-amber-300 shadow-2xl shadow-amber-400/60 hover:shadow-amber-500/80 drop-shadow-xl bg-white/95 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-2 ring-amber-300/50">
                  <span className="text-2xl text-amber-800">🚪</span>
                </div>
                <h4 className="text-xl font-semibold text-amber-900 mb-2">Døre & Vinduer</h4>
                <p className="text-amber-700">
                  Ekspert montering af døre og vinduer for optimal funktion og energieffektivitet
                </p>
              </CardContent>
            </Card>

            <Card className="border-4 border-amber-300 shadow-2xl shadow-amber-400/60 hover:shadow-amber-500/80 drop-shadow-xl bg-white/95 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ring-2 ring-amber-300/50">
                  <span className="text-2xl text-amber-800">✨</span>
                </div>
                <h4 className="text-xl font-semibold text-amber-900 mb-2">Lister & Finish</h4>
                <p className="text-amber-700">
                  Præcist arbejde med lister og finish der giver det perfekte slutresultat
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Vores Arbejde</h3>
            <p className="text-lg text-amber-800 max-w-3xl mx-auto">
              Se eksempler på vores professionelle snedker- og montagearbejde - fra køkkener til døre og vinduer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-amber-200 shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/toemrer-rolund.jpg"
                  alt="Professionelt snedkerarbejde - præcision og kvalitet"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-amber-900 mb-2">Præcision & Kvalitet</h4>
                <p className="text-amber-700">
                  Hver detalje udføres med største omhu og professionelle værktøjer for det bedste resultat.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/snedker.jpg"
                  alt="Erfaren snedker i arbejde - traditionelt håndværk"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-amber-900 mb-2">Professionel Montage</h4>
                <p className="text-amber-700">
                  Fra køkkener til døre og vinduer - vi sikrer en perfekt montering hver gang.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-amber-800 mb-6">Har du brug for professionel montering eller snedkerarbejde?</p>
            <Button
              size="lg"
              className="bg-amber-800 hover:bg-amber-900 text-lg px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Kontakt Os For Tilbud
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-amber-800 to-amber-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Kontakt Os</h3>
            <p className="text-xl text-amber-100">
              Klar til at starte dit næste projekt? Kontakt os for en pålidelig løsning til dit snedker- og
              montagearbejde.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Telefon</h4>
                  <p className="text-amber-100">+45 22 81 52 18</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-amber-100">info@mohlenberg.dk</p>
                  <p className="text-xs text-amber-200">(kommer snart)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Adresse</h4>
                  <p className="text-amber-100">
                    Rådyrstien 6<br />
                    8990 Fårup
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Åbningstider</h4>
              <div className="space-y-2 text-amber-100">
                <div className="flex justify-between">
                  <span>Mandag - Torsdag:</span>
                  <span>07:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Fredag:</span>
                  <span>07:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Lørdag - Søndag:</span>
                  <span>Lukket</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="secondary"
              className={`text-lg px-8 ${
                isBusinessHours
                  ? "bg-white text-amber-900 hover:bg-amber-50"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              onClick={handleCallClick}
              disabled={!isBusinessHours}
            >
              {isBusinessHours ? "Ring Nu: +45 22 81 52 18" : "Ring i morgen kl. 07:00-16:00"}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img src="/images/logo.webp" alt="Møhlenberg Snedker & Montage Logo" className="h-8 w-auto" />
            <span className="font-semibold">Møhlenberg Snedker Og Montage ApS</span>
          </div>
          <p className="text-sm">© 2024 Møhlenberg Snedker Og Montage ApS. Alle rettigheder forbeholdes.</p>
        </div>
      </footer>
    </div>
  )
}
