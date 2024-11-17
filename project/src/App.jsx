import { useState } from 'react'
import './App.css'
import Header from './component/header.jsx'
import Sidebar from './component/sidebar.jsx'
import TopMiddleComponent from './component/topMiddleComponent.jsx'
function App() {
  const [count, setCount] = useState(0)
  const [accountName, setAccountName] = useState('kigewew826');

    const handleAccountChange = (newAccountName) => {
        setAccountName(newAccountName);
    }
  return (
    <>
      <Header accountName={accountName} onAccountChange={handleAccountChange} />
      <Sidebar/> 
      <TopMiddleComponent accountName={accountName} />
    </>
  )
}

export default App

