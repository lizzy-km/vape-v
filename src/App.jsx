import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Header from "./components/Header";
import Scroll from "./Scroll";

const App = () => {

  const { handleScroll, isScroll } = Scroll()

    if (isScroll == true) {
      const navBar =  document.getElementById('navBar')
  
      navBar?.classList.add('bg-[#18181889]')
      navBar?.classList.remove('bg-[#21212100]')
    }else {
      const navBar =  document.getElementById('navBar')
  
      navBar?.classList.remove('bg-[#18181889]')
      navBar?.classList.add('bg-[#21212100]')
    }
  

  return (
    <BrowserRouter>
    <div onScroll={handleScroll} className=" relative flex max-[500px]:flex-col w-full overflow-y-auto max-h-screen ">

    
          <Header />
      <Routes>
        <Route exact path="/" element={<Landing/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
