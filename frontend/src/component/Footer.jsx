

function Footer() {
    return (
        <footer className="text-light footer-bg">
            {/* Grid container */}
            <div className="container-fluid p-4">
                {/*Grid row*/}
                <div className="row mt-4">
                    {/*Grid column 1*/}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">About company</h5>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti.
                        </p>
                        <p>
                            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                            molestias.
                        </p>
                        <div className="mt-4">
                            <a type="button" className="btn btn-floating btn-light btn-lg m-2"><i className="fab fa-facebook-f"></i></a>
                            <a type="button" className="btn btn-floating btn-light btn-lg m-2"><i className="fab fa-dribbble"></i></a>
                            <a type="button" className="btn btn-floating btn-light btn-lg m-2"><i className="fab fa-twitter"></i></a>
                            <a type="button" className="btn btn-floating btn-light btn-lg m-2"><i className="fab fa-google-plus-g"></i></a>
                        </div>
                    </div>
                    {/*Grid column 1*/}

                    {/*Grid column 2*/}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                        <div className="form-outline form-white mb-4">
                            <label className="form-label" htmlFor="formControlLg">Search</label>
                            <input type="text" id="formControlLg" className="form-control form-control-lg" />
                        </div>

                        <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Warsaw, 00-967, Poland</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">contact@example.com</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
                            </li>
                        </ul>
                    </div>
                    {/*Grid column 2*/}

                    {/*Grid column 3*/}
                    <div className="col mb">
                        <h5 className="text-uppercase mb-4">Sign up to our newsletter</h5>

                        <div className="form-outline form-white mb-4">
                            <label className="form-label" htmlFor="form5Example2">Email address</label>
                            <input type="email" id="form5Example2" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-dark btn-block p-2 ">Subscribe</button>
                    </div>
                    {/*Grid column 3*/}
                </div>
                {/*Grid row*/}
            </div>
            {/* Grid container */}

            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            {/* Copyright */}
        </footer>
    );
}

export default Footer;
