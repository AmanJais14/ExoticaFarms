import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Validate the Web Vitals data
    const { name, value, id, delta, rating, url, timestamp } = body
    
    if (!name || typeof value !== 'number') {
      return NextResponse.json(
        { error: 'Invalid Web Vitals data' },
        { status: 400 }
      )
    }

    // Log Web Vitals data (in production, you'd send this to your analytics service)
    console.log('Web Vitals Data:', {
      metric: name,
      value: value,
      id: id,
      delta: delta,
      rating: rating,
      url: url,
      timestamp: new Date(timestamp).toISOString(),
      userAgent: request.headers.get('user-agent'),
    })

    // Performance alerts for critical metrics
    const alerts = []
    
    if (name === 'LCP' && value > 2500) {
      alerts.push({
        type: 'warning',
        message: `LCP is ${value}ms (should be ≤ 2500ms)`,
        severity: 'high'
      })
    }
    
    if (name === 'CLS' && value > 0.1) {
      alerts.push({
        type: 'warning', 
        message: `CLS is ${value} (should be ≤ 0.1)`,
        severity: 'high'
      })
    }
    
    if (name === 'INP' && value > 200) {
      alerts.push({
        type: 'warning',
        message: `INP is ${value}ms (should be ≤ 200ms)`,
        severity: 'medium'
      })
    }
    
    if (name === 'FCP' && value > 1800) {
      alerts.push({
        type: 'info',
        message: `FCP is ${value}ms (should be ≤ 1800ms)`,
        severity: 'low'
      })
    }

    // In production, you would:
    // 1. Send data to Google Analytics, DataDog, or other analytics service
    // 2. Store in database for historical analysis
    // 3. Set up alerts for performance regressions
    // 4. Generate performance reports
    
    // Example: Send to Google Analytics
    // if (process.env.GA_MEASUREMENT_ID) {
    //   await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA_MEASUREMENT_ID}&api_secret=${process.env.GA_API_SECRET}`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       client_id: id,
    //       events: [{
    //         name: 'web_vitals',
    //         params: {
    //           metric_name: name,
    //           metric_value: value,
    //           metric_rating: rating
    //         }
    //       }]
    //     })
    //   })
    // }

    return NextResponse.json({
      success: true,
      alerts: alerts,
      message: 'Web Vitals data received'
    })

  } catch (error) {
    console.error('Error processing Web Vitals data:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
