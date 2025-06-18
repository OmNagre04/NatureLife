/* eslint-disable no-unused-vars */
import Capture from './Components/Capture'
import Cursor from './Components/Cursor'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import Library from './Components/Library'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Slider_text from './Components/Slider_text'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full'>
      <div >
        <Cursor/>
        <Navbar/>
        <Landing/>
        <Library/>
        <Capture/>
        <Slider/>
        <Slider_text/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
