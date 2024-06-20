import Navbar from "../navbar/Navbar"
import Hero from "../heroPage/Hero" 
import SecondStep from "../secondStep/SecondStep"
import ThirdStep from "../thirdStep/ThirdStep"
import FourthStep from "../fourthStep/FourthStep"
const HomePage = () =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        
        <SecondStep/>
        <ThirdStep/>
        <FourthStep/>       

        </>
    )
}
export default HomePage