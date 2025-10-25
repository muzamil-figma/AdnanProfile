// PURPOSE: Initialize Firebase RTDB only when NEXT_PUBLIC_FIREBASE_RTD_ENABLED=true
export async function getRTDB(){
  if (process.env.NEXT_PUBLIC_FIREBASE_RTD_ENABLED !== 'true') return null
  const { initializeApp, getApps } = await import('firebase/app')
  const { getDatabase } = await import('firebase/database')
  const app = getApps().length ? getApps()[0] : initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
  })
  return getDatabase(app)
}
