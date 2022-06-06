import React, { useContext } from 'react'
import InputContext from '../Context/getInput'

function ProductModalBuilder() {
  const {name,setName,type,setType,price,setPrice,quantity,setQuantity} = useContext(InputContext)
  const increment = (e) => {
    e.preventDefault()
    setQuantity((qty) => qty + 1)
  }
  const decrement = (e,quantity) => {
    e.preventDefault()
    if (quantity > 0) {
      setQuantity((qty) => qty - 1)
    }
  }

  return (
    <form>
      <section className='name'>
        <label htmlFor="name">Product Name</label>
          <div className="field" >
              <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} autoComplete="off"/>
          </div>
      </section>
      <section className='type'>
        <label htmlFor="type">Product Type</label>
        <div className="field">
          <input type="text" name='type' value={type} onChange={(e) => setType(e.target.value)} autoComplete="off"/>
        </div>
      </section>
      <section className='price'>
        <label htmlFor="price">Product Price</label>
        <div className="field">
          <p>Rp</p>
          <input type="number" name='price' value={price === 0 ? "": price} onChange={(e) => setPrice(e.target.value)} autoComplete="off"/>
        </div>
      </section>
      <section className='quantity'>
        <label htmlFor="quantity">Qty</label>
        <div className="field">
          <button onClick={(e) => decrement(e,quantity) } disabled={quantity === 0}> <span></span> </button>
          <p className='quantity'>{quantity}</p>
          <button onClick={increment}><span></span><span></span></button>
        </div>
      </section>
    </form>
  )
}

export default ProductModalBuilder