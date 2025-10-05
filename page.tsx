"use client"

import { ArrowRight, Menu, X, CheckCircle, Star, Users, Zap, Database, Brain, AlertTriangle, TrendingUp, Shield, BarChart3, Truck } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Orb from '@/components/Orb'

// Add CSS animations for the button and random brain effects
const buttonStyles = `
  @keyframes colorShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes morph {
    0% { border-radius: 1.5rem; transform: scale(1.1) rotate(2deg); }
    25% { border-radius: 2rem; transform: scale(1.15) rotate(-1deg); }
    50% { border-radius: 1rem; transform: scale(1.2) rotate(3deg); }
    75% { border-radius: 2.5rem; transform: scale(1.1) rotate(-2deg); }
    100% { border-radius: 1.5rem; transform: scale(1.1) rotate(2deg); }
  }

  @keyframes morphBrain {
    0% { border-radius: 50% 40% 60% 30%; transform: scale(1) rotate(0deg); }
    25% { border-radius: 40% 60% 30% 50%; transform: scale(1.1) rotate(90deg); }
    50% { border-radius: 60% 30% 50% 40%; transform: scale(0.9) rotate(180deg); }
    75% { border-radius: 30% 50% 40% 60%; transform: scale(1.05) rotate(270deg); }
    100% { border-radius: 50% 40% 60% 30%; transform: scale(1) rotate(360deg); }
  }

  @keyframes pulseCore {
    0% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 0.8; }
  }

  @keyframes arrowFlow {
    0% { transform: translateX(0px); opacity: 0.7; }
    50% { transform: translateX(4px); opacity: 1; }
    100% { transform: translateX(0px); opacity: 0.7; }
  }

  @keyframes floatParticle1 {
    0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
    33% { transform: translateY(-20px) translateX(10px) rotate(120deg); }
    66% { transform: translateY(10px) translateX(-15px) rotate(240deg); }
    100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
  }

  @keyframes floatParticle2 {
    0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
    25% { transform: translateY(-15px) translateX(-10px) rotate(90deg); }
    50% { transform: translateY(20px) translateX(15px) rotate(180deg); }
    75% { transform: translateY(-5px) translateX(-20px) rotate(270deg); }
    100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
  }

  @keyframes floatParticle3 {
    0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
    40% { transform: translateY(-25px) translateX(20px) rotate(144deg); }
    80% { transform: translateY(15px) translateX(-25px) rotate(288deg); }
    100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
  }

  @keyframes randomChaos {
    0% { filter: hue-rotate(0deg) saturate(1.1) brightness(1); }
    16% { filter: hue-rotate(60deg) saturate(1.3) brightness(1.1); }
    33% { filter: hue-rotate(120deg) saturate(0.9) brightness(0.9); }
    50% { filter: hue-rotate(180deg) saturate(1.2) brightness(1.05); }
    66% { filter: hue-rotate(240deg) saturate(0.8) brightness(1.1); }
    83% { filter: hue-rotate(300deg) saturate(1.4) brightness(0.95); }
    100% { filter: hue-rotate(360deg) saturate(1.1) brightness(1); }
  }
  
`

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const brainRef = useRef<HTMLDivElement>(null)
  const buttonAnimationRef = useRef<number | null>(null)

  // Mouse tracking for interactive brain
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (brainRef.current) {
        try {
        const rect = brainRef.current.getBoundingClientRect()
          
          // Prevent division by zero
          if (rect.width === 0 || rect.height === 0) {
            return
          }
          
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const x = (e.clientX - centerX) / (rect.width / 2)
        const y = (e.clientY - centerY) / (rect.height / 2)
        
          // Clamp values to prevent extreme values
          const clampedX = Math.max(-1, Math.min(1, x))
          const clampedY = Math.max(-1, Math.min(1, y))
          
          setMousePosition({ x: clampedX, y: clampedY })
        } catch (error) {
          console.warn('Mouse position calculation error:', error)
        }
        // Force refresh to clear cache
      }
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 })
    }

    const brainElement = brainRef.current
    if (brainElement) {
      brainElement.addEventListener('mousemove', handleMouseMove, { passive: true })
      brainElement.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    }

    return () => {
      if (brainElement) {
        brainElement.removeEventListener('mousemove', handleMouseMove)
        brainElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Remove random effects completely - keep it smooth and predictable
  // The CSS animations will provide the organic movement without jarring cuts

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: buttonStyles }} />
      <style dangerouslySetInnerHTML={{
        __html: `
        * {
          outline: none;
        }
        
        *:focus-visible {
          outline: 2px solid #9c4dff;
          outline-offset: 2px;
          border-radius: 4px;
        }
        
        button, .bento-card, [role='button'], [tabindex] {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        p, h1, h2, h3, h4, h5, h6, span, div {
          -webkit-tap-highlight-color: transparent;
        }
        
        button:focus-visible {
          outline: 2px solid #9c4dff;
          outline-offset: 2px;
          box-shadow: 0 0 0 4px rgba(156, 77, 255, 0.2);
        }
        
        .bento-card:focus-visible {
          outline: 2px solid #9c4dff;
          outline-offset: 2px;
          box-shadow: 0 0 0 4px rgba(156, 77, 255, 0.2);
        }
        
        *:focus:not(:focus-visible) {
          outline: none;
        }
        
        ::selection {
          background: rgba(156, 77, 255, 0.2);
          color: inherit;
        }
        
        ::-moz-selection {
          background: rgba(156, 77, 255, 0.2);
          color: inherit;
        }
        
        .bento-card {
          position: relative;
          overflow: hidden;
        }
        
        .bento-card::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
              rgba(156, 77, 255, calc(var(--glow-intensity) * 0.8)) 0%,
              rgba(77, 156, 255, calc(var(--glow-intensity) * 0.4)) 30%,
              transparent 60%);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: subtract;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 1;
          opacity: 0;
        }
        
        .bento-card:hover::after {
          opacity: 1;
        }
        
        .bento-card:hover {
          box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(156, 77, 255, 0.2);
          transform: translateY(-2px);
        }
        
        /* Mobile-First Responsive Design */
        
        /* Base mobile styles (up to 768px) */
        @media (max-width: 768px) {
          /* Global mobile fixes */
          * {
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          
          /* Navigation */
          .mobile-nav {
            display: block !important;
          }
          
          .desktop-nav {
            display: none !important;
          }
          
          /* Hero Section */
          .hero-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
            text-align: center !important;
            padding: 1rem !important;
          }
          
          .hero-title {
            font-size: 2.2rem !important;
            line-height: 1.2 !important;
            margin-bottom: 1rem !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
            line-height: 1.5 !important;
            margin-bottom: 1.5rem !important;
          }
          
          .hero-orb {
            order: 2 !important;
            transform: none !important;
            margin: 0 auto !important;
            width: 280px !important;
            height: 280px !important;
            padding: 0 !important;
          }
          
          /* Sections */
          .section-padding {
            padding: 3rem 1rem !important;
          }
          
          .section-title {
            font-size: 2rem !important;
            line-height: 1.3 !important;
            margin-bottom: 1rem !important;
          }
          
          .section-subtitle {
            font-size: 1rem !important;
            line-height: 1.5 !important;
            margin-bottom: 2rem !important;
          }
          
          /* Process Flow */
          .process-flow {
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
            gap: 2rem !important;
            padding: 2rem 0 !important;
            position: relative !important;
          }
          
          .process-step {
            position: relative !important;
            transform: none !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            margin: 0 auto 2rem auto !important;
            width: 100% !important;
            max-width: 280px !important;
          }
          
          .process-arrow {
            display: none !important;
          }
          
          /* Bento Grid - Mobile Redesigned */
          .bento-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
            padding: 0 0.5rem !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          
          .bento-card {
            width: 100% !important;
            min-height: 180px !important;
            max-height: none !important;
            height: auto !important;
            padding: 1.25rem !important;
            margin: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
            box-sizing: border-box !important;
            border-radius: 12px !important;
          }
          
          /* Remove all grid constraints on mobile */
          .bento-card[style*="grid-column: span 2"],
          .bento-card[style*="grid-row: span 2"] {
            grid-column: unset !important;
            grid-row: unset !important;
            min-height: 180px !important;
            width: 100% !important;
          }
          
          /* Mobile bento card content optimization */
          .bento-card h3 {
            font-size: 1.2rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.75rem !important;
            font-weight: 600 !important;
          }
          
          .bento-card p {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
            margin-bottom: 0 !important;
            flex-grow: 1 !important;
          }
          
          .bento-card svg {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          
          /* Ensure proper spacing in bento cards */
          .bento-card > div {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          /* Neural Network Section - Mobile Optimized */
          .neural-network {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            padding: 0 !important;
            height: auto !important;
            margin: 2rem 0 !important;
          }
          
          .neural-network > div {
            width: 300px !important;
            height: 300px !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
          
          /* Make neural network nodes more visible on mobile */
          .neural-network div[style*="position: absolute"] {
            width: 12px !important;
            height: 12px !important;
          }
          
          /* Optimize neural network lines for mobile */
          .neural-network svg line {
            stroke-width: 3px !important;
          }
          
          /* Footer */
          .footer-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }
          
          .footer-column {
            width: 100% !important;
            margin: 0 !important;
          }
        }
        
        /* Tablet styles (769px to 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          
          .process-flow {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            height: 400px !important;
          }
          
          .process-step {
            position: relative !important;
            transform: none !important;
            margin: 0 !important;
          }
          
          .process-arrow {
            display: block !important;
            transform: none !important;
          }
        }
        
        /* Desktop styles (1025px and up) */
        @media (min-width: 1025px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
          }
          
          .bento-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 1.25rem !important;
          }
          
          .process-flow {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            height: 500px !important;
          }
          
          .process-step {
            position: absolute !important;
          }
          
          .neural-network {
            display: block !important;
          }
        }
        `
      }} />
    <div style={{minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#ffffff', fontFamily: 'Inter, system-ui, sans-serif'}}>
      {/* Clean Navigation */}
      <nav style={{position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #1a1a1a'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem'}}>
            {/* Logo */}
            <Link href="/" style={{textDecoration: 'none'}}>
              <span style={{
                fontSize: '1.5rem', 
                fontWeight: '500', 
                color: '#ffffff',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                letterSpacing: '0.01em',
                textShadow: '0 0 12px rgba(255, 255, 255, 0.4), 0 0 24px rgba(255, 255, 255, 0.2)',
                filter: 'blur(0.2px)'
              }}>
                elysium
              </span>
            </Link>
            
            {/* Desktop Navigation Links */}
            <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}} className="desktop-nav">
              <Link href="/products" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s'}}>Products</Link>
              <Link href="/solutions" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s'}}>Solutions</Link>
              <Link href="/enterprise" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s'}}>Enterprise</Link>
            </div>
            
            {/* Desktop CTA Buttons */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}} className="desktop-nav">
              <Link href="/contact" style={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: '1px solid #374151',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                textDecoration: 'none'
              }}>
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <a 
                href="https://mining-ai-platform-dashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none'}}
              >
                Sign In
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer'
              }}
              className="mobile-nav"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(10, 10, 10, 0.98)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid #1a1a1a',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }} className="mobile-nav">
              <Link href="/products" style={{color: '#e5e7eb', fontSize: '1rem', fontWeight: '500', textDecoration: 'none', padding: '0.5rem 0'}}>Products</Link>
              <Link href="/solutions" style={{color: '#e5e7eb', fontSize: '1rem', fontWeight: '500', textDecoration: 'none', padding: '0.5rem 0'}}>Solutions</Link>
              <Link href="/enterprise" style={{color: '#e5e7eb', fontSize: '1rem', fontWeight: '500', textDecoration: 'none', padding: '0.5rem 0'}}>Enterprise</Link>
              <div style={{borderTop: '1px solid #2a2a2a', paddingTop: '1rem', marginTop: '0.5rem'}}>
                <Link href="/contact" style={{
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: '1px solid #374151',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                  textDecoration: 'none',
                  marginBottom: '0.5rem'
                }}>
                  Get Started
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <a 
                  href="https://mining-ai-platform-dashboard.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', display: 'block', padding: '0.5rem 0'}}
                >
                  Sign In
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{padding: '6rem 0', minHeight: '80vh', display: 'flex', alignItems: 'center'}} className="section-padding">
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', width: '100%'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}} className="hero-grid">
            
            {/* Left Content */}
            <div>
              <h1 style={{fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em'}} className="hero-title">
                <span style={{display: 'block'}}>
                  <span style={{
                    background: 'linear-gradient(135deg, #9c4dff 0%, #4d9cff 50%, #ff4d9c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'colorShift 3s ease-in-out infinite'
                  }}>Discover</span>
                  <span style={{color: '#ff6b35'}}> AI from Data to Deployment</span>
                </span>
              </h1>
              
              <p style={{fontSize: '1.25rem', color: '#d1d5db', lineHeight: '1.6', marginBottom: '2rem', fontWeight: '400'}} className="hero-subtitle">
                Transform raw data into actionable intelligence with AI-powered insights for mining operations.
              </p>
              
              <div style={{display: 'flex', justifyContent: 'center', marginTop: '1.5rem', maxWidth: '425px'}}>
                <button style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  padding: '1rem 2.5rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  minWidth: '180px'
                }}
                onMouseEnter={(e) => {
                  const button = e.target as HTMLElement;
                  button.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const button = e.target as HTMLElement;
                  button.style.transform = 'translateY(0)';
                }}
                onMouseDown={(e) => {
                  (e.target as HTMLElement).style.border = 'none';
                  (e.target as HTMLElement).style.borderRadius = '2rem';
                  (e.target as HTMLElement).style.transform = 'scale(0.95)';
                  (e.target as HTMLElement).style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)';
                  (e.target as HTMLElement).style.boxShadow = '0 8px 32px rgba(255, 255, 255, 0.2)';
                }}
                onMouseUp={(e) => {
                  (e.target as HTMLElement).style.border = '1px solid #374151';
                  (e.target as HTMLElement).style.borderRadius = '0.5rem';
                  (e.target as HTMLElement).style.transform = 'scale(1)';
                  (e.target as HTMLElement).style.background = '#1a1a1a';
                  (e.target as HTMLElement).style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
                  (e.target as HTMLElement).style.animation = 'none';
                }}
                onClick={() => window.location.href = '/contact'}>
                  Get Started
                  <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>

            {/* Right Content - Orb */}
            <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '550px', transform: 'translateX(125px)'}} className="hero-orb">
              <div style={{width: '550px', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', maxHeight: '100%'}}>
                <Orb 
                  hue={0}
                  hoverIntensity={0.3}
                  rotateOnHover={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale AI Style Section */}
      <section style={{
        padding: '8rem 0',
        backgroundColor: '#000000',
        position: 'relative'
      }} className="section-padding">
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 1rem'}}>
          {/* Centered Header */}
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <div style={{
              fontSize: '0.875rem',
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: '500',
              marginBottom: '1rem'
            }}>
              AI FOR THE ENTERPRISE
            </div>
            
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }} className="section-title">
              Full-Stack AI Solutions
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#9ca3af',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }} className="section-subtitle">
              Outcomes delivered with world-class data, models, agents, and deployment.
            </p>
            
            <button style={{
              background: '#ffffff',
              color: '#000000',
              border: '1px solid #000000',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              margin: '0 auto'
            }}
            onMouseEnter={(e) => {
              const btn = e.target as HTMLElement;
              btn.style.transform = 'translateY(-1px)';
              btn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              const btn = e.target as HTMLElement;
              btn.style.transform = 'translateY(0)';
              btn.style.boxShadow = 'none';
            }}
            onClick={() => window.location.href = '/contact'}>
              Book a Demo <ArrowRight size={16} />
            </button>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}} className="hero-grid">
            
            {/* Left Content */}
            <div>
              {/* Content Sections */}
              <div style={{display: 'flex', flexDirection: 'column'}}>
                
                {/* Section 1 */}
                <div style={{paddingBottom: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.75rem'
                  }}>
                    Predictive Maintenance
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#9ca3af',
                    lineHeight: '1.6'
                  }}>
                    AI-powered equipment monitoring and failure prediction to minimize downtime and optimize maintenance schedules across your mining operations.
                  </p>
                </div>
                
                {/* Section 2 */}
                <div style={{paddingTop: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.75rem'
                  }}>
                    Process Optimization
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#9ca3af',
                    lineHeight: '1.6'
                  }}>
                    Real-time data analysis and machine learning models to enhance efficiency, reduce costs, and maximize output in your industrial processes.
                  </p>
                </div>
                
                {/* Section 3 */}
                <div style={{paddingTop: '2rem'}}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.75rem'
                  }}>
                    Safety & Compliance
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#9ca3af',
                    lineHeight: '1.6'
                  }}>
                    Advanced monitoring systems and predictive analytics to ensure worker safety and regulatory compliance in high-risk mining environments.
                  </p>
                </div>
              </div>
            </div>

              {/* Right Content - Neural Network */}
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '500px', paddingLeft: '200px', paddingTop: '30px'}} className="neural-network">
                <div style={{position: 'relative', width: '550px', height: '550px', backgroundColor: '#000000', maxWidth: '100%', maxHeight: '100%'}}>
                  {/* Neural Network Nodes */}
                  {/* Input Layer - 5 dots */}
                  <div style={{position: 'absolute', top: '15%', left: '5%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  <div style={{position: 'absolute', top: '30%', left: '5%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  <div style={{position: 'absolute', top: '50%', left: '5%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  <div style={{position: 'absolute', top: '70%', left: '5%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  <div style={{position: 'absolute', top: '85%', left: '5%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  
                  {/* Layer 1 - 4 dots */}
                  <div style={{position: 'absolute', top: '20%', left: '35%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  <div style={{position: 'absolute', top: '40%', left: '35%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  <div style={{position: 'absolute', top: '60%', left: '35%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  <div style={{position: 'absolute', top: '80%', left: '35%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  
                  {/* Layer 2 - 3 dots */}
                  <div style={{position: 'absolute', top: '25%', left: '65%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  <div style={{position: 'absolute', top: '50%', left: '65%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  <div style={{position: 'absolute', top: '75%', left: '65%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  
                  {/* Output Layer - 2 dots */}
                  <div style={{position: 'absolute', top: '35%', left: '90%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  <div style={{position: 'absolute', top: '65%', left: '90%', width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}} />
                  
                  {/* Electric Neural Network Lines */}
                  <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2}}>
                    {/* Define gradients for electric glow */}
                    <defs>
                      <linearGradient id="electricWhite" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(156, 77, 255, 0)" />
                        <stop offset="20%" stopColor="rgba(156, 77, 255, 0.3)" />
                        <stop offset="40%" stopColor="rgba(77, 156, 255, 0.8)" />
                        <stop offset="60%" stopColor="rgba(255, 77, 156, 0.9)" />
                        <stop offset="80%" stopColor="rgba(77, 156, 255, 0.3)" />
                        <stop offset="100%" stopColor="rgba(156, 77, 255, 0)" />
                      </linearGradient>
                      
                      {/* Blur filter for glow effect */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Electric Signal 1 - White */}
                    <line
                      x1="5%" y1="15%" x2="35%" y2="20%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 2s linear infinite',
                        filter: 'url(#glow)'
                      }}
                    />
                    <line
                      x1="35%" y1="20%" x2="65%" y2="25%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 2s linear infinite 0.3s',
                        filter: 'url(#glow)'
                      }}
                    />
                    <line
                      x1="65%" y1="25%" x2="90%" y2="35%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 2s linear infinite 0.6s',
                        filter: 'url(#glow)'
                      }}
                    />

                    {/* Electric Signal 2 - White */}
                    <line
                      x1="5%" y1="50%" x2="35%" y2="40%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 2.5s linear infinite 1s',
                        filter: 'url(#glow)'
                      }}
                    />
                    <line
                      x1="35%" y1="40%" x2="65%" y2="50%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 2.5s linear infinite 1.3s',
                        filter: 'url(#glow)'
                      }}
                    />
                    <line
                      x1="65%" y1="50%" x2="90%" y2="65%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 2.5s linear infinite 1.6s',
                        filter: 'url(#glow)'
                      }}
                    />

                    {/* Electric Signal 3 - White */}
                    <line
                      x1="5%" y1="85%" x2="35%" y2="80%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 3s linear infinite 2s',
                        filter: 'url(#glow)'
                      }}
                    />
                    <line
                      x1="35%" y1="80%" x2="65%" y2="75%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 3s linear infinite 2.3s',
                        filter: 'url(#glow)'
                      }}
                    />
                    <line
                      x1="65%" y1="75%" x2="90%" y2="65%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 3s linear infinite 2.6s',
                        filter: 'url(#glow)'
                      }}
                    />
                    
                    {/* Electric Signal 4 - New Path */}
                    <line
                      x1="5%" y1="50%" x2="35%" y2="40%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 3s linear infinite 0.8s',
                        filter: 'url(#glow)'
                      }}
                    />
                    <line
                      x1="35%" y1="40%" x2="65%" y2="50%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 3s linear infinite 1.1s',
                        filter: 'url(#glow)'
                      }}
                    />
                    <line
                      x1="65%" y1="50%" x2="90%" y2="35%"
                      stroke="url(#electricWhite)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: '30 400',
                        strokeDashoffset: '0',
                        animation: 'electricFlow 3s linear infinite 1.4s',
                        filter: 'url(#glow)'
                      }}
                    />
                  </svg>

                  {/* Static Connecting Lines */}
                  <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1}}>
                    {/* Input to Hidden Layer 1 */}
                    {[15, 30, 50, 70, 85].map((y1, i) => 
                      [20, 40, 60, 80].map((y2, j) => (
                        <line
                          key={`input-${i}-${j}`}
                          x1="5%"
                          y1={`${y1}%`}
                          x2="35%"
                          y2={`${y2}%`}
                          stroke="rgba(255, 255, 255, 0.6)"
                          strokeWidth="2"
                          style={{animation: `dash 4s linear infinite ${(i + j) * 0.2}s`}}
                        />
                      ))
                    )}
                    
                    {/* Hidden Layer 1 to Hidden Layer 2 */}
                    {[20, 40, 60, 80].map((y1, i) => 
                      [25, 50, 75].map((y2, j) => (
                        <line
                          key={`hidden1-${i}-${j}`}
                          x1="35%"
                          y1={`${y1}%`}
                          x2="65%"
                          y2={`${y2}%`}
                          stroke="rgba(255, 255, 255, 0.6)"
                          strokeWidth="2"
                          style={{animation: `dash 4s linear infinite ${(i + j) * 0.3}s`}}
                        />
                      ))
                    )}
                    
                    {/* Hidden Layer 2 to Output */}
                    {[25, 50, 75].map((y1, i) => 
                      [35, 65].map((y2, j) => (
                        <line
                          key={`hidden2-${i}-${j}`}
                          x1="65%"
                          y1={`${y1}%`}
                          x2="90%"
                          y2={`${y2}%`}
                          stroke="rgba(255, 255, 255, 0.6)"
                          strokeWidth="2"
                          style={{animation: `dash 4s linear infinite ${(i + j) * 0.4}s`}}
                        />
                      ))
                    )}
                  </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section - Simple Flow */}
      <section style={{padding: '8rem 0', backgroundColor: '#000000'}} className="section-padding">
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{textAlign: 'center', marginBottom: '6rem'}}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }} className="section-title">
              How it works
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#9ca3af',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }} className="section-subtitle">
              Simple, powerful AI-driven process from data to action
            </p>
          </div>
          
          {/* Visual Process Flow */}
          <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', width: '100%'}} className="process-flow">
            
            {/* Step 1: Data Collection */}
            <div style={{position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="process-step">
                  <div style={{
                width: '160px',
                height: '160px',
                background: '#000000',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '2px solid #ffffff',
                boxShadow: '0 0 15px rgba(156, 77, 255, 0.2), 0 0 30px rgba(77, 156, 255, 0.1), 0 0 45px rgba(255, 77, 156, 0.05)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <Database size={64} color="#ffffff" />
                  </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.75rem'}}>
                Collect Data
              </h3>
              <p style={{color: '#9ca3af', fontSize: '1rem', lineHeight: '1.5', maxWidth: '250px'}}>
                IoT sensors gather real-time equipment data
              </p>
            </div>

            {/* Arrow 1 */}
            <div style={{position: 'absolute', left: '30%', top: '50%', transform: 'translateY(-50%)'}} className="process-arrow">
              <ArrowRight 
                size={40} 
                style={{
                    color: '#ffffff',
                  animation: 'arrowFlow 2s ease-in-out infinite 0s'
                }} 
              />
            </div>

            {/* Step 2: AI Analysis */}
            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="process-step">
              <div style={{
                width: '160px',
                height: '160px',
                background: '#000000',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '2px solid #ffffff',
                boxShadow: '0 0 15px rgba(156, 77, 255, 0.2), 0 0 30px rgba(77, 156, 255, 0.1), 0 0 45px rgba(255, 77, 156, 0.05)',
                animation: 'pulse 2s ease-in-out infinite 0.5s'
              }}>
                <Brain size={64} color="#ffffff" />
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.75rem'}}>
                AI Analysis
                  </h3>
              <p style={{color: '#9ca3af', fontSize: '1rem', lineHeight: '1.5', maxWidth: '250px'}}>
                Machine learning detects patterns and anomalies
                  </p>
                </div>
                
            {/* Arrow 2 */}
            <div style={{position: 'absolute', left: '70%', top: '50%', transform: 'translateY(-50%)'}} className="process-arrow">
                  <ArrowRight 
                size={40} 
                    style={{
                  color: '#ffffff', 
                  animation: 'arrowFlow 2s ease-in-out infinite 1s'
                    }} 
                  />
              </div>

            {/* Step 3: Smart Alerts */}
            <div style={{position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}} className="process-step">
              <div style={{
                width: '160px',
                height: '160px',
                background: '#000000',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '2px solid #ffffff',
                boxShadow: '0 0 15px rgba(156, 77, 255, 0.2), 0 0 30px rgba(77, 156, 255, 0.1), 0 0 45px rgba(255, 77, 156, 0.05)',
                animation: 'pulse 2s ease-in-out infinite 1.5s'
              }}>
                <AlertTriangle size={64} color="#ffffff" />
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.75rem'}}>
                Smart Alerts
              </h3>
              <p style={{color: '#9ca3af', fontSize: '1rem', lineHeight: '1.5', maxWidth: '250px'}}>
                Get instant notifications with recommended actions
              </p>
            </div>

            {/* Connecting Lines */}
            <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0}}>
              <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#89b6cd" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#89b6cd" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#e1c8e8" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e1c8e8" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#e1c8e8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Line from Step 1 to Step 2 */}
              <path 
                d="M 15% 50% Q 30% 50% 50% 50%" 
                stroke="url(#lineGradient1)" 
                strokeWidth="3" 
                fill="none"
                strokeDasharray="10 5"
                style={{animation: 'dash 3s linear infinite'}}
              />
              
              {/* Line from Step 2 to Step 3 */}
              <path 
                d="M 50% 50% Q 70% 50% 85% 50%" 
                stroke="url(#lineGradient2)" 
                strokeWidth="3" 
                fill="none"
                strokeDasharray="10 5"
                style={{animation: 'dash 3s linear infinite 1.5s'}}
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Bento Features Section */}
      <section style={{padding: '6rem 0', backgroundColor: '#111111'}} className="section-padding">
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem'}} className="section-title">
              Built for Mining Operations
            </h2>
            <p style={{fontSize: '1.125rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto'}} className="section-subtitle">
              Specialized AI solutions designed specifically for mining equipment and operations
            </p>
          </div>
          
          {/* Bento Grid */}
          <div className="bento-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
            maxWidth: '64rem',
            margin: '0 auto',
            fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)'
          }}>
            {/* Card 1 - Equipment Health */}
            <div 
              className="bento-card"
              style={{
                gridColumn: 'span 1',
                gridRow: 'span 1',
                backgroundColor: '#060010',
                border: '1px solid #392e4e',
                borderRadius: '20px',
                padding: '1.25rem',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '--glow-x': '50%',
                '--glow-y': '50%',
                '--glow-intensity': '0',
                '--glow-radius': '200px'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const relativeX = (x / rect.width) * 100;
                const relativeY = (y / rect.height) * 100;
                
                e.currentTarget.style.setProperty('--glow-x', `${relativeX}%`);
                e.currentTarget.style.setProperty('--glow-y', `${relativeY}%`);
                e.currentTarget.style.setProperty('--glow-intensity', '1');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--glow-intensity', '0');
              }}
            >
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <span style={{color: '#ffffff', fontSize: '1rem', fontWeight: '500'}}>Monitoring</span>
                <TrendingUp size={20} color="#9c4dff" />
              </div>
              <div>
                <h3 style={{color: '#ffffff', fontSize: '1rem', fontWeight: '400', margin: '0 0 0.5rem 0'}}>
                  Equipment Health
                </h3>
                <p style={{color: '#ffffff', fontSize: '0.75rem', lineHeight: '1.25', opacity: '0.9', margin: '0 0 0.75rem 0'}}>
                  Monitor excavators, haul trucks & crushers
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem'}}>
                  <div style={{width: '6px', height: '6px', backgroundColor: '#9c4dff', borderRadius: '50%'}}></div>
                  <span style={{color: '#ffffff', fontSize: '0.7rem', opacity: '0.7'}}>95%+ Uptime</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Cost Optimization */}
            <div 
              className="bento-card"
              style={{
                gridColumn: 'span 1',
                gridRow: 'span 1',
                backgroundColor: '#060010',
                border: '1px solid #392e4e',
                borderRadius: '20px',
                padding: '1.25rem',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '--glow-x': '50%',
                '--glow-y': '50%',
                '--glow-intensity': '0',
                '--glow-radius': '200px'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const relativeX = (x / rect.width) * 100;
                const relativeY = (y / rect.height) * 100;
                
                e.currentTarget.style.setProperty('--glow-x', `${relativeX}%`);
                e.currentTarget.style.setProperty('--glow-y', `${relativeY}%`);
                e.currentTarget.style.setProperty('--glow-intensity', '1');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--glow-intensity', '0');
              }}
            >
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <span style={{color: '#ffffff', fontSize: '1rem', fontWeight: '500'}}>Optimization</span>
                <BarChart3 size={20} color="#4d9cff" />
              </div>
              <div>
                <h3 style={{color: '#ffffff', fontSize: '1rem', fontWeight: '400', margin: '0 0 0.5rem 0'}}>
                  Cost Reduction
                </h3>
                <p style={{color: '#ffffff', fontSize: '0.75rem', lineHeight: '1.25', opacity: '0.9', margin: '0 0 0.75rem 0'}}>
                  Optimize fuel, maintenance & downtime costs
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem'}}>
                  <div style={{width: '6px', height: '6px', backgroundColor: '#4d9cff', borderRadius: '50%'}}></div>
                  <span style={{color: '#ffffff', fontSize: '0.7rem', opacity: '0.7'}}>30% Cost Savings</span>
                </div>
              </div>
            </div>

            {/* Card 3 - AI-Powered Predictive Analytics (Large) */}
            <div 
              className="bento-card"
              style={{
                gridColumn: 'span 2',
                gridRow: 'span 2',
                backgroundColor: '#060010',
                border: '1px solid #392e4e',
                borderRadius: '20px',
                padding: '1.5rem',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '--glow-x': '50%',
                '--glow-y': '50%',
                '--glow-intensity': '0',
                '--glow-radius': '200px'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const relativeX = (x / rect.width) * 100;
                const relativeY = (y / rect.height) * 100;
                
                e.currentTarget.style.setProperty('--glow-x', `${relativeX}%`);
                e.currentTarget.style.setProperty('--glow-y', `${relativeY}%`);
                e.currentTarget.style.setProperty('--glow-intensity', '1');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--glow-intensity', '0');
              }}
            >
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <span style={{color: '#ffffff', fontSize: '1rem', fontWeight: '500'}}>AI Analytics</span>
              </div>
              
              {/* Central Visual - AI Brain with Data Flow */}
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', position: 'relative'}}>
                <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  {/* Main Brain Icon */}
                  <Brain size={80} color="#9c4dff" style={{filter: 'drop-shadow(0 0 20px rgba(156, 77, 255, 0.5))'}} />
                  
                  {/* Floating Data Points */}
                  <div style={{position: 'absolute', top: '-20px', left: '-30px', width: '8px', height: '8px', backgroundColor: '#4d9cff', borderRadius: '50%', animation: 'pulse 2s infinite'}}></div>
                  <div style={{position: 'absolute', top: '20px', right: '-40px', width: '6px', height: '6px', backgroundColor: '#ff4d9c', borderRadius: '50%', animation: 'pulse 2s infinite 0.5s'}}></div>
                  <div style={{position: 'absolute', bottom: '-10px', left: '20px', width: '10px', height: '10px', backgroundColor: '#9c4dff', borderRadius: '50%', animation: 'pulse 2s infinite 1s'}}></div>
                  
                  {/* Connection Lines */}
                  <div style={{position: 'absolute', top: '50%', left: '50%', width: '2px', height: '40px', backgroundColor: 'rgba(156, 77, 255, 0.3)', transform: 'translate(-50%, -50%) rotate(45deg)', transformOrigin: 'center'}}></div>
                  <div style={{position: 'absolute', top: '50%', left: '50%', width: '2px', height: '30px', backgroundColor: 'rgba(77, 156, 255, 0.3)', transform: 'translate(-50%, -50%) rotate(-45deg)', transformOrigin: 'center'}}></div>
                </div>
              </div>
              
              <div style={{textAlign: 'center'}}>
                <h3 style={{color: '#ffffff', fontSize: '1.25rem', fontWeight: '400', margin: '0 0 0.5rem 0'}}>
                  Predictive Analytics
                </h3>
                <p style={{color: '#ffffff', fontSize: '0.9rem', lineHeight: '1.4', opacity: '0.8', margin: '0'}}>
                  AI-powered failure prediction for mining equipment
                </p>
              </div>
            </div>

            {/* Card 4 - Safety & Compliance (Large) */}
            <div 
              className="bento-card"
              style={{
                gridColumn: 'span 2',
                gridRow: 'span 2',
                backgroundColor: '#060010',
                border: '1px solid #392e4e',
                borderRadius: '20px',
                padding: '1.5rem',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '--glow-x': '50%',
                '--glow-y': '50%',
                '--glow-intensity': '0',
                '--glow-radius': '200px'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const relativeX = (x / rect.width) * 100;
                const relativeY = (y / rect.height) * 100;
                
                e.currentTarget.style.setProperty('--glow-x', `${relativeX}%`);
                e.currentTarget.style.setProperty('--glow-y', `${relativeY}%`);
                e.currentTarget.style.setProperty('--glow-intensity', '1');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--glow-intensity', '0');
              }}
            >
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <span style={{color: '#ffffff', fontSize: '1rem', fontWeight: '500'}}>Safety</span>
              </div>
              
              {/* Central Visual - Shield with Safety Elements */}
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', position: 'relative'}}>
                <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  {/* Main Shield Icon */}
                  <Shield size={80} color="#4d9cff" style={{filter: 'drop-shadow(0 0 20px rgba(77, 156, 255, 0.5))'}} />
                  
                  {/* Safety Indicators */}
                  <div style={{position: 'absolute', top: '-25px', left: '-20px', width: '12px', height: '12px', backgroundColor: '#ff4d9c', borderRadius: '50%', animation: 'pulse 2s infinite'}}></div>
                  <div style={{position: 'absolute', top: '-15px', right: '-25px', width: '8px', height: '8px', backgroundColor: '#9c4dff', borderRadius: '50%', animation: 'pulse 2s infinite 0.7s'}}></div>
                  <div style={{position: 'absolute', bottom: '-20px', left: '-15px', width: '10px', height: '10px', backgroundColor: '#4d9cff', borderRadius: '50%', animation: 'pulse 2s infinite 1.4s'}}></div>
                  <div style={{position: 'absolute', bottom: '-10px', right: '-20px', width: '6px', height: '6px', backgroundColor: '#ff4d9c', borderRadius: '50%', animation: 'pulse 2s infinite 0.3s'}}></div>
                  
                  {/* Protection Ring */}
                  <div style={{position: 'absolute', top: '50%', left: '50%', width: '100px', height: '100px', border: '2px solid rgba(77, 156, 255, 0.3)', borderRadius: '50%', transform: 'translate(-50%, -50%)', animation: 'pulse 3s infinite'}}></div>
                </div>
              </div>
              
              <div style={{textAlign: 'center'}}>
                <h3 style={{color: '#ffffff', fontSize: '1.25rem', fontWeight: '400', margin: '0 0 0.5rem 0'}}>
                  Safety & Compliance
                </h3>
                <p style={{color: '#ffffff', fontSize: '0.9rem', lineHeight: '1.4', opacity: '0.8', margin: '0'}}>
                  Comprehensive safety monitoring for mining operations
                </p>
              </div>
            </div>

            {/* Card 5 - Fleet Management */}
            <div 
              className="bento-card"
              style={{
                gridColumn: 'span 1',
                gridRow: 'span 1',
                backgroundColor: '#060010',
                border: '1px solid #392e4e',
                borderRadius: '20px',
                padding: '1.25rem',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '--glow-x': '50%',
                '--glow-y': '50%',
                '--glow-intensity': '0',
                '--glow-radius': '200px'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const relativeX = (x / rect.width) * 100;
                const relativeY = (y / rect.height) * 100;
                
                e.currentTarget.style.setProperty('--glow-x', `${relativeX}%`);
                e.currentTarget.style.setProperty('--glow-y', `${relativeY}%`);
                e.currentTarget.style.setProperty('--glow-intensity', '1');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--glow-intensity', '0');
              }}
            >
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <span style={{color: '#ffffff', fontSize: '1rem', fontWeight: '500'}}>Fleet</span>
                <Truck size={20} color="#ff4d9c" />
              </div>
              <div>
                <h3 style={{color: '#ffffff', fontSize: '1rem', fontWeight: '400', margin: '0 0 0.5rem 0'}}>
                  Fleet Management
                </h3>
                <p style={{color: '#ffffff', fontSize: '0.75rem', lineHeight: '1.25', opacity: '0.9', margin: '0 0 0.75rem 0'}}>
                  Track haul trucks, loaders & excavators
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem'}}>
                  <div style={{width: '6px', height: '6px', backgroundColor: '#ff4d9c', borderRadius: '50%'}}></div>
                  <span style={{color: '#ffffff', fontSize: '0.7rem', opacity: '0.7'}}>GPS Tracking</span>
                </div>
              </div>
            </div>

            {/* Card 6 - Data Integration */}
            <div 
              className="bento-card"
              style={{
                gridColumn: 'span 1',
                gridRow: 'span 1',
                backgroundColor: '#060010',
                border: '1px solid #392e4e',
                borderRadius: '20px',
                padding: '1.25rem',
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '--glow-x': '50%',
                '--glow-y': '50%',
                '--glow-intensity': '0',
                '--glow-radius': '200px'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const relativeX = (x / rect.width) * 100;
                const relativeY = (y / rect.height) * 100;
                
                e.currentTarget.style.setProperty('--glow-x', `${relativeX}%`);
                e.currentTarget.style.setProperty('--glow-y', `${relativeY}%`);
                e.currentTarget.style.setProperty('--glow-intensity', '1');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--glow-intensity', '0');
              }}
            >
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <span style={{color: '#ffffff', fontSize: '1rem', fontWeight: '500'}}>Integration</span>
                <CheckCircle size={20} color="#9c4dff" />
              </div>
              <div>
                <h3 style={{color: '#ffffff', fontSize: '1rem', fontWeight: '400', margin: '0 0 0.5rem 0'}}>
                  Data Integration
                </h3>
                <p style={{color: '#ffffff', fontSize: '0.75rem', lineHeight: '1.25', opacity: '0.9', margin: '0 0 0.75rem 0'}}>
                  Connect sensors, SCADA & ERP systems
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem'}}>
                  <div style={{width: '6px', height: '6px', backgroundColor: '#9c4dff', borderRadius: '50%'}}></div>
                  <span style={{color: '#ffffff', fontSize: '0.7rem', opacity: '0.7'}}>API Integration</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <button 
              style={{
                background: 'rgba(26, 26, 26, 0.8)',
                color: '#ffffff',
                border: 'none',
                padding: '2.25rem 4.5rem',
                fontSize: '1.625rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                margin: '0 auto',
                borderRadius: '0.5rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(156, 77, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              onClick={() => window.location.href = '/contact'}
            >
              <span style={{color: '#ffffff'}}>Get Started</span>
              <ArrowRight size={32} style={{color: '#ffffff'}} />
            </button>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#111111', padding: '3rem 0', borderTop: '1px solid #2a2a2a'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '2rem'}} className="footer-grid">
            <div style={{marginRight: '6rem', minWidth: '200px'}} className="footer-column">
              <h4 style={{fontSize: '0.875rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', letterSpacing: '0.05em'}}>COMPANY</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.75rem'}}><Link href="/about" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>About</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/terms" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Terms</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/privacy" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Privacy</Link></li>
              </ul>
            </div>
            <div style={{marginRight: '6rem', minWidth: '200px'}} className="footer-column">
              <h4 style={{fontSize: '0.875rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', letterSpacing: '0.05em'}}>GUIDES</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.75rem'}}><Link href="/predictive-maintenance" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Predictive Maintenance</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/ml-model-training" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>ML Model Training</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/equipment-monitoring" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Equipment Monitoring</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/failure-analysis" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Failure Analysis</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/guide-to-ai-for-mining" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Guide to AI for Mining</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/fleet-management" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Fleet Management</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/safety-analytics" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Safety Analytics</Link></li>
              </ul>
            </div>
            <div style={{minWidth: '200px'}} className="footer-column">
              <h4 style={{fontSize: '0.875rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', letterSpacing: '0.05em'}}>RESOURCES</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.75rem'}}><Link href="/contact" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div style={{borderTop: '1px solid #2a2a2a', paddingTop: '2rem', textAlign: 'center'}}>
            <p style={{color: '#6b7280', fontSize: '0.875rem'}}>
              © 2025 Elysium. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
