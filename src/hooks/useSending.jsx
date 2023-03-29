import { useState } from 'react'

export const useSending = () => {
  const [sending, setSending] = useState(false)
  const isSending = () => setSending(true)
  const isNotSending = () => setSending(false)
  return {
    sending,
    isSending,
    isNotSending
  }
}
