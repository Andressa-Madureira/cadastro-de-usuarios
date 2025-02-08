import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'

import {GlobalStyles} from './styles/GlobalStyles.js'

import Home from './pages/Home/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home/>
  </StrictMode>,
)
