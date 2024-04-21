import img from '../assets/saree2.jpg';

function ProductDisplay() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={img} alt="" className="img-thumbnail" />
                        </div>
                        <div className="col-md-3">
                            <img src={img} alt="" className="img-thumbnail" />
                        </div>
                        <div className="col-md-3">
                            <img src={img} alt="" className="img-thumbnail" />
                        </div>
                        <div className="col-md-3">
                            <img src={img} alt="" className="img-thumbnail" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <img src={img} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1>name</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="productdisplay-right-price-old">1100</div>
                        </div>
                        <div className="col-md-6">
                            <div className="productdisplay-right-price-new">1200</div>
                        </div>
                    </div>
                    <p className='productdisplay-right-description'>
                        A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                    </p>
                    <button className="btn btn-primary">ADD TO CART</button>
                    <p className='productdisplay-right-category'><span>Category :</span> women, t-shirt, crop top</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
