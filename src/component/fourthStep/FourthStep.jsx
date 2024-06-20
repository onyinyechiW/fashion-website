import My_image from '../fourthStep/images/IMG_20210306_145933_472.jpg'
import '../fourthStep/FourthStep.css'
const FourthStep = () =>{
    return(
        <div className="Big-tank">
            <div className="small-tank">
                <div className="fourth-image"><img src={My_image} alt="fourth"></img></div>
                <p>Are you interested in learning how to sew ? even without prior
                    knowleged of sewing, we have basic videos made easy for beginners 
                </p>
                <div className='Mvideo-Btn'> 
                <button type="my-vdBtn">My Videos</button>
                </div> 
              


            </div>

        </div>
    )
}
export default FourthStep