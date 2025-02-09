import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './pages/root'

createRoot(document.getElementById('known-age-app')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
