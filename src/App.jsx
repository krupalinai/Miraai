import { useState } from 'react'
import './App.css'
import Percentage from './components/percentage'
import GlobalGiants from './components/global_giants'
import Features from './components/features'
import TrustMiraai from './components/trust_miraai'
import DoBest from './components/do_best'
import AiContent from './components/ai_content'
import Header from './components/header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Percentage />
      <GlobalGiants />
      <Features />
      <TrustMiraai />
      <DoBest />
      <AiContent />
    </>
  )
}

export default App
