import './Bcard.css'; // Make sure to import your CSS file
import img from '../assets/img4.jpg';

function Bcard() {
    return (
        <div className="card p-0 m-3 bcard-container" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top p-0 m-0" alt="Product Image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on.</p>
                <button className="btn btn-primary center-btn">Click Me</button>
            </div>
        </div>
    );
}

export default Bcard; 
