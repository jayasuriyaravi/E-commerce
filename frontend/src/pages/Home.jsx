import img1 from '../assets/img7.jpg'
import img2 from '../assets/img6.jpg'
import img3 from '../assets/img12.jpg'
import img4 from '../assets/img4.jpg'
import './Home.css';
import Bcard from '../component/Bcard';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';


function Home() {
    const slideRight = useSpring({ marginLeft: 0, from: { marginLeft: -100 }, config: { duration: 1000 } });
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
    // const slideUp = useSpring({ marginTop: 0, from: { marginTop: 100 }, config: { duration: 1000 } });

    return (
        <div className="container-fluid m-0">
            {/* <animated.div style={fadeIn}> */}
                <div className="row align-items-center row1">
                    <div className="col explore text-center justify-content-center">
                        <animated.div style={slideRight}>
                            <h1 className='text-center'>
                                A Symphony of Heritage And style
                            </h1>
                            <Link to="/product" className='btn text-light m-4 p-2 btn-exp'> SHOP NOW</Link>
                        </animated.div>
                    </div>
                    <div className="col" style={{ backgroundColor: "rgb(81, 37, 118)", padding: "0px" }}>
                        <animated.div style={slideRight}>
                            <img src={img1} alt="" width="100%" height="100%" />
                        </animated.div>
                    </div>
                    <div className="col" style={{ backgroundColor: "rgb(81, 37, 118)", padding: "0px" }}>
                        <animated.div style={slideRight}>
                            <img src={img2} alt="" width="100%" height="100%" />
                        </animated.div>
                    </div>
                </div>
            {/* </animated.div> */}
            <animated.div style={fadeIn}>

                <div className="row2 row align-content-center justify-content-center text-light text-center  " style={{ height: '400px' }}>

                    <h1>
                        The Latest Look
                    </h1>
                    <p className='text'>
                        Our newest silk arrivals await!
                        Don’t miss out, shop now at Sri Mahalakshmi Silks!
                    </p>
                    <Link to="/product" className='btn btn-exp m-3 p-3'>
                        Explore Now
                    </Link>
                </div>
            </animated.div>

            <div className="row3 row my-5 justify-content-center">
                <h1 className='text-center'>NEW ARRIVALS</h1>
                <Bcard />
            </div>

            <div className="row align-items-center row4 p-3 bg-body-secondary justify-content-center ">
                <div className="col-8 m-3 ">
                    <img src={img3} alt="" width="100%" height="90%" />
                </div>
                <div className="col explore text-center justify-content-center align-items-center">
                    <div className="row justify-content-center align-items-center">
                        <h1 className='text-center '>
                            Elevate your style
                            in the threads of tradition
                        </h1>
                        <Link to="/product" className='btn text-light m-4 p-2 btn-exp'> SHOP NOW</Link>
                    </div>
                    <div className="row mt-5  ">
                        <div className="col">
                            <img src={img4} alt="" width="100%" height="90%" />
                        </div>
                        <div className="col">
                            <img src={img4} alt="" width="100%" height="90%" />
                        </div>
                        <div className="col">
                            <img src={img4} alt="" width="100%" height="90%" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home;