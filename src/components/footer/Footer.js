import Logo from '../../images/Logo.png';
function Footer() {
    return (
        <div className="row">
            <div className="container footer pb-3">
                <footer className="row offset-lg-2 offset-md-0 offset-sm-0 my-5">
                    <div className="col-md-12 col-lg-4 col-sm-12 mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img src={Logo} alt="#" width="80%" height="20%"/>
                        </a>
                        <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 mb-3">
                        <h5>Our Technologies</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">ReactJS</li>
                            <li className="nav-item mb-2">Gatsby
                            </li>
                            <li className="nav-item mb-2">NextJS
                            </li>
                            <li className="nav-item mb-2">NodeJS</li>
                            <li className="nav-item mb-2">GraphQL</li>
                            <li className="nav-item mb-2">Laravel</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3">
                        <h5>Our Services</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">Social media Marketing</li>
                            <li className="nav-item mb-2">Web & Mobile App Development
                            </li>
                            <li className="nav-item mb-2">Data & Analytics
                            </li>
                            <li className="nav-item mb-2">Google Marketing solutions</li>
                            <li className="nav-item mb-2">Search Engine Optimization</li>
                        </ul>
                    </div>


                    {/*<div className="col-md-4 col-sm-12 mb-3">*/}
                    {/*    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">*/}
                    {/*        <img src={Logo} alt="#" width="80%" height="20%"/>*/}
                    {/*    </a>*/}
                    {/*    <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-3 col-sm-12 mb-3">*/}
                    {/*    <h5>Our Technologies</h5>*/}
                    {/*    <ul className="nav flex-column">*/}
                    {/*        <li className="nav-item mb-2">ReactJS</li>*/}
                    {/*        <li className="nav-item mb-2">Gatsby*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item mb-2">NextJS*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item mb-2">NodeJS</li>*/}
                    {/*        <li className="nav-item mb-2">GraphQL</li>*/}
                    {/*        <li className="nav-item mb-2">Laravel</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-3 col-sm-12 mb-3">*/}
                    {/*    <h5>Our Services</h5>*/}
                    {/*    <ul className="nav flex-column">*/}
                    {/*        <li className="nav-item mb-2">Social media Marketing</li>*/}
                    {/*        <li className="nav-item mb-2">Web & Mobile App Development*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item mb-2">Data & Analytics*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item mb-2">Google Marketing solutions</li>*/}
                    {/*        <li className="nav-item mb-2">Search Engine Optimization</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </footer>
                <hr className="col-lg-6 col-md-10 offset-lg-3 offset-sm-0 offset-md-1"/>
                <div className="row offset-lg-5 offset-md-3 offset-sm-2">
                    <div className="col-lg-4 col-md-6 col-sm-8 text-center">
                        Privacy Policy | Terms & Conditions
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
