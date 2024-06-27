
import { useSelector } from 'react-redux'
import './App.css'

import Index from './Index'

function App() {
  console.log("Hello From akash");
  console.log("Hello From akash");

  console.log("Hello From akash");



  const { isAuthenticated, user } = useSelector((state: any) => state.auth);
  console.log(isAuthenticated, user);

  return (
    <>
      <Index />
    </>
  )
}

export default App
