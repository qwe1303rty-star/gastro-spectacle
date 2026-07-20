import { useState, useEffect, useCallback } from 'react'
import { initPush, subscribeToPushMessages } from '../utils/push'

export default function PushBanner() {
  const [status, setStatus] = useState('idle')
  const [notification, setNotification] = useState(null)

  const handleEnable = useCallback(async () => {
    setStatus('loading')
    const token = await initPush()
    if (token) {
      setStatus('enabled')
    } else {
      setStatus('denied')
    }
  }, [])

  useEffect(() => {
    if (!('Notification' in window)) return
    if (Notification.permission === 'granted') {
      handleEnable()
    } else if (Notification.permission === 'denied') {
      setStatus('denied')
    }
  }, [handleEnable])

  useEffect(() => {
    if (status !== 'enabled') return
    const unsubscribe = subscribeToPushMessages((payload) => {
      setNotification({
        title: payload.notification?.title || 'Новое уведомление',
        body: payload.notification?.body || ''
      })
      setTimeout(() => setNotification(null), 5000)
    })
    return unsubscribe
  }, [status])

  if (status === 'enabled' && !notification) return null

  if (notification) {
    return (
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-ink/95 backdrop-blur-md border border-gold/30 rounded-2xl p-4 shadow-2xl animate-slideDown">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
            <span className="text-gold text-lg">🔔</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gold font-medium text-sm">{notification.title}</p>
            <p className="text-pearl/70 text-xs mt-1 truncate">{notification.body}</p>
          </div>
        </div>
      </div>
    )
  }

  if (status === 'idle') {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-ink/95 backdrop-blur-md border border-gold/20 rounded-2xl p-4 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
            <span className="text-gold text-lg">🔔</span>
          </div>
          <div className="flex-1">
            <p className="text-pearl text-sm font-medium">Уведомления о заказах</p>
            <p className="text-pearl/50 text-xs mt-0.5">Получайте мгновенные оповещения</p>
          </div>
          <button
            onClick={handleEnable}
            className="bg-gold text-ink px-4 py-2 rounded-xl text-xs font-medium hover:bg-gold/90 transition-colors flex-shrink-0"
          >
            Включить
          </button>
        </div>
      </div>
    )
  }

  return null
}
