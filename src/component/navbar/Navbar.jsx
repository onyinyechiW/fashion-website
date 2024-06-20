import '../navbar/Navbar.css'
const Navbar = () =>{
    return(
        <div className="max-contain">
            <div className="mini-contain">
                <div className="my-logo">
                    <h2><a href="/">Logo</a></h2>

                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/my videos">My Videos</a></li>
                    <li><a href="/pics">Pictures</a></li>
                </ul>

            </div>
        </div>
    )
}
export default Navbar