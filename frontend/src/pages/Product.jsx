import { useState } from 'react';
import { Link } from 'react-router-dom';
import products from './products'; // Import the array of products
// import imf from ''
function Product() {
    const [sortBy, setSortBy] = useState('default'); // State for sorting option
    const [minPrice, setMinPrice] = useState(''); // State for minimum price filter
    const [maxPrice, setMaxPrice] = useState(''); // State for maximum price filter
    const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category

    // Function to handle sorting
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    // Function to handle minimum price filter
    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    // Function to handle maximum price filter
    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    // Function to handle category selection
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
    };

    // Filter products based on selected criteria
    const filteredProducts = products.filter(product => {
        // Filter by price range
        if (minPrice && parseInt(product.newPrice) < parseInt(minPrice)) {
            return false;
        }
        if (maxPrice && parseInt(product.newPrice) > parseInt(maxPrice)) {
            return false;
        }
        // Filter by selected category
        if (selectedCategory && product.categories.indexOf(selectedCategory) === -1) {
            return false;
        }
        return true;
    });

    // Sort products based on selected sorting option
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'priceAsc') {
            return a.newPrice - b.newPrice;
        } else if (sortBy === 'priceDesc') {
            return b.newPrice - a.newPrice;
        } else {
            return 0; // Default order
        }
    });

    return (
        <div className="container-fluid">
            <div className="about-row1 row">
                <p><Link to="/">Home</Link> / Shop</p>
            </div>
            <div className="row">
                <div className="col text-light sticky-top  " style={{ backgroundColor: 'rgb(81, 37, 118) ' }}>
                    {/* Sorting options */}
                    <div className="container">
                        <form>
                            <div className="form-group mb-3 ">
                                <label className='my-3'>Sort By</label>
                                <select className="form-control" onChange={handleSortChange}>
                                    <option value="default">Default</option>
                                    <option value="priceAsc">Price: Low to High</option>
                                    <option value="priceDesc">Price: High to Low</option>
                                </select>
                            </div>
                            {/* Price filter */}
                            <div className="form-group mb-3">
                                <label className='my-3'>Price Range</label>
                                <input type="number" className="form-control mb-3" placeholder="Min" value={minPrice} onChange={handleMinPriceChange} />
                                <input type="number" className="form-control" placeholder="Max" value={maxPrice} onChange={handleMaxPriceChange} />
                            </div>
                            {/* Category filter */}
                            <div className="form-group">
                                <label className='my-3'>Categories</label>
                                {['Wedding Silk', 'Benares Silk', 'Raw Silk', 'Mysore Silk', 'Bridal Collection', 'Tussar Silk Saree', 'Soft Silk', 'Muslin'].map(category => (
                                    <div key={category} className="form-check mb-3">
                                        <input type="radio" className="form-check-input" id={category} name="category" value={category} onChange={handleCategoryChange} checked={selectedCategory === category} />
                                        <label className="form-check-label" htmlFor={category}>{category}</label>
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-9 bg-body-secondary ">
                    {/* Display filtered and sorted products */}
                    <div className="row align-items-center  justify-content-evenly  ">
                        {sortedProducts.map(product => (
                            <div key={product.id} className="card p-0 m-3" style={{ width: '23rem' }}>
                                <img className="card-img-top" src={'/src/assets/saree3.jpg'} alt={product.productName} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.productName}</h5>
                                    <p className="card-text">Price: ${product.newPrice}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
