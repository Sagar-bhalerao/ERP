
import { useSelector } from 'react-redux'
import './App.css'

import Index from './Index'

function App() {
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);
  console.log(isAuthenticated, user);
  console.log("The mesg fromh Akash ");

  return (
    <>
      <Index />
    </>
  )
}

export default App
