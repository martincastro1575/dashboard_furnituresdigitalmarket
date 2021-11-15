function Footer() {
    return (
        <footer className="sticky-footer bg-white">
            <div className="container-fluid container-footer">
                <div className='row'>
                    <div className='col-lg-3 col-icon'>
                    <div class="section-footer">
                        <h5>Métodos de pago</h5>
                        <i class="fab fa-paypal" title="PayPal"></i>
                        <i class="fab fa-bitcoin" title="BitCoin"></i>
                        <i class="far fa-credit-card" title="Credit Card"></i>
                    </div>
                    </div>
                    <div className='col-lg-3 col-icon'>
                    <div class="social-media">
                        <h5>Redes Sociales</h5>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-instagram-square"></i>
                    </div>
                    </div>
                    <div className='col-lg-6 col-icon'>

                    <div class="contact">
                        <h5>Contacto</h5>
                        <ul>
                            <li><i class="fas fa-home"></i> Av Santa Fe 3000</li>
                            <li><i class="fas fa-envelope"></i> contact @fdmk.com</li>
                            <li><i class="fas fa-mobile-alt"></i> 11 15 9343-2344</li>
                        </ul>
                    </div>
                    </div>

                </div>
            </div>
        </footer >
    )
}

export default Footer;