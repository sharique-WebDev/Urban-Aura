import React, { useState } from 'react';
import moreProdData from './moreProdData';
import MoreProdCard from './MoreProdCard';
import Footer from './Footer';

const Product = (props) => {
  const [sortOption, setSortOption] = useState('');

  // Filter by category
  const filteredProducts = moreProdData.filter(item =>
    item.category.includes(props.category)
  );

  // Sort based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'high':
        return b.newPrice - a.newPrice;
      case 'low':
        return a.newPrice - b.newPrice;
      case 'latest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <>
      <div className='container more-products mb-5'>
        <div className="d-flex justify-content-end my-2">
          <select
            className='form-select w-auto'
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="high">Price: high to low</option>
            <option value="low">Price: low to high</option>
            <option value="latest">Latest</option>
          </select>
        </div>

        <div className="row">
          {sortedProducts.map((item, idx) => (
            <div className="col-lg-3 col-md-4 col-6 my-2" key={idx}>
              <MoreProdCard
                id={item.id}
                image={item.image}
                category={item.category}
                name={item.name}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                bgColor={props.bgColor}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;