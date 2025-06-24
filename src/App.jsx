import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import Home from './pages/Home'
import Authentication from './pages/Authentication'
import Login from './pages/Login'
import Register from './pages/Register'
import Loader from './pages/Loader'
import Power from './pages/Power'
import Control from './pages/Control'
import Profile from './pages/Profile'
import ProtectedRoute from './ProtectedRoute'
import ProtectAuth from './ProtectAuth'
import Verify from './pages/Verify'
import Verifyforzoho from './pages/VerifyZoho'

export const UserContext = createContext({})

function App() {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <Loader/>
    )
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#E5E4E2]">
      <div className="h-screen w-screen bg-[#FAF9F6] md:w-1/2 xl:w-1/4 relative">
        <Router>
        <UserContext.Provider value={[user, setUser]}>
          <Routes>
            <Route path="/" element={<ProtectAuth><Authentication /></ProtectAuth>} />
            <Route path="/login" element={<ProtectAuth><Login /></ProtectAuth>} />
            <Route path="/register" element={<ProtectAuth><Register /></ProtectAuth>} />
            <Route path="/verify" element={<ProtectedRoute><Verify /></ProtectedRoute>} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/power" element={<ProtectedRoute><Power /></ProtectedRoute>} />
            <Route path="/control" element={<ProtectedRoute><Control /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/zohoverify/verifyforzoho.html" element={<Verifyforzoho />} />
          </Routes>
          </UserContext.Provider>
        </Router>
      </div>
    </div>
  )
}

export default App
