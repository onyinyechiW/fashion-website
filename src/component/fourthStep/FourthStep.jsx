import My_image from '../fourthStep/images/IMG_20210306_145933_472.jpg'
import '../fourthStep/FourthStep.css'
const FourthStep = () =>{
    return(
        <div className="Big-tank">
          <div className="fourth-image"><img src={My_image} alt="fourth"></img></div>
          
            <div className="small-tank">
                <p>Are you interested in learning how to sew ? even without no
                    knowleged of sewing, we have basic videos made easy for beginners 
                </p>
                
                <button className='Mvideo-Btn'>My Videos</button>
                 
            </div>

        </div>
    )
}
export default FourthStep