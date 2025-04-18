import { BrowserRouter } from "react-router-dom"
import './app.css'
import AppRouting from "./routing/AppRouting"
import { AuthProvider } from "./context/auth.context"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from "sonner"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <AppRouting />
        </BrowserRouter>
        <Toaster />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
