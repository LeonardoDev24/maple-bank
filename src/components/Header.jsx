import Link from "next/link"

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <img src="maple-bank.png" alt="Maple Bank logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" href="/tarjetas-de-credito">
                                Tarjetas de crédito
                            </Link>
                            <Link className="nav-link" href="/cuentas-de-debito">
                                Cuentas de débito
                            </Link>
                            <Link className="nav-link" href="/creditos">
                                Créditos
                            </Link>
                            <Link className="nav-link" href="/sucursales">
                                Sucursales
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header