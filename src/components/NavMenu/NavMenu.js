import './NavMenu.css'

function Topbar() {
    return (
        <nav class="navMenu navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img className="logo" src="/assets/images/LogoFDMK.png" alt="logo" />
                <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/products">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/aboutus">About Us</a>
                        </li>
                    </ul>
                    <h1>Furnitures Digital Market</h1>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;