
import { useSelector } from 'react-redux'
import './App.css'

import Index from './Index'

function App() {
  console.log("Hello From akash1");
  console.log("Hello From akash2");
  console.log("Hello From akash3");
  console.log("Hello From akash4");


  const { isAuthenticated, user } = useSelector((state: any) => state.auth);
  console.log(isAuthenticated, user);

  return (
    <>
      <Index />
    </>
  )
}

export default App
