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
            
            {/* Navigation Links */}
            <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
              <Link href="/products" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s'}}>Products</Link>
              <Link href="/solutions" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s'}}>Solutions</Link>
              <Link href="/enterprise" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s'}}>Enterprise</Link>
            </div>
            
            {/* CTA Buttons */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{padding: '6rem 0', minHeight: '80vh', display: 'flex', alignItems: 'center'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}}>
            
            {/* Left Content */}
            <div>
              <h1 style={{fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em'}}>
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
              
              <p style={{fontSize: '1.25rem', color: '#d1d5db', lineHeight: '1.6', marginBottom: '2rem', fontWeight: '400'}}>
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
            <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '550px', transform: 'translateX(125px)'}}>
              <div style={{width: '550px', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 2rem'}}>
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
            }}>
              Full-Stack AI Solutions
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#9ca3af',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}>
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
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}}>
            
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
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '500px', paddingLeft: '200px', paddingTop: '30px'}}>
                <div style={{position: 'relative', width: '550px', height: '550px', backgroundColor: '#000000'}}>
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
      <section style={{padding: '8rem 0', backgroundColor: '#000000'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '6rem'}}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}>
              How it works
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#9ca3af',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Simple, powerful AI-driven process from data to action
            </p>
          </div>
          
          {/* Visual Process Flow */}
          <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', width: '100%'}}>
            
            {/* Step 1: Data Collection */}
            <div style={{position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)',
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
            <div style={{position: 'absolute', left: '30%', top: '50%', transform: 'translateY(-50%)'}}>
              <ArrowRight 
                size={40} 
                style={{
                    color: '#ffffff',
                  animation: 'arrowFlow 2s ease-in-out infinite 0s'
                }} 
              />
            </div>

            {/* Step 2: AI Analysis */}
            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)',
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
            <div style={{position: 'absolute', left: '70%', top: '50%', transform: 'translateY(-50%)'}}>
                  <ArrowRight 
                size={40} 
                    style={{
                  color: '#ffffff', 
                  animation: 'arrowFlow 2s ease-in-out infinite 1s'
                    }} 
                  />
              </div>

            {/* Step 3: Smart Alerts */}
            <div style={{position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)',
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

      {/* Features Section */}
      <section style={{padding: '6rem 0', backgroundColor: '#111111'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem'}}>
              Built for Mining Operations
            </h2>
            <p style={{fontSize: '1.125rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto'}}>
              Specialized AI solutions designed specifically for mining equipment and operations
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div 
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.6)', 
                padding: '2rem', 
                borderRadius: '1.5rem', 
                border: '2px solid #ffffff', 
                backdropFilter: 'blur(10px)', 
                boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{width: '3rem', height: '3rem', background: '#000000', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '2px solid #ffffff', boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)', transition: 'all 0.3s ease'}}>
                <TrendingUp size={24} color="#ffffff" />
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '1rem'}}>
                Equipment Health Monitoring
              </h3>
              <p style={{color: '#d1d5db', lineHeight: '1.6'}}>
                Real-time monitoring of excavators, haul trucks, and processing equipment with 95%+ accuracy in failure prediction.
              </p>
            </div>
            
            <div 
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.6)', 
                padding: '2rem', 
                borderRadius: '1.5rem', 
                border: '2px solid #ffffff', 
                backdropFilter: 'blur(10px)', 
                boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{width: '3rem', height: '3rem', background: '#000000', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '2px solid #ffffff', boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)', transition: 'all 0.3s ease'}}>
                <BarChart3 size={24} color="#ffffff" />
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '1rem'}}>
                Cost Optimization
              </h3>
              <p style={{color: '#d1d5db', lineHeight: '1.6'}}>
                Reduce maintenance costs by 30% and prevent unplanned downtime that costs mining operations millions annually.
              </p>
            </div>
            
            <div 
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.6)', 
                padding: '2rem', 
                borderRadius: '1.5rem', 
                border: '2px solid #ffffff', 
                backdropFilter: 'blur(10px)', 
                boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{width: '3rem', height: '3rem', background: '#000000', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '2px solid #ffffff', boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)', transition: 'all 0.3s ease'}}>
                <Shield size={24} color="#ffffff" />
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '1rem'}}>
                Safety & Compliance
              </h3>
              <p style={{color: '#d1d5db', lineHeight: '1.6'}}>
                Improve safety outcomes and ensure compliance with mining regulations through proactive equipment monitoring.
              </p>
            </div>
            
            <div 
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.6)', 
                padding: '2rem', 
                borderRadius: '1.5rem', 
                border: '2px solid #ffffff', 
                backdropFilter: 'blur(10px)', 
                boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{width: '3rem', height: '3rem', background: '#000000', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '2px solid #ffffff', boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)', transition: 'all 0.3s ease'}}>
                <Brain size={24} color="#ffffff" />
          </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '1rem'}}>
                Predictive Analytics
              </h3>
              <p style={{color: '#d1d5db', lineHeight: '1.6'}}>
                Advanced machine learning models predict equipment failures 2-4 weeks in advance, enabling proactive maintenance scheduling.
              </p>
        </div>
            
            <div 
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.6)', 
                padding: '2rem', 
                borderRadius: '1.5rem', 
                border: '2px solid #ffffff', 
                backdropFilter: 'blur(10px)', 
                boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{width: '3rem', height: '3rem', background: '#000000', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '2px solid #ffffff', boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)', transition: 'all 0.3s ease'}}>
                <Truck size={24} color="#ffffff" />
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '1rem'}}>
                Fleet Management
              </h3>
              <p style={{color: '#d1d5db', lineHeight: '1.6'}}>
                Optimize your entire mining fleet with real-time tracking, performance analytics, and automated maintenance workflows.
            </p>
          </div>
          
            <div 
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.6)', 
                padding: '2rem', 
                borderRadius: '1.5rem', 
                border: '2px solid #ffffff', 
                backdropFilter: 'blur(10px)', 
                boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{width: '3rem', height: '3rem', background: '#000000', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '2px solid #ffffff', boxShadow: '0 0 20px rgba(156, 77, 255, 0.3), 0 0 40px rgba(77, 156, 255, 0.15)', transition: 'all 0.3s ease'}}>
                <CheckCircle size={24} color="#ffffff" />
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '1rem'}}>
                Data Integration
              </h3>
              <p style={{color: '#d1d5db', lineHeight: '1.6'}}>
                Seamlessly integrate with existing mining systems, sensors, and databases for comprehensive operational insights.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <button 
              style={{
                background: 'rgba(26, 26, 26, 0.8)',
                color: '#ffffff',
                border: '2px solid #ffffff',
                padding: '1.25rem 2.5rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                margin: '0 auto',
                borderRadius: '0.5rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(156, 77, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(156, 77, 255, 0.3)'
                e.currentTarget.style.border = '2px solid #4d9cff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(156, 77, 255, 0.2)'
                e.currentTarget.style.border = '2px solid #9c4dff'
              }}
              onClick={() => window.location.href = '/contact'}
            >
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#111111', padding: '3rem 0', borderTop: '1px solid #2a2a2a'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem'}}>
            <div style={{marginRight: '6rem'}}>
              <h4 style={{fontSize: '0.875rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', letterSpacing: '0.05em'}}>COMPANY</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.75rem'}}><Link href="/about" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>About</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/terms" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Terms</Link></li>
                <li style={{marginBottom: '0.75rem'}}><Link href="/privacy" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem'}}>Privacy</Link></li>
              </ul>
            </div>
            <div style={{marginRight: '6rem'}}>
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
            <div>
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
