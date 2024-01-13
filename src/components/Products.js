import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom';
import Filter from './Filter';

function Products({ productItems, handleAddProduct }) {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const filteredList = useMemo(getFilteredList, [selectedCategories, productItems]);

    function getFilteredList() {
        if (selectedCategories?.length === 0) {
            return productItems;
        }

        const transformedProducts = productItems.map((p) => ({
            ...p,
            category: Object.entries(p.category).map(([key, value]) => {
                if (value) {
                    return key;
                }
            }).filter((c) => c)
        }));

        return transformedProducts.filter((productItems) => productItems.category.find((c) => selectedCategories.includes(c)));
    };

    const updateSelectedCategories = (value) => {
        if (selectedCategories.find((category) => category === value)) {
            const updatedCategories = selectedCategories.filter((category) => category !== value);
            setSelectedCategories(updatedCategories);
        } else {
            setSelectedCategories([...selectedCategories, value]);
        }
    }

    const resetSelectedCategories = () => {
        setSelectedCategories([]);
    }


    return (
        <div className='flex'>
            <div>
                <Filter filteredList={filteredList}
                    setSelectedCategories={updateSelectedCategories}
                    resetSelectedCategories={resetSelectedCategories}
                    selectedCategories={selectedCategories} />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {filteredList.map(productItem => (
                    <div key={productItem.id} className='p-20 text-center'>
                        <Link to="/product">
                            <div>
                                <img src={productItem.image} alt='' className='w-60 h-40' />
                            </div>
                            <div>
                                <h3>{productItem.title}</h3>
                            </div>
                            <div>{productItem.price} €</div>
                            <div>Note : {productItem.note} </div>
                        </Link>
                        <div>
                            <button className='bg-yellow hover:bg-orange active:bg-orange focus:outline-none focus:ring focus:ring-yellow m-2 p-2 text-white rounded' onClick={() => handleAddProduct(productItem)}>Ajouter au panier</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Products