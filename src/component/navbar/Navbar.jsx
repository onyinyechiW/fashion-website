import '../navbar/Navbar.css'
const Navbar = () =>{
    return(
        <div className="max-contain">
            <div className="mini-contain">
                <div className="my-logo">
                    <h2>MWFS</h2>
                    <p>Mrs Wilson Fashion School</p> 
                    {/* <p>Stellonyin Fashion School</p>  */}
                    <p></p>
                
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about me">About Me</a></li>
                    <li><a href="/my videos">My Videos</a></li>
                    <li><a href="/pictures">Pictures</a></li>
                </ul>

            </div>
        </div>
    )
}
export default Navbar