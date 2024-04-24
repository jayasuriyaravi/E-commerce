import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import products from './products'; // Import the array of products

function Product() {
    const [sortBy, setSortBy] = useState('default'); // State for sorting option
    const [minPrice, setMinPrice] = useState(''); // State for minimum price filter
    const [maxPrice, setMaxPrice] = useState(''); // State for maximum price filter
    const [selectedCategory, setSelectedCategory] = useState('');

    const { category } = useParams();

    useEffect(() => {
        setSelectedCategory(category);
    }, [category]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
    };

    const filteredProducts = products.filter(product => {
        if (minPrice && parseInt(product.newPrice) < parseInt(minPrice)) {
            return false;
        }
        if (maxPrice && parseInt(product.newPrice) > parseInt(maxPrice)) {
            return false;
        }
        if (selectedCategory && product.categories.indexOf(selectedCategory) === -1) {
            return false;
        }
        return true;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'priceAsc') {
            return a.newPrice - b.newPrice;
        } else if (sortBy === 'priceDesc') {
            return b.newPrice - a.newPrice;
        } else {
            return 0;
        }
    });

    return (
        <div className="container-fluid">
            <div className="navlink-row1 row">
                <p><Link className='navPageLink' to="/">Home</Link> / Shop</p>
            </div>
            <div className="row">
                <div className="col text-light column-left-menu" style={{ backgroundColor: 'rgb(81, 37, 118)' }}>
                    <div className="container">
                        <form>
                            <div className="form-group mb-3">
                                <label className='my-3'>Sort By</label>
                                <select className="form-control" onChange={handleSortChange}>
                                    <option value="default">Default</option>
                                    <option value="priceAsc">Price: Low to High</option>
                                    <option value="priceDesc">Price: High to Low</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label className='my-3'>Price Range</label>
                                <input type="number" className="form-control mb-3" placeholder="Min" value={minPrice} onChange={handleMinPriceChange} />
                                <input type="number" className="form-control" placeholder="Max" value={maxPrice} onChange={handleMaxPriceChange} />
                            </div>
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
                <div className="col-9 p-4 bg-body-secondary column-right-product">
                    <div className="row align-items-center justify-content-evenly">
                        {sortedProducts.map(product => (
                            <Link key={product.id} to={`/products/${product.id}`} className="card p-0 m-3" style={{ width: '23rem', textDecoration: 'none', color: 'inherit' }}>
                                <div className="card-body">
                                    <img className="card-img-top" src={`/src/assets/${product.img}`} alt={product.productName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                    <h5 className="card-title mt-3">{product.productName}</h5>
                                    <p className="card-text">Price: ${product.newPrice}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
