// import Carousel from "../component/Carousel";
import img1 from '../assets/img7.jpg'
import img2 from '../assets/img6.jpg'
import img3 from '../assets/img12.jpg'
import img4 from '../assets/img4.jpg'
import './Home.css';
import Bcard from '../component/Bcard';
function Home() {


    return (
        <div className="container-fluid m-0">
            <div className="row align-items-center row1">
                <div className="col explore text-center justify-content-center">
                    <h1 className='text-center'>
                        A Symphony of Heritage And style
                    </h1>
                    <button className='btn text-light m-4 p-2 btn-exp'> SHOP NOW</button>
                </div>
                <div className="col" style={{ backgroundColor: "rgb(81, 37, 118)", padding: "0px" }}>
                    <img src={img1} alt="" width="100%" height="100%" />
                </div>
                <div className="col" style={{ backgroundColor: "rgb(81, 37, 118)", padding: "0px" }}>
                    <img src={img2} alt="" width="100%" height="100%" />
                </div>
            </div>
            <div className="row2 row align-content-center justify-content-center text-light text-center  " style={{ height: '400px' }}>

                <h1>
                    The Latest Look
                </h1>
                <p className='text'>
                    Our newest silk arrivals await!
                    Don’t miss out, shop now at Sri Mahalakshmi Silks!
                </p>
                <button className='btn btn-exp m-3 p-3'>
                    Explore Now
                </button>
            </div>

            <div className="row3 row my-5 justify-content-center">
                <h1 className='text-center'>NEW ARRIVALS</h1>
                <Bcard />
                <Bcard />
                <Bcard />
                <Bcard />
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
                        <button className='btn text-light m-4 p-2 btn-exp'> SHOP NOW</button>
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