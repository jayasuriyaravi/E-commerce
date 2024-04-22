import products from "../pages/products";


function Bcard() {

    const lastFiveProducts = products.slice(-5);
    return (
       
        <div className="row justify-content-center">
            {lastFiveProducts.map(product => (
                <div key={product.id} className="card p-0 m-3 bcard-container" style={{ width: '18rem' }}>
                    {/* Use conditional rendering for the image based on the product */}
                    <img src={'/src/assets/' + product.img} className="card-img-top p-0 m-0" alt="Product Image" />
                    <div className="card-body">
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text">price : {product.newPrice}</p>
                        {/* Add any additional content here */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Bcard;
