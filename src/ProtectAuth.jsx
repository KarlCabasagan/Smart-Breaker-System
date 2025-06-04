import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from './SupabaseClient'
import Loader from './pages/Loader'

function ProtectAuth({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
      setLoading(false)
    }
    getSession()
  }, [])

  if (loading) return <Loader/>
  if (session) return <Navigate to="/home" />
  return children
}

export default ProtectAuth