import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderSection from './components/HeaderSection'
import BodySection from './components/BodySection'
import Termos from './components/Termos' // novo componente que você vai criar

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/projeto_reviver/home"
            element={
              <div className="page-content">
                <HeaderSection />
                <BodySection />
              </div>
            }
          />
          <Route path="/projeto_reviver/termos" element={<Termos />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App