import Navbar from "../navbar/Navbar"
import About_pics from '../aboutMe/images/IMG_20200703_154824_544.jpg'
import Tailor_pics from '../aboutMe/images/IMG_20200703_153959_548.jpg'
import software_pics from '../aboutMe/images/IMG_20240618_163435_887.jpg'
import Teach_pics from '../aboutMe/images/IMG_20210603_133459_277.jpg'
import '../aboutMe/AboutMe.css'
const AboutMe = () =>{
    return(
      <>
      <Navbar/>
        <div className="Ab-main-contain">
            <div className='first-contain'>
              <div className="ab-pics"><img src={About_pics} alt="about-m"></img></div>
             <div className="text-box">
             <p>Come and Explore your potential here</p>

             </div>
            </div>

            <div className="second-contain">
           <div className='header-textcont'>
           <p>I love to draw alot,design is part of me
                to picture out what i can imagine in my head,my mind 
                then bring it to life.
              </p>
              <div className='Social-MBtn'>
                <button className='youtubeBtn'>Youtube</button>
                <button className='instagramBtn'>instagram</button>
              
              </div> 
            </div> 
            
              <div className='tailor-pics'><img src={Tailor_pics} alt='t-pics'></img></div>
             
            </div>

            <div className="third-contain">
              <div className="softw-pics"><img src={software_pics} alt='stf-pics'></img></div>
              <div className='word-contain'>
                <p>I am a software engineer also, i can design, teach and sew</p>
               
                <button className='linkedinBtn'>LinkedIn</button>

              </div>
              
                

            </div> 

            <div className='fourth-contain'>
              <p>Teaching is part of what i love doing with the uniqueness in me 
                and the knowledge i have makes it easier for me to teach and make impact</p>
                <div className='teach-pics'><img src={Teach_pics} alt='teach'></img></div>
            </div> 
        </div>
        </>
    )
}
export default AboutMe