import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './Core/infrastructure/app/App'
import { About } from './views/About/About'
import './index.css'
import { MyWork } from './views/MyWork/MyWork';
import { Home } from './views/Home/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/mywork" element={<MyWork/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
