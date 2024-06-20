import About_pics from '../aboutMe/images/IMG_20200703_154824_544.jpg'
import Tailor_pics from '../aboutMe/images/IMG_20210603_130722_076.jpg'
import software_pics from '../aboutMe/images/IMG_20240618_163435_887.jpg'
import '../aboutMe/AboutMe.css'
const AboutMe = () =>{
    return(
        <div className="Ab-main-contain">
            <div className='first-contain'>
              <div className="ab-pics"><img src={About_pics} alt="about-m"></img></div>
            </div>

            <div className="second-contain">
            <p>I love to draw alot,design is part of me
                to picture out what i can imagine in my head,my mind 
                then bring it to life.
              </p>
              <div className='tailor-pics'><img src={Tailor_pics} alt='t-pics'></img></div>
              <button className='yutbtn'>Youtube</button>
              <button className='instgbtn'>instagram</button>
            </div>

            <div className="third-contain">
              <div className="softw-pics"><img src={software_pics} alt='stf-pics'></img></div>
              <p>I am a software engineer also,i can sew, teach and design</p>
              <button className='linkdbtn'>Linkedin</button>

            </div>

            <div className='fourth-contain'></div>
        </div>
    )
}
export default AboutMe