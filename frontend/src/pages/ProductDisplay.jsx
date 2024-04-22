import products from './products'; // Import the array of products
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ProductDisplay.css';

function ProductDisplay() {
    // Get the product ID from the URL parameter
    const { id } = useParams();

    console.log(products);
    console.log(id);


    // Find the product with the matching ID
    const product = products.find(x => x.id === parseInt(id));

    console.log(product)
    // If product is not found, display a message or redirect to a 404 page
    if (!product) {
        return <div>Product not found {id}</div>; // or redirect to a 404 page
    }

    return (
        <>

            <div className="container-fluid">
            <div className="navlink-row1 row mb-4">
                <p><Link to="/">Home</Link> / <Link to="/product">Product  </Link>/ {product.productName}- {product.id}</p>
            </div>
                <div className="row justify-content-center p-3 ">
                    <div className="productdisplay-img-list col-2 p-3 mx-5">
                        {/* Display product images */}
                        <div className="row">
                            <img src={'/src/assets/' + product.img} alt={product.productName} className="img-thumbnail" />
                        </div>
                        <div className="row">
                            <img src={'/src/assets/' + product.img} alt="" className="img-thumbnail" />
                        </div>
                        <div className="row">
                            <img src={'/src/assets/' + product.img} alt="" className="img-thumbnail" />
                        </div>
                        <div className="row">
                            <img src={'/src/assets/' + product.img} alt="" className="img-thumbnail" />
                        </div>
                    </div>

                    <div className="col-5 p-3">
                        {/* Display main product image */}
                        <img src={'/src/assets/' + product.img} alt={product.productName} className="" height="100%" width="100%" />
                    </div>

                    <div className="col-4 p-5">
                        {/* Display product details */}
                        <h1 className='product-name mb-3'>{product.productName}</h1>
                        <div className="row">
                            <p className='product-price'>Price: <span className='old-price'>{product.oldPrice}</span>   <span className='new-price'>{product.newPrice}      </span></p>
                        </div>
                        <p className='product-desc'>{product.description}</p>
                        <button className="btn btn-exp btn-cart">ADD TO CART</button>
                        <p className='categories'><span className='cat-heading'>Category :</span> {product.categories.join(', ')}</p>
                    </div>
                </div>
                <div className="shipping-info">
                    <p className="underline">Shipping Charges:</p>
                    <p>Within TN: Rs. 75 per product</p>
                    <p>To Karnataka, Kerala, AP, Maharashtra, Odisha: Rs. 100 per product</p>
                    <p>Rest of India: Rs. 150 per product</p>
                    <p>International Orders: Actual shipping costs (starting at Rs. 3800 for 1st 1 kg, plus Rs. 1000 per additional kg)</p>
                    <p className="underline">Delivery Times:</p>
                    <p>Within TN: 2-3 working days</p>
                    <p>Rest of India: 4-10 working days</p>
                    <p>International: 10-15 working days</p>
                    <p className="underline">Additional Charges:</p>
                    <p>International orders may incur taxes, import duties, and customs fees.</p>
                    <p className="underline">Quality Assurance:</p>
                    <p>All products undergo rigorous quality checks before shipping.</p>
                    <p>If you notice any tampering, please reject the delivery and return it to the service provider.</p>
                    <p className="underline">Tracking:</p>
                    <p>Shipment tracking details will be emailed to you.</p>
                </div>
            </div>

        </>
    );
}

export default ProductDisplay;
