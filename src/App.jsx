import React, { useState, useEffect, useRef } from 'react'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const sectionsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
      {/* TopAppBar */}
      <nav
        className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'
        }`}
      >
        <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
          <span className="font-display-lg text-headline-md text-primary tracking-tight">
            The Heritage Archive
          </span>
          <div className="flex items-center space-x-8">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-sm"
              href="#branches"
            >
              The Branches
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-sm"
              href="#values"
            >
              Our Values
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-sm"
              href="#about"
            >
              The Collection
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden px-gutter bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto text-center space-y-8 fade-in-up">
          <div className="inline-flex items-center space-x-2 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_awesome
            </span>
            <span className="font-label-sm tracking-widest uppercase">A Collective Legacy</span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-4xl mx-auto">
            One Tree, Many <span className="text-primary italic">Branches</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Welcome to our shared digital sanctuary. This collection honors the distinct lineages that have woven together to form our collective history—a tapestry of resilience, love, and shared memory.
          </p>
          <div className="flex flex-col items-center pt-8">
            <div className="w-[1px] h-12 bg-outline-variant"></div>
            <p className="font-label-sm text-primary tracking-widest mt-4">EXPLORE THE LINEAGE</p>
          </div>
        </div>
      </section>

      {/* Family Branches Container */}
      <main id="branches">
        {/* Branch 1: The Bloom Family */}
        <section ref={addToRefs} className="branch-section py-24 px-gutter bg-surface opacity-0" id="bloom">
          <div className="max-w-container-max mx-auto space-y-16">
            {/* Immersive Hero */}
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9] soft-elevation group">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
                alt="Panoramic fine-art landscape of a sun-drenched meadow at golden hour, representing the roots of the Bloom family."
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <span className="font-label-sm tracking-widest uppercase text-primary-fixed">EST. 1982</span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg">The Bloom Family</h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 space-y-6">
                <h3 className="font-display-lg text-headline-md text-primary italic">The Keepers of the Sun</h3>
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  Rooted in the golden hills, the Blooms have always prioritized the warmth of home and the growth of the next generation. Their story is one of simple joys and enduring stability.
                </p>
                <div className="flex items-center space-x-3 text-outline">
                  <span className="material-symbols-outlined">account_tree</span>
                  <span className="font-label-sm">Primary Lineage</span>
                </div>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-[3/4] rounded-xl overflow-hidden soft-elevation">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                    alt="Sarah and David in their youth"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden soft-elevation">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80"
                    alt="Baby hands"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden soft-elevation">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
                    alt="Birthday celebration"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="line-divider"></div>

        {/* Branch 2: The Miller Branch */}
        <section ref={addToRefs} className="branch-section py-24 px-gutter bg-surface-container-lowest opacity-0" id="miller">
          <div className="max-w-container-max mx-auto space-y-16">
            {/* Immersive Hero */}
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9] soft-elevation group">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80"
                alt="Panoramic view of a misty coastal forest, representing the adventurous spirit of the Miller branch."
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <span className="font-label-sm tracking-widest uppercase text-secondary-fixed">EST. 1954</span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg">The Miller Branch</h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 order-2 lg:order-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-[3/4] rounded-xl overflow-hidden soft-elevation">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                    alt="Elder couple"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden soft-elevation">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80"
                    alt="Vintage adventure gear"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden soft-elevation">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=800&q=80"
                    alt="Old family letters"
                  />
                </div>
              </div>
              <div className="lg:col-span-4 order-1 lg:order-2 space-y-6">
                <h3 className="font-display-lg text-headline-md text-secondary italic">Seekers of the Horizon</h3>
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  The Millers brought a spirit of curiosity and exploration to our archive. Travelers, artists, and scholars, their legacy is found in the letters sent from distant shores and the art that fills our walls.
                </p>
                <div className="flex items-center space-x-3 text-outline">
                  <span className="material-symbols-outlined">explore</span>
                  <span className="font-label-sm">Matriarchal Line</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="line-divider"></div>

        {/* Branch 3: The Sterling Lineage */}
        <section ref={addToRefs} className="branch-section py-24 px-gutter bg-surface opacity-0" id="sterling">
          <div className="max-w-container-max mx-auto space-y-16">
            {/* Immersive Hero */}
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9] soft-elevation group">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                alt="Panoramic shot of a majestic mountain range at twilight, symbolizing the strength and endurance of the Sterling lineage."
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <span className="font-label-sm tracking-widest uppercase text-tertiary-fixed">EST. 1910</span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg">The Sterling Lineage</h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 space-y-6">
                <h3 className="font-display-lg text-headline-md text-tertiary italic">Founders of the Foundation</h3>
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  The Sterlings represent our oldest documented roots. With a history tied to the land and the industry of the early century, they provided the resilience and values that anchor us today.
                </p>
                <div className="flex items-center space-x-3 text-outline">
                  <span className="material-symbols-outlined">history_edu</span>
                  <span className="font-label-sm">Foundational Line</span>
                </div>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-[3/4] rounded-xl overflow-hidden soft-elevation">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?auto=format&fit=crop&w=1200&q=80"
                    alt="Sterling ancestors"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden soft-elevation">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80"
                    alt="Old farmhouse"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden soft-elevation">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=800&q=80"
                    alt="Antique pocket watch"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Values Section */}
      <section className="py-24 relative overflow-hidden bg-surface-container-low" id="values">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-tertiary-container/10 rounded-[2rem] p-8 md:p-16 border border-tertiary-container/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
              <span className="material-symbols-outlined text-[300px] text-tertiary-container/10 select-none">
                auto_awesome
              </span>
            </div>
            <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
              <div className="space-y-4">
                <span className="font-label-sm text-primary tracking-widest uppercase">The Heritage Ethos</span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface">
                  Values That Bind Us
                </h2>
                <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-primary text-4xl">favorite</span>
                  <h3 className="font-display-lg text-body-lg text-on-surface italic">Unconditional Love</h3>
                  <p className="font-body-md text-on-surface-variant">The universal foundation of every branch we grow.</p>
                </div>
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-primary text-4xl">history_edu</span>
                  <h3 className="font-display-lg text-body-lg text-on-surface italic">Honoring Roots</h3>
                  <p className="font-body-md text-on-surface-variant">Respecting the unique sacrifices of each lineage.</p>
                </div>
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-primary text-4xl">diversity_3</span>
                  <h3 className="font-display-lg text-body-lg text-on-surface italic">Constant Growth</h3>
                  <p className="font-body-md text-on-surface-variant">Encouraging new sprouts while staying grounded.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 bg-surface-container-lowest dark:bg-surface-container-low border-t border-outline-variant/30" id="about">
        <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="font-display-lg text-headline-md text-primary">The Heritage Archive</span>
            <p className="text-on-surface-variant dark:text-surface-variant font-body-md opacity-80">
              A collective journey across generations.
            </p>
          </div>
          <div className="flex items-center space-x-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md opacity-80 hover:opacity-100" href="#">
              The Collection
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md opacity-80 hover:opacity-100" href="#">
              Archive Policy
            </a>
            <span className="font-body-md text-secondary italic">Est. 1910</span>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter mt-12 pt-8 border-t border-outline-variant/10 text-center md:text-left">
          <p className="text-outline text-label-sm uppercase tracking-widest">
            © 2024 The Heritage Collective. Curated with intention.
          </p>
        </div>
      </footer>
    </div>
  )
}
