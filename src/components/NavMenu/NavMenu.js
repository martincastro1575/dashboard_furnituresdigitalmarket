import './NavMenu.css'

function Topbar() {
    return (
        <nav className="navMenu navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img className="logo" src="/assets/images/LogoFDMK.png" alt="logo" />
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/products">Products</a>
                        </li>
                    </ul>
                    <h1>Furnitures Digital Market</h1>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;