import Third_pics from '../thirdStep/images/IMG_20210302_100759_657.jpg'
import '../thirdStep/ThirdStep.css'

const ThirdStep = () =>{
    return(
        <div className="Big-contain">
            <div className="Small-contain">
                <p>With our sewing technique here sewing is made easy and fun too</p>
                <div className="third-pics"><img src={Third_pics} alt="tpics"></img></div>

            </div>

        </div>
    )
}
export default ThirdStep