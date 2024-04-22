import { Link } from 'react-router-dom';
import vision from '../assets/vision.png';
import mission from '../assets/leadership.png'
import './About.css'
function AboutUs() {
    return (
        <>
        
            <div className="navlink-row1 row">
                <p><Link to="/">Home</Link> / About Us</p>
            </div>

            <div className="about-row2 text-center ">
                <h1 className='h1'>About Us</h1>
                <p className=''>Sri Mahalakshmi Silks has stood at the forefront of the sericulture industry in Tamil Nadu, championing the complete process from silkworm cultivation to silk fabric weaving since the 1980s. We specialize in delivering authentic and affordable silk sarees, meticulously crafted from Mulberry and Tussar silk, featuring contemporary designs. Our diverse range encompasses Linen, Mysore silks, Khadi silks, and more, carefully sourced from handloom clusters across various regions. Each piece is a masterpiece of artistic finesse and intricate details, offering unparalleled elegance.</p>
            </div>

            <div className="about-row3 row ">
                <div className="col text-center align-items-center justify-content-center">
                    <img src={vision} alt="" className='abt-img' />
                    <h1 >Vission</h1>
                </div>
                <div className="col text-center align-items-center justify-content-center">
                    <img src={mission} alt="" className='abt-img' />
                    <h1>Mission</h1>
                </div>
            </div>

            <div className="about-row4 row">
                <div className="col text-center ">
                    <p>Sri Mahalakshmi Silks aims to stand as a preeminent figure in the silk industry, celebrated for our steadfast commitment to excellence and genuine craftsmanship. We are driven to sustain our pioneering heritage in sericulture by presenting a rich spectrum of silk sarees crafted from the finest Mulberry and Tussar silk, featuring contemporary and fashion-forward designs.</p>
                </div>
                <div className="col text-center ">
                    <p>At Sri Mahalakshmi Silks is to preserve and promote the timeless art of silk weaving, ensuring that every individual can experience the beauty and elegance of authentic silk sarees. We are committed to providing affordable, genuine, and original silk products while supporting the sericulture industry and the skilled artisans who create these masterpieces.</p>
                </div>
            </div>
        </>
    );
}
export default AboutUs;