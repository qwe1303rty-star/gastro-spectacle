import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import GAS_URL from '../config'

let messaging = null

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDEaUYx2g9aLW0BTGjqi23sOJJbReBOzas',
  authDomain: 'gastrospektakl.firebaseapp.com',
  projectId: 'gastrospektakl',
  storageBucket: 'gastrospektakl.firebasestorage.app',
  messagingSenderId: '183207893908',
  appId: '1:183207893908:web:11244c6ecb6b49686f4d81'
}

const VAPID_KEY = 'BBdwoJOzpjJ98Sn1nkOJajKkXU8zipEDFGAmmtYv8cU05NoAWBuu2UAsBU3vEsoRDSV_kR47wUUfKqCFP1X_Kx0'

export async function initPush() {
  if (!('serviceWorker' in navigator) || !('Notification' in window)) {
    console.log('Push notifications not supported')
    return null
  }

  try {
    const permission = await Notification.requestPermission()
    if (permission !== 'granted') {
      console.log('Push permission denied')
      return null
    }

    const app = initializeApp(FIREBASE_CONFIG)
    messaging = getMessaging(app)

    const token = await getToken(messaging, { vapidKey: VAPID_KEY })

    if (token) {
      await registerToken(token)
      console.log('FCM token:', token.substring(0, 40) + '...')
      return token
    }

    return null
  } catch (err) {
    console.error('Push init error:', err)
    return null
  }
}

export function subscribeToPushMessages(callback) {
  if (!messaging) return () => {}
  return onMessage(messaging, (payload) => {
    console.log('Foreground push:', payload)
    callback(payload)
  })
}

async function registerToken(token) {
  try {
    const res = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        action: 'registerToken',
        token: token,
        platform: 'web-pwa'
      })
    })
    const data = await res.json()
    console.log('Token registered:', data.message)
  } catch (err) {
    console.error('Token registration failed:', err)
  }
}
