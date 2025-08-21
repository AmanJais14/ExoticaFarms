'use client'

import { useEffect } from 'react'

export default function WebVitalsReporter() {
  useEffect(() => {
    // Dynamic import to avoid blocking the main thread
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB, onINP } = await import('web-vitals')
      
      function sendToAnalytics(metric) {
        // Console logging for development
        console.log('Web Vital:', {
          name: metric.name,
          value: metric.value,
          id: metric.id,
          delta: metric.delta,
          rating: metric.rating
        })

        // Send to Google Analytics 4
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
            custom_map: {
              metric_id: metric.id,
              metric_value: metric.value,
              metric_delta: metric.delta,
              metric_rating: metric.rating
            }
          })
        }

        // Send to performance API endpoint (optional)
        if (process.env.NODE_ENV === 'production') {
          fetch('/api/analytics/web-vitals', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: metric.name,
              value: metric.value,
              id: metric.id,
              delta: metric.delta,
              rating: metric.rating,
              url: window.location.href,
              timestamp: Date.now()
            }),
          }).catch(console.error)
        }

        // Performance alerts for critical metrics
        if (metric.name === 'LCP' && metric.value > 2500) {
          console.warn('⚠️ LCP is above 2.5s:', metric.value + 'ms')
        }
        
        if (metric.name === 'CLS' && metric.value > 0.1) {
          console.warn('⚠️ CLS is above 0.1:', metric.value)
        }
        
        if (metric.name === 'INP' && metric.value > 200) {
          console.warn('⚠️ INP is above 200ms:', metric.value + 'ms')
        }
      }

      // Measure all Web Vitals
      getCLS(sendToAnalytics)
      getFID(sendToAnalytics)
      getFCP(sendToAnalytics)
        getLCP(sendToAnalytics)
        getTTFB(sendToAnalytics)

        // Measure INP (Interaction to Next Paint) - new Core Web Vital
        onINP(sendToAnalytics)
      } catch (error) {
        console.warn('Failed to load web-vitals:', error)
      }
    }

    loadWebVitals()

    // Performance observer for additional metrics
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Monitor long tasks that could affect INP
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('Long task detected:', {
              duration: entry.duration,
              startTime: entry.startTime,
              name: entry.name
            })
          }
        }
      })

      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] })
      } catch (e) {
        // Long task API not supported
      }

      // Monitor layout shifts in detail
      const layoutShiftObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.value > 0.1) {
            console.warn('Large layout shift detected:', {
              value: entry.value,
              sources: entry.sources?.map(source => ({
                node: source.node,
                currentRect: source.currentRect,
                previousRect: source.previousRect
              }))
            })
          }
        }
      })

      try {
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (e) {
        // Layout shift API not supported
      }

      // Monitor resource loading performance
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Flag slow loading resources
          if (entry.duration > 1000) {
            console.warn('Slow resource loading:', {
              name: entry.name,
              duration: entry.duration,
              size: entry.transferSize,
              type: entry.initiatorType
            })
          }
        }
      })

      try {
        resourceObserver.observe({ entryTypes: ['resource'] })
      } catch (e) {
        // Resource timing API not supported
      }

      // Cleanup observers on unmount
      return () => {
        longTaskObserver?.disconnect()
        layoutShiftObserver?.disconnect()
        resourceObserver?.disconnect()
      }
    }
  }, [])

  // Performance hints for development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Check for common performance issues
      const checkPerformance = () => {
        // Check for unoptimized images
        const images = document.querySelectorAll('img:not([loading])')
        if (images.length > 0) {
          console.warn('⚠️ Found images without loading attribute:', images.length)
        }

        // Check for missing alt attributes
        const imagesWithoutAlt = document.querySelectorAll('img:not([alt])')
        if (imagesWithoutAlt.length > 0) {
          console.warn('⚠️ Found images without alt attribute:', imagesWithoutAlt.length)
        }

        // Check for large DOM size
        const domSize = document.querySelectorAll('*').length
        if (domSize > 1500) {
          console.warn('⚠️ Large DOM size detected:', domSize, 'elements')
        }

        // Check for unused CSS
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
        console.log('📊 Stylesheets loaded:', stylesheets.length)
      }

      // Run checks after page load
      if (document.readyState === 'complete') {
        checkPerformance()
      } else {
        window.addEventListener('load', checkPerformance)
        return () => window.removeEventListener('load', checkPerformance)
      }
    }
  }, [])

  return null // This component doesn't render anything
}
