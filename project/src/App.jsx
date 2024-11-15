import { useState } from 'react'
import './App.css'
import Header from './component/header.jsx'
import Sidebar from './component/sidebar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Sidebar/>
    </>
  )
}

export default App

