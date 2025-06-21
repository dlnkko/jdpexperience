import { useState, useEffect, useCallback } from 'react'

interface GoogleMapsData {
  rating: number | null
  user_ratings_total: number
  price_level: number | null
  formatted_address: string
  website: string | null
  google_maps_url: string | null
  place_id: string
}

interface UseGoogleMapsDataReturn {
  data: GoogleMapsData | null
  loading: boolean
  error: string | null
  fetchData: (query: string) => Promise<void>
}

export function useGoogleMapsData(): UseGoogleMapsDataReturn {
  const [data, setData] = useState<GoogleMapsData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async (query: string) => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/google-maps?query=${encodeURIComponent(query)}`)
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch data')
      }

      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, fetchData }
} 