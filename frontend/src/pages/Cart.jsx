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
        <div className="container mt-4">
            <h1 className="text-center mb-4">Your Cart</h1>
            {cartItems.map(item => (
                <div className="card mb-3" key={item.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`/src/assets/${item.img}`} alt={item.productName} className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.productName}</h5>
                                <p className="card-text">Price: {item.newPrice}</p>
                                <div className="input-group">
                                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        className="form-control"
                                        min="1"
                                    />
                                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button className="btn btn-danger mt-3" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="text-end">
                <p className="total-amount">Total Amount: {totalAmount}</p>
            </div>
        </div>
    );
}

export default Cart;
