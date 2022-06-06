import React, { useContext } from 'react'
import ProductTable from '../components/ProductTable'
import '../styles/css/catalog.css'
import ModalContext from '../components/Context/ModalContext'
import {RiAddCircleFill} from 'react-icons/ri'
import { IconContext } from 'react-icons'

function Catalog() {
  const {addProductButton} = useContext(ModalContext)
  return (
    <div className='catalog'>
          <div className="add-product" onClick={addProductButton}>
            <IconContext.Provider value={{className:'icon'}}>
              <RiAddCircleFill />
            </IconContext.Provider>
            <button >Add Product</button>
          </div>
          <ProductTable />

    </div>
  )
}

export default Catalog