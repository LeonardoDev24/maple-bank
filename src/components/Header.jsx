function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="maple-bank.png" alt="Maple Bank logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="#">Tarjetas de crédito</a>
                            <a className="nav-link" href="#">Cuentas de débito</a>
                            <a className="nav-link" href="#">Créditos</a>
                            <a className="nav-link" href="#">Sucursales</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header