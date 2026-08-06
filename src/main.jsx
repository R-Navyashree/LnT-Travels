import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function AnalyticsTracker() {
  useEffect(() => {
    const trackPageView = () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname + window.location.search + window.location.hash,
        })
      }
    }

    const timer = window.setInterval(() => {
      if (typeof window.gtag === 'function') {
        trackPageView()
        window.clearInterval(timer)
      }
    }, 200)

    const handleRouteChange = () => {
      trackPageView()
    }

    window.addEventListener('hashchange', handleRouteChange)
    window.addEventListener('popstate', handleRouteChange)

    const originalPushState = window.history.pushState
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args)
      handleRouteChange()
    }

    return () => {
      window.clearInterval(timer)
      window.removeEventListener('hashchange', handleRouteChange)
      window.removeEventListener('popstate', handleRouteChange)
      window.history.pushState = originalPushState
    }
  }, [])

  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnalyticsTracker />
    <App />
  </StrictMode>,
)
