import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Progressbar from './Components/Navbar/Progressbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Progressbar/> */}
    <App />
  </StrictMode>,
)
