import { Outlet } from 'react-router-dom'
import { useAuth } from '@/context/auth.context'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function LayoutAuth() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className='w-full h-screen p-4'>
      <Outlet />
    </div>
  )
}
