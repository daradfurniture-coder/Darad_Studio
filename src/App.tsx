import { Routes, Route } from 'react-router'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Catch-all: any unknown hash/path still shows the site instead of a blank page */}
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
