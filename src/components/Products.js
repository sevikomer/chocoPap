import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom';
import Filter from './Filter';

function Products({ productItems, handleAddProduct }) {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [minPrice, setMinPrice] = useState(1)
    const [maxPrice, setMaxPrice] = useState(20)
    const [minNote, setMinNote] = useState(0)
    const [maxNote, setMaxNote] = useState(5)

    const filteredList = useMemo(getFilteredList, [selectedCategories, minPrice, maxPrice, minNote, maxNote, productItems]);

    function getFilteredList() {
        if (selectedCategories?.length === 0) {
            return productItems.filter((productItems) => (productItems.price >= minPrice && productItems.price <= maxPrice) && (productItems.note >= minNote && productItems.note <= maxNote));
        }

        const transformedProducts = productItems.map((p) => ({
            ...p,
            category: Object.entries(p.category).map(([key, value]) => {
                if (value) {
                    return key;
                } return p.category
            }).filter((c) => c)
        }));

        return transformedProducts.filter((productItems) => (productItems.category.find((c) => selectedCategories.includes(c))) && (productItems.price >= minPrice && productItems.price <= maxPrice) && (productItems.note >= minNote && productItems.note <= maxNote));
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
        <div className='lg:flex sm:block'>
            <div>
                <Filter filteredList={filteredList}
                    setSelectedCategories={updateSelectedCategories}
                    resetSelectedCategories={resetSelectedCategories}
                    selectedCategories={selectedCategories}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    setMinNote={setMinNote}
                    setMaxNote={setMaxNote} />
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {filteredList.map((productItem) => (
                            <div key={productItem.id} className="group relative">
                                <Link to={`/product/${productItem.id}`}>
                                    <img
                                        alt={productItem.image}
                                        src={productItem.image}
                                        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                    />
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href={productItem.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {productItem.title}
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">Note : {productItem.note}</p>
                                        </div>
                                        <p className="text-sm font-medium text-blue">{productItem.price} €</p>
                                    </div>
                                </Link>
                                {/* <div className='flex justify-center items-center bg-yellow hover:bg-orange active:bg-orange focus:outline-none focus:ring focus:ring-yellow mt-2 p-2 text-white rounded'>
                                    <button onClick={() => handleAddProduct(productItem)}>Ajouter au panier</button>
                                </div> */}
                            </div>

                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Products