import { useState } from 'react'
import './App.css'
import AdviceGenWrapper from './components/AdviceGenWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AdviceGenWrapper />
    </div>
  )
}

export default App
