function Footer() {
    const actualYear = new Date().getFullYear()
    return (
        <footer>
            <div className="footer-content">
                <div id="social-media">
                    <small>Síguenos en:</small>
                    <ul className="social-links">
                        <li>
                            <a href="https://facebook.com" target="_blank">
                                <img src="social/facebook.png" alt="Facebook logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com">
                                <img src="social/instagram.png" alt="Instagram logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <img src="social/twitter.png" alt="Twitter logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com">
                                <img src="social/youtube.png" alt="Youtube logo" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="about-us">
                    <a href="#">Sucursales</a>
                    <a href="#">Contacto</a>
                    <a href="#">Costos y comisiones</a>
                </div>
            </div>
            <p>© {actualYear} Maple Bank S. A. de C. V. Institución de Banca Múltiple</p>
        </footer>
    )
}

export default Footer