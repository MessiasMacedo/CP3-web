import { useEffect, useState } from 'react'
import { onSessionChange } from '../services/auth'

export function useSession() {
  // undefined = ainda verificando; null = sem login; objeto = logado
  const [session, setSession] = useState(undefined)

  useEffect(() => onSessionChange(setSession), [])

  return { session, loading: session === undefined }
}
