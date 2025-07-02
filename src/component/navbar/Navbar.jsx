import '../navbar/Navbar.css'
const Navbar = () =>{
    return(
        <div className="max-contain">
            <div className="mini-contain">
                <div className="my-logo">
                    <div className='logo'>MWFS</div>
                    <div>Mrs Wilson Fashion School</div> 
                    {/* <p>Stelloyin Fashion world/School</p>  */}
                    <p></p>
                
                </div>
                <ul className='list-style'>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about me">About Me</a></li>
                    <li><a href="/my videos">My Videos</a></li>
                    <li><a href="/pictures">Pictures</a></li>
                </ul>

            </div>
        </div>
    )
}
export default Navbar