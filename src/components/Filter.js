import React, { useState } from 'react'

function FilterInput({ onChange, checked, id, value, label, name }) {
  return (
    <div className='lg:text-white md:text-brown'>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          value={value}
          name={name}
          onChange={onChange}
          checked={checked}
        />
        {label}
      </label>
    </div>
  )
}


function Filter({ selectedCategories, resetSelectedCategories, setSelectedCategories }) {

  const [isCategoryOpen, setIsCategoryOpen] = useState(true)
  const [isPriceOpen, setIsPriceOpen] = useState(true)
  const [isNoteOpen, setIsNoteOpen] = useState(true)

  return (
    <fieldset className='mt-20 p-2 pr-20 lg:bg-orange md:bg-white'>
      <legend>FILTRE</legend>
      <section>
        <h2 className='text-yellow underline font-semibold'>
          Catégories
          <button onClick={() => setIsCategoryOpen((prev) => !prev)}>+</button>
        </h2>
        <div className={isCategoryOpen ? "showFilter" : "hideFilter"}>
          <form className='pt-2 pr-5'>
            <FilterInput id="all" name="all" checked={selectedCategories?.length === 0} label="Tous" onChange={() => resetSelectedCategories()} />
            <FilterInput id="whiteChocolate" name="whiteChocolate" value="blanc" label="Chocolat blanc" onChange={e => setSelectedCategories(e.target.value)} />
            <FilterInput id="milkChocolate" name="milkChocolate" value="lait" label="Chocolat au lait" onChange={e => setSelectedCategories(e.target.value)} />
            <FilterInput id="blackChocolate" name="blackChocolate" value="noir" label="Chocolat noir" onChange={e => setSelectedCategories(e.target.value)} />
            <FilterInput id="nut" name="nut" value="noix" label="Noix/Noisette" onChange={e => setSelectedCategories(e.target.value)} />
            <FilterInput id="fruit" name="fruit" value="fruit" label="Fruit" onChange={e => setSelectedCategories(e.target.value)} />
            <FilterInput id="caramel" name="caramel" value="caramel" label="Caramel" onChange={e => setSelectedCategories(e.target.value)} />
            <FilterInput id="liquor" name="liquor" value="liqueur" label="Liqueur" onChange={e => setSelectedCategories(e.target.value)} />
          </form>
        </div>
      </section>
      <div className='pt-4'>
        <h2 className='text-yellow pb-2 underline font-semibold'>Prix
          <button onClick={() => setIsPriceOpen((prev) => !prev)}>+</button></h2>
        <div className={isPriceOpen ? "showFilter" : "hideFilter"}>
          <label htmlFor="minPrice" className='lg:text-white md:text-brown'>Prix min </label>
          <select name="minPrice" id="minPrice">
            <option value="">1€</option>
            <option value="5">5€</option>
            <option value="10">10€</option>
            <option value="15">15€</option>
            <option value="20">20€</option>
          </select>
        </div>
        <div className={isPriceOpen ? "showFilter" : "hideFilter"}>
          <label htmlFor="maxPrice" className='lg:text-white md:text-brown'>Prix max </label>
          <select name="maxPrice" id="maxPrice">
            <option value="20">20€</option>
            <option value="15">15€</option>
            <option value="10">10€</option>
            <option value="5">5€</option>
            <option value="1">1€</option>
          </select>
        </div>
      </div>
      <div className='pt-4'>
        <h2 className='text-yellow pb-2 underline font-semibold'>Note
          <button onClick={() => setIsNoteOpen((prev) => !prev)}>+</button></h2>
        <div className={isNoteOpen ? "showFilter" : "hideFilter"}>
          <label htmlFor="minNote" className='lg:text-white md:text-brown'>Note min </label>
          <select name="minNote" id="minNote">
            <option value="">0</option>
            <option value="">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={isNoteOpen ? "showFilter" : "hideFilter"}>
          <label htmlFor="maxNote" className='lg:text-white md:text-brown'>Note max </label>
          <select name="maxNote" id="maxNote">
            <option value="">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
            <option value="0">0</option>
          </select>
        </div>
      </div>
      <style>{`
      .hideFilter {
        display: none;
      }
      .showFilter {
        display: block;
        width: 100%;
      }
    `}</style>
    </fieldset>
  )
}

export default Filter