import React, { useContext } from 'react'
import InputContext from '../Context/getInput'
import ModalContext from '../Context/ModalContext'

function DeleteProduct() {
    const {closeModal,deleteModal} = useContext(ModalContext)
    const {datas,setDatas,selectedData} = useContext(InputContext)

    const deleteProductData = () => {
        setDatas(datas.filter((el) => el.id !== selectedData.id))
        closeModal()
    }

  return (
    <aside className={`delete modal ${deleteModal ? "active":""}`}>
        {console.log(deleteModal)}
        <h1>Delete Product</h1>
        <p>Are you sure you want to delete this product?</p>
        <div className="cta">
            <button onClick={deleteProductData}>Yes</button>
            <button onClick={closeModal}>No</button>
        </div>
    </aside>
  )
}

export default DeleteProduct