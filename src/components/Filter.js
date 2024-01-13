import React from 'react'

function FilterInput({ onChange, checked, id, value, label, name }) {
  return (
    <div>
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

  return (
    <fieldset className='mt-20 p-2 pr-20 bg-orange'>
      <legend>Filtre</legend>
      <h2 className='pb-2 underline font-semibold'>
        Catégories
      </h2>
      <form
        className='pt-2 pr-5'
      >
        <FilterInput id="all" name="all" checked={selectedCategories?.length === 0} label="Tous" onChange={() => resetSelectedCategories()} />
        <FilterInput id="whiteChocolate" name="whiteChocolate" value="blanc" label="Chocolat blanc" onChange={e => setSelectedCategories(e.target.value)} />

        <div>
          <label htmlFor="milkChocolate">
            <input
              type="checkbox"
              id="milkChocolate"
              value="lait"
              // onClick={() => getFilteredList(filteredList)} 
              onChange={e => setSelectedCategories(e.target.value)}
            />
            Chocolat au lait
          </label>
        </div>
        <div>
          <label htmlFor="blackChocolate">
            <input
              type="checkbox"
              id="blackChocolate"
              value="noir"
              // onClick={() => getFilteredList(filteredList)} 
              onChange={e => setSelectedCategories(e.target.value)}
            />
            Chocolat noir
          </label>
        </div>
        <div>
          <label htmlFor="nut">
            <input
              type="checkbox"
              id="nut"
              value="noix"
              // onClick={() => getFilteredList(filteredList)} 
              onChange={e => setSelectedCategories(e.target.value)}
            />
            Noix/Noisette
          </label>
        </div>
        <div>
          <label htmlFor="fruit">
            <input type="checkbox"
              id="fruit"
              value="fruit"
              // onClick={() => getFilteredList(filteredList)} 
              onChange={e => setSelectedCategories(e.target.value)}
            />
            Fruit
          </label>
        </div>
        <div>
          <label htmlFor="caramel">
            <input
              type="checkbox"
              id="caramel"
              value="caramel"
              // onClick={() => getFilteredList(filteredList)} 
              onChange={e => setSelectedCategories(e.target.value)}
            />
            Caramel
          </label>
        </div>
        <div>
          <label htmlFor="liquor">
            <input
              type="checkbox"
              id="liquor"
              value="liqueur"
              // onClick={() => getFilteredList(filteredList)} 
              onChange={e => setSelectedCategories(e.target.value)}
            />
            Liqueur
          </label>
        </div>
      </form>
      <div className='pt-2'>
        <h2 className='pb-2 underline font-semibold'>Prix</h2>
        <div>
          <label htmlFor="minPrice">Prix min </label>
          <select name="minPrice" id="minPrice">
            <option value="">1€</option>
            <option value="5">5€</option>
            <option value="10">10€</option>
            <option value="15">15€</option>
            <option value="20">20€</option>
            <option value="25">25€</option>
            <option value="30">30€</option>
          </select>
        </div>
        <div>
          <label htmlFor="maxPrice">Prix max </label>
          <select name="maxPrice" id="maxPrice">
            <option value="">30€</option>
            <option value="25">25€</option>
            <option value="20">20€</option>
            <option value="15">15€</option>
            <option value="10">10€</option>
            <option value="5">5€</option>
            <option value="1">1€</option>
          </select>
        </div>
      </div>
      <div className='pt-2'>
        <h2 className='pb-2 underline font-semibold'>Note</h2>
        <div>
          <label htmlFor="minNote">Note min </label>
          <select name="minNote" id="minNote">
            <option value="">0</option>
            <option value="">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="maxNote">Note max </label>
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
    </fieldset>
  )
}

export default Filter