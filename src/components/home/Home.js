import Nav from "../navBar/Nav";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import Footer from "../footer/Footer";

function Home() {
    return (
        <div className="container-fluid">
            <Nav/>
            {/*second div*/}
            <div className="row middle-wrapper px-lg-5 py-lg-5 px-md-0 py-md-0 px-sm-0 py-sm-0">
                <div className="col-lg-4 col-md-12 col-sm-12 text-capitalize text-content-wrapper">
                    We crush your competitors, goals, and sales records - without the B.S.
                    <button className="mt-3 btn btn-yellow text-uppercase">Get free consultation</button>
                </div>
            </div>
            {/*bottom div*/}
            <div className="bottom-wrapper">
                <div className="div-animation-left row offset-md-1 offset-lg-1  offset-sm-0 mb-5 mb-md-0">
                    <div className="col-md-4 col-sm-12">
                        <img src={img1} alt="#" width="100%" height="100%"/>
                    </div>
                    <div className="align-items-center col-md-6 col-sm-12 d-flex">
                        <div className="text-center text-md-start">
                            <h3>Web & Mobile App Development</h3>
                            <p>
                                Your web and mobile Apps are pieces of the puzzle to grow your business. We use
                                frameworks which tailor content and engagement methods to respond to different intents
                                shown by your potential customers who interact with your business online.
                            </p>
                            <button className="mt-3 btn btn-learn-more text-uppercase">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className="div-animation-right row offset-md-1 offset-lg-1  offset-sm-0 mb-5 mb-md-0">
                    <div className="align-items-center col-md-6 col-sm-12 d-flex">
                        <div className="text-center text-md-start">
                            <h3>Digital Strategy Consulting</h3>
                            <p>
                                Your digital strategy should complement the overall marketing strategy of the company.
                                In online marketing, each component will never work in isolation and every business
                                needs a different mix. We provide a clear concept and strategic overview to find the
                                most efficient model for your business.
                            </p>
                            <button className="mt-3 btn btn-learn-more text-uppercase">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src={img2} alt="#" width="100%" height="100%"/>
                    </div>
                </div>
            </div>
            {/*footer*/}
            <Footer/>
        </div>

    );
}

export default Home;
