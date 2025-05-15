import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@/index.css'
import App from '@/app.jsx'
import bootstrap from "./bootstrap";
createRoot(document.getElementById('root')).render(
  <StrictMode>  
      <App />
    </StrictMode>,
)
bootstrap();