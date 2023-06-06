import Logo from '../../images/Logo.png';
function Nav() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg px-lg-5 px-md-5 px-sm-0">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex" href="#">
                        <img src={Logo} alt="#" width="160" height="28"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT US</a>
                                </li> <li className="nav-item">
                                <a className="nav-link" href="#">CAREERS</a>
                            </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
