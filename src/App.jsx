import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import BottomNav from './components/BottomNav'
import HomePage from './pages/HomePage'
import WorkoutsPage from './pages/WorkoutsPage'
import WorkoutDetailPage from './pages/WorkoutDetailPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

const NAV_ROUTES = ['/', '/workouts', '/me']

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="spinner" />
  if (!user) return <Navigate to="/login" replace />
  return children
}

function AppRoutes() {
  const location = useLocation()
  const showNav = NAV_ROUTES.includes(location.pathname)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/workouts/:id" element={<WorkoutDetailPage />} />
        <Route path="/me" element={
          <ProtectedRoute><ProfilePage /></ProtectedRoute>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      {showNav && <BottomNav />}
    </>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}
