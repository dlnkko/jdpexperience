# Configuración de Google Maps API

## 🚀 Pasos para obtener tu API Key

### 1. Crear proyecto en Google Cloud Console
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la facturación (necesario para usar las APIs)

### 2. Habilitar APIs necesarias
En la consola de Google Cloud, habilita estas APIs:
- **Places API** - Para buscar lugares y obtener ratings
- **Maps JavaScript API** - Para funcionalidades de mapas

### 3. Crear credenciales
1. Ve a "APIs & Services" > "Credentials"
2. Click en "Create Credentials" > "API Key"
3. Copia tu API key

### 4. Configurar restricciones (Recomendado)
Para mayor seguridad, configura restricciones en tu API key:
- **Application restrictions**: HTTP referrers
- **API restrictions**: Solo Places API y Maps JavaScript API

### 5. Configurar en tu proyecto
1. Crea un archivo `.env.local` en la raíz del proyecto
2. Agrega tu API key:
```
GOOGLE_MAPS_API_KEY=tu_api_key_aqui
```

## ✨ Funcionalidades implementadas

### Ratings en tiempo real
- ⭐ **Estrellas actualizadas** desde Google Maps
- 📊 **Número de reseñas** en tiempo real
- 💰 **Nivel de precio** actualizado
- 📍 **Dirección formateada** por Google

### Indicadores visuales
- 🔄 **Icono de actualización** cuando los datos vienen de Google Maps
- ⏳ **Spinner de carga** mientras se obtienen los datos
- 🛡️ **Fallback** a datos locales si la API falla

### Datos obtenidos
- Rating promedio
- Número total de reseñas
- Nivel de precio (1-4)
- Dirección formateada
- URL del sitio web
- Link directo a Google Maps

## 💡 Notas importantes

- **Límites de API**: Google Places API tiene límites de uso gratuito
- **Caché**: Los datos se obtienen cada vez que se carga un restaurante
- **Fallback**: Si la API falla, se usan los datos locales
- **Seguridad**: Nunca expongas tu API key en el código frontend

## 🔧 Troubleshooting

### Error: "Google Maps API key not configured"
- Verifica que el archivo `.env.local` existe
- Asegúrate de que la variable `GOOGLE_MAPS_API_KEY` está definida
- Reinicia el servidor de desarrollo

### Error: "Place not found"
- Verifica que el nombre y dirección del restaurante sean correctos
- Algunos lugares pueden no estar en Google Maps

### Error: "API quota exceeded"
- Has alcanzado el límite gratuito de la API
- Considera actualizar a un plan de pago o usar solo datos locales 