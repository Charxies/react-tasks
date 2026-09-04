import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './ProtectedRoute'
import { DashboardPage } from './pages/DashboardPage'
import { LoginPage } from './pages/LoginPage'
import { ProjectTasksPage } from './pages/ProjectTasksPage.tsx'
import { theme } from './theme'
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
              <BrowserRouter basename={routerBasename}>
                  <Routes>
                      <Route path="/login" element={<LoginPage />} />
                      <Route element={<ProtectedRoute />}>
                          <Route path="/dashboard" element={<DashboardPage />} />
                          <Route path="/projects/:projectId/tasks" element={<ProjectTasksPage />} />
                      </Route>
                      <Route path="*" element={<Navigate to="/dashboard" replace />} />
                  </Routes>
              </BrowserRouter>
          </AuthProvider>
      </ThemeProvider>
  )
}

export default App
