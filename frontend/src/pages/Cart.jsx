import { useCart } from '../component/CartContext'; // Import useCart hook
import './Cart.css'; // Import CSS file for additional styling (create this file)

function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart(); // Use cartItems, removeFromCart, and updateQuantity from context

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const handleQuantityChange = (productId, newQuantity) => {
        updateQuantity(productId, newQuantity); // Call updateQuantity from context
    };

    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => total + (item.newPrice * item.quantity), 0);

    return (
        <div className="container">
            <h1 className="text-center">Your Cart</h1>

            {/* Displaying cart items */}
            <div className="cart-container">
                {cartItems.map(item => (
                    <div className="row my-4" key={item.id}>
                        <div className="col-md">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-4 col-sm-4 ">
                                        <img src={`/src/assets/${item.img}`} className="img-fluid rounded-start" alt="Product Image" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="col-md-8 col-sm-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.productName}</h5>
                                            <p className="card-text">Price: {item.newPrice}</p>
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-secondary me-2" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                                <span>{item.quantity || 1}</span>
                                                <button className="btn btn-secondary ms-2" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                                <button className="btn btn-danger ms-2" onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-end my-4 total-price">
                <h5>Total Price: ${totalAmount.toFixed(2)}</h5>
            </div>
            <div className="text-center">
                <button className="btn btn-primary btn-exp">Buy Now</button>
            </div>
        </div>
    );
}

export default Cart;
