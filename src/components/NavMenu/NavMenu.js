import './NavMenu.css'

function Topbar() {
    return(
        <nav className="navMenu">
            <img className="logo" src="/assets/images/LogoFDMK.png" alt="logo"/>
            <ul>
                <li><a href='/aboutus'>About US</a></li>
            </ul>
        </nav>
    )
}

export default Topbar;