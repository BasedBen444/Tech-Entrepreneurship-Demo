import './App.css'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
      <button onClick={() => setCount(c => c + 1)} style={{ marginLeft: 12 }}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </main>
  )
}