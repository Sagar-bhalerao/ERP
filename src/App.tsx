
import { useSelector } from 'react-redux'
import './App.css'

import Index from './Index'
import Footer from './components/Footer/Footer';

function App() {

  const { isAuthenticated, user } = useSelector((state: any) => state.auth);
  console.log(isAuthenticated, user);
  
  return (
    <>
    <div className='min-h-[93vh]'>
      <Index />
      </div>
      <Footer/>
    </>
  )
}

export default App