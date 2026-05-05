import { useState, useEffect } from 'react'

export function Header() {
  const [isOnline, setIsOnline] = useState<boolean>(false)
  const [isChecking, setIsChecking] = useState<boolean>(true)

  useEffect(() => {
    const checkHealth = async () => {
      const controller = new AbortController()
      // 3-second timeout for the health check request
      const timeoutId = setTimeout(() => controller.abort(), 3000)
      
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api'
        const response = await fetch(`${apiBaseUrl}/health`, { 
          signal: controller.signal,
          method: 'GET'
        })
        if (response.ok) {
          setIsOnline(true)
        } else {
          setIsOnline(false)
        }
      } catch (error) {
        setIsOnline(false)
      } finally {
        setIsChecking(false)
        clearTimeout(timeoutId)
      }
    }

    // Initial check on mount
    checkHealth()

    // Poll every 10 seconds
    const intervalId = setInterval(checkHealth, 10000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <header className="border-b border-zinc-800/80 sticky top-0 z-10 bg-zinc-950/90 backdrop-blur">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold text-zinc-100 hover:text-white transition-colors">
          SHIVA NANDHA E J
        </a>
        <nav className="flex items-center gap-6">
          <a href="#experience" className="text-sm text-zinc-400 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-sm text-zinc-400 hover:text-white transition-colors">Projects</a>
          
          {/* Backend Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50">
            {isChecking ? (
              <>
                <span className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse"></span>
                <span className="text-xs text-zinc-400 font-medium">Checking Backend...</span>
              </>
            ) : isOnline ? (
              <>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs text-zinc-300 font-medium">Backend: Online</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-xs text-zinc-300 font-medium">Backend: Offline</span>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
