import React from 'react'

function Filter() {
  return (
    <>
    <fieldset className='mt-20 p-2 pr-20 bg-orange'>
    <legend>Filtre</legend>
    <div className='pt-2 pr-5'>
    <h2 className='pb-2 underline font-semibold'>Catégories</h2>
    <div>
    <input type="checkbox" id="all" name="all" checked />
    <label for="all">Tous</label>
  </div>
  <div>
    <input type="checkbox" id="whiteChocolate" name="whiteChocolate" />
    <label for="whiteChocolate"> Chocolat blanc</label>
  </div>
  <div>
    <input type="checkbox" id="milkChocolate" name="milkChocolate" />
    <label for="scales"> Chocolat au lait</label>
  </div>
  <div>
    <input type="checkbox" id="blackChocolate" name="blackChocolate" />
    <label for="blackChocolate"> Chocolat noir</label>
  </div>
  <div>
    <input type="checkbox" id="nut" name="nut" />
    <label for="nut"> Noix/Noisette</label>
  </div>
  <div>
    <input type="checkbox" id="fruit" name="fruit" />
    <label for="fruit"> Fruit</label>
  </div>
  <div>
    <input type="checkbox" id="caramel" name="caramel" />
    <label for="caramel"> Caramel</label>
  </div>
  <div>
    <input type="checkbox" id="liquor" name="liquor" />
    <label for="liquor"> Liqueur</label>
  </div>
  </div>
  <div className='pt-2'>
  <h2 className='pb-2 underline font-semibold'>Prix</h2>
  <div>
  <label for="minPrice">Prix min </label>
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
    <label for="maxPrice">Prix max </label>
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
  <label for="minNote">Note min </label>
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
    <label for="maxNote">Note max </label>
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
    </>
    
  )
}

export default Filter