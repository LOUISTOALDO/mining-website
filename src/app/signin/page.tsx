"use client"

import { ArrowRight, Eye, EyeOff, Lock, Mail, ArrowLeft } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Mock authentication - accept any email/password for demo
    if (email && password) {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Generate mock token (must match dashboard expectations)
      const mockToken = `mock-token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      
      // Create mock user data (must match dashboard expectations)
      const mockUser = {
        id: 1,
        email: email,
        username: email.split('@')[0] || 'demo',
        full_name: 'Demo User',
        name: 'Demo User',
        avatar: undefined,
        is_active: true,
        is_superuser: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        last_login: new Date().toISOString(),
        roles: ['admin']
      }
      
      // Store both token and user data in localStorage
      localStorage.setItem('auth_token', mockToken)
      localStorage.setItem('user_data', JSON.stringify(mockUser))
      
      // Redirect to dashboard
      window.location.href = 'https://mining-ai-platform-dashboard.vercel.app/'
    } else {
      setError("Please enter both email and password")
    }
    
    setIsLoading(false)
  }

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#ffffff', fontFamily: 'Inter, system-ui, sans-serif'}}>
      {/* Navigation */}
      <nav style={{position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #1a1a1a'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem'}}>
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
            
            <Link href="/" style={{color: '#e5e7eb', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Sign In Form */}
      <section style={{padding: '4rem 0', minHeight: '80vh', display: 'flex', alignItems: 'center'}}>
        <div style={{maxWidth: '400px', margin: '0 auto', padding: '0 2rem', width: '100%'}}>
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <h1 style={{fontSize: '2rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem'}}>
              Welcome Back
            </h1>
            <p style={{color: '#9ca3af', fontSize: '1rem'}}>
              Sign in to access your mining intelligence dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
            backgroundColor: 'rgba(26, 26, 26, 0.6)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid #374151',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            {error && (
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#fca5a5',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                fontSize: '0.875rem'
              }}>
                {error}
              </div>
            )}

            <div style={{marginBottom: '1.5rem'}}>
              <label style={{display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#d1d5db', marginBottom: '0.5rem'}}>
                Email Address
              </label>
              <div style={{position: 'relative'}}>
                <Mail size={20} style={{position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af'}} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                    backgroundColor: 'rgba(17, 17, 17, 0.8)',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.borderColor = '#3b82f6';
                      }}
                  onBlur={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.borderColor = '#374151';
                      }}
                />
              </div>
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={{display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#d1d5db', marginBottom: '0.5rem'}}>
                Password
              </label>
              <div style={{position: 'relative'}}>
                <Lock size={20} style={{position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af'}} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{
                    width: '100%',
                    padding: '0.75rem 2.5rem 0.75rem 2.5rem',
                    backgroundColor: 'rgba(17, 17, 17, 0.8)',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.borderColor = '#3b82f6';
                      }}
                  onBlur={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.borderColor = '#374151';
                      }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#9ca3af',
                    cursor: 'pointer',
                    padding: '0.25rem'
                  }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                backgroundColor: isLoading ? '#374151' : '#3b82f6',
                color: '#ffffff',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: 'none',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = '#2563eb'
                  target.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.4)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = '#3b82f6'
                  target.style.boxShadow = '0 4px 16px rgba(59, 130, 246, 0.3)'
                }
              }}
            >
              {isLoading ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid transparent',
                    borderTop: '2px solid #ffffff',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
              <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>
                Demo Mode: Any email/password combination will work
              </p>
            </div>
          </form>

          <div style={{marginTop: '2rem', textAlign: 'center'}}>
            <p style={{color: '#6b7280', fontSize: '0.875rem'}}>
              Don't have an account?{' '}
              <Link href="/contact" style={{color: '#3b82f6', textDecoration: 'none', fontWeight: '500'}}>
                Contact us for access
              </Link>
            </p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  )
}
