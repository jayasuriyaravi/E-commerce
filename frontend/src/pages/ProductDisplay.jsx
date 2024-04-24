import products from './products';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../component/CartContext';
import './ProductDisplay.css';

function ProductDisplay() {
    const { id } = useParams();
    const product = products.find(x => x.id === parseInt(id));
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        navigate('/cart'); // Use navigate instead of history.push
    };

    if (!product) {
        return <div>Product not found {id}</div>;
    }

    return (
        <div className="container-fluid">
            <div className="navlink-row1 row mb-4">
                <p>
                    <Link className='navPageLink' to="/">Home</Link> /
                    <Link className='navPageLink' to="/product">Product  </Link>/
                    {product.productName}- {product.id}
                </p>
            </div>
            <div className="row justify-content-center p-5">
                {/* <div className="col-2 p-3">
                    <div className="row small-img-container" style={{ backgroundImage: `url('/src/assets/saree1.jpg')` }}>
                        <img src={'/src/assets/' + product.img} alt={product.productName} className="img-fluid small-img" />
                    </div>
                    <div className="row small-img-container">
                        <img src={'/src/assets/' + product.img} alt="" className="img-fluid small-img" />
                    </div>
                    <div className="row small-img-container">
                        <img src={'/src/assets/' + product.img} alt="" className="img-fluid small-img" />
                    </div>
                    <div className="row small-img-container">
                        <img src={'/src/assets/' + product.img} alt="" className="img-fluid small-img" />
                    </div>
                </div> */}
                <div className="col-md-6 p-5">
                    {/* Display main product image */}
                    <img src={'/src/assets/' + product.img} alt={product.productName} className="img-thumbnail" width="100%" height="100%" />
                </div>
                <div className="col-md-6 p-5">
                    {/* Display product details */}
                    <h1 className="product-name mb-3">{product.productName}</h1>
                    <div className="row">
                        <p className="product-price">
                            Price:
                            <span className="old-price">{product.oldPrice}</span>
                            <span className="new-price">{product.newPrice}</span>
                        </p>
                    </div>
                    <p className="product-desc">{product.description}</p>
                    <button onClick={handleAddToCart} className="btn btn-exp btn-cart">ADD TO CART</button>
                    <p className="categories">
                        <span className="cat-heading">Category :</span> {product.categories.join(', ')}
                    </p>
                </div>
            </div>


        </div>
    );
}

export default ProductDisplay;
