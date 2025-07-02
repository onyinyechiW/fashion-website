import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './component/navbar/Navbar';
import './App.css';
import AboutMe from './component/aboutMe/AboutMe';
// import FourthStep from './component/fourthStep/FourthStep';
import HomePage from "./component/homePage/HomePage";
// import FooterPage from "./component/footerPage/FooterPage";
// import Hero from './component/heroPage/Hero';
// import SecondStep from './component/secondStep/SecondStep';
// import ThirdStep from './component/thirdStep/ThirdStep';

function App() {
  return (
    <div className="App">
       <Router> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutMe" element={<AboutMe />} />  
        </Routes> 
      </Router>     

      {/* <Navbar/>      */}
      {/* <Hero/>     */}
      {/* <SecondStep/> */}
      {/* <ThirdStep/>  */}
      {/* <FourthStep/>   */}
      {/* <AboutMe/>   */}
      {/* <FooterPage/> */}
    </div>
  );
}

export default App;
