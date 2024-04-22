import { Link } from 'react-router-dom';
import searchIcon from '../assets/searchIcon.png';
import locationIcon from '../assets/locationIcon.png';
import userIcon from '../assets/userIcon.png';
import heartIcon from '../assets/heartIcon.png';
import cartIcon from '../assets/cartIcon.png';
import logo from '../assets/logo3.jpg';

function Head() {
    const googleLocationLink = 'https://www.google.com/search?q=KCT&oq=KCT&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEINDY0M2owajGoAgCwAgA&sourceid=chrome&ie=UTF-8';


    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top  navbar-dark  nav-bg"> {/* Change navbar-dark to navbar-light */}
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
                                <Link to="/signup">
                                    <img src={userIcon} alt="" width="20px" height="20px" />
                                </Link>
                            </li>
                            <li className="nav-item m-3 text-light ">
                                <img src={searchIcon} alt="" width="20px" height="20px" />Search
                            </li>
                            <a href={googleLocationLink} className="nav-item m-3">
                                <img src={locationIcon} alt="" width="20px" height="20px" />
                            </a>
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
                                <li className="dropdown-item"><b>Email:</b> kctcollege@gmail.com</li>
                                <li className="dropdown-item">
                                    <b>PhoneNo:</b>9999999999
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
                    <Link to="/product" className="nav-link navbar-text">
                        Shop
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link navbar-text">
                        Contact
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link navbar-text dropdown-toggle text-black" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Curated Collection
                    </a>
                    <ul className="dropdown-menu dropdown-menu-columns" aria-labelledby="navbarDropdown">
                        <div className="row">
                            <div className="col">
                                <li><Link className="dropdown-item" to="/product/Wedding%20Silk">Wedding Silk</Link></li>
                                <li><Link className="dropdown-item" to="/product/Benares%20Silk">Benares Silk</Link></li>
                                <li><Link className="dropdown-item" to="/product/Raw%20Silk">Raw Silk</Link></li>
                                <li><Link className="dropdown-item" to="/product/Mysore%20Silk">Mysore Silk</Link></li>
                            </div>
                            <div className="col">
                                <li><Link className="dropdown-item" to="/product/Bridal%20Collection">Bridal Collection</Link></li>
                                <li><Link className="dropdown-item" to="/product/Tussar%20Silk%20Saree">Tussar Silk Saree</Link></li>
                                <li><Link className="dropdown-item" to="/product/Soft%20Silk">Soft Silk</Link></li>
                                <li><Link className="dropdown-item" to="/product/Muslin">Muslin</Link></li>
                            </div>
                        </div>
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default Head;