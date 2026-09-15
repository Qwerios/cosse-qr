import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // The app has no "new version available" prompt, so the default 'prompt'
      // strategy left an updated service worker waiting indefinitely: users kept
      // the old build until every tab was closed. autoUpdate activates it as
      // soon as it is ready.
      registerType: 'autoUpdate',
      // Icons referenced from index.html rather than from the manifest. The
      // plugin precaches the manifest and its own icons automatically, so
      // listing those here as well would only duplicate precache entries.
      includeAssets: ['apple-touch-icon.png', 'favicon-16x16.png', 'favicon-32x32.png'],
      workbox: {
        // Workbox only precaches js/css/html by default. The QR logo is drawn
        // into the centre of every generated code, so the bundled image in
        // assets/ has to be added or the app produces logo-less QR codes as
        // soon as it runs offline.
        globPatterns: ['**/*.{js,css,html}', 'assets/*.png'],
      },
      manifest: {
        name: 'Cosse Camper Adventure QR',
        short_name: 'Cosse-QR',
        description: 'QR-codegenerator voor de sites en boekjes van Cosse Camper Adventure',
        // The interface is Dutch. Left unset the plugin defaults this to 'en',
        // which makes screen readers pronounce the installed app's name and
        // description with English phonetics.
        lang: 'nl',
        // Left unset these fall back to vite-plugin-pwa's own defaults, which
        // themed installed copies Vue green (#42b883) while index.html
        // advertised the Cosse green.
        theme_color: '#60a72e',
        background_color: '#ffffff',
        display: 'standalone',
        // start_url and scope are derived from the base path below.
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      }
    }),
  ],
  base: '/cosse-qr/'
})

