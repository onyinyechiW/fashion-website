import Hero_pics from '../heroPage/images/IMG_20210302_133459_584.jpg'
import '../heroPage/Hero.css'
const Hero = () =>{
    return(
        <div className="Main-contain">
            <div className="inner-contain">
                <p>Fashion is beautiful,fashion is creativity,
                    fashion speaks, it tells who you are,fashion is all
                     about life itself,fashion is style.My fashion my style
                </p>
            
                <div className="my-hero"><img src={Hero_pics} alt="hero"></img></div>

            </div>
        </div>
    )
}
export default Hero