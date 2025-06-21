import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  
  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 })
  }

  try {
    // Leer el archivo de restaurantes
    const filePath = path.join(process.cwd(), 'app', 'api', 'google-maps', 'data', 'restaurants.json')
    const fileData = await fs.readFile(filePath, 'utf-8')
    const restaurants = JSON.parse(fileData)

    // Buscar restaurante por nombre o dirección (case insensitive)
    const lowerQuery = query.toLowerCase()
    const restaurant = restaurants.find((r: any) =>
      r.name.toLowerCase().includes(lowerQuery) ||
      (r.address && r.address.toLowerCase().includes(lowerQuery))
    )

    if (!restaurant) {
      return NextResponse.json({ error: 'Restaurante no encontrado' }, { status: 404 })
    }

    return NextResponse.json(restaurant)
  } catch (error) {
    console.error('Error leyendo restaurantes:', error)
    return NextResponse.json({ error: 'No se pudo obtener la información del restaurante' }, { status: 500 })
  }
} 