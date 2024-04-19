import { Link } from 'react-router-dom';
import searchIcon from '../assets/searchIcon.png';
import locationIcon from '../assets/locationIcon.png';
import userIcon from '../assets/userIcon.png';
import heartIcon from '../assets/heartIcon.png';
import cartIcon from '../assets/cartIcon.png';
import logo from '../assets/logo3.jpg';

function Head() {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top px-5 nav-bg">
                <div className="container-fluid px-5">
                    <Link className="navbar-brand text-light" to="/">
                        Clothify <img src={logo} alt="" width="50px" height="50px" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-black">
                            <li className="nav-item m-3">
                                <img src={heartIcon} alt="" width="20px" height="20px" />
                            </li>
                            <li className="nav-item m-3">
                                <img src={userIcon} alt="" width="20px" height="20px" />
                            </li>
                            <li className="nav-item m-3">
                                <img src={searchIcon} alt="" width="20px" height="20px" />
                            </li>
                            <li className="nav-item m-3">
                                <img src={locationIcon} alt="" width="20px" height="20px" />
                            </li>
                        </ul>
                        <div className="nav-item dropdown m-3">
                            <a
                                className="nav-link"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Need Help?
                            </a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">Name</li>
                                <li>
                                    <a className="dropdown-item navbar-text" href="">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav  mb-2 mb-lg-0 text-light">
                            <li className="nav-item m-3 ">
                                <img src={cartIcon} alt="" width="20px" height="20px" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* adding the pages navigations */}
            <ul className="nav justify-content-center small-nav m-3 ">
                <li className="nav-item">
                    <Link to="/" className="nav-link navbar-text" aria-current="page" >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/aboutus" className="nav-link navbar-text" >
                        About Us
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link navbar-text" href="#">
                        Shop
                    </a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navbar-text" href="#" tabIndex="-1" aria-disabled="true" to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Head;