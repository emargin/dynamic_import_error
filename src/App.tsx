import { useState } from 'react'
import './App.css'
import { BigCompanyLogo, SmallCompanyLogo } from './logos/logoCompiler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      hello world
      <BigCompanyLogo/>
      <SmallCompanyLogo/>
      
    </>
  )
}

export default App
