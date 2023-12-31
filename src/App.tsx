import { useEffect, useState } from "react"
import NavBar from '@/scenes/Navbar'
import { SelectedPage } from "./scenes/shared/type"; 
import Home from "./scenes/Home";
import Benefits from "./scenes/Benefits"
import OurClasses from "./scenes/OurClasses";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      else{
        setIsTopOfPage(false);
      }

       }
       window.addEventListener("scroll", handleScroll);
       return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-gray-20">
      <NavBar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <Contact setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
