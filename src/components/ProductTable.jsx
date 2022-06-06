import React, { useContext } from 'react'
import InputContext from './Context/getInput'
import ModalContext from './Context/ModalContext'
import toRupiah from '@develoka/angka-rupiah-js';


function ProductTable() {
    const {datas,setName,setType,setPrice,setQuantity,setSelectedData} = useContext(InputContext)
    const {setModal,setModifyModal,setDeleteModal} = useContext(ModalContext)
    
    const modifyHandler = (data) => {
        setModal(() => true)
        setModifyModal(() => true)
        setSelectedData(data)
        setName(data.name)
        setType(data.type)
        setPrice(data.price)
        setQuantity(parseInt(data.qty))
    } 
    const deleteHandler = (data) => {
        setModal(() => true)
        setSelectedData(data)
        setDeleteModal(() => true)
    }

    return (
    <div className="table-container">

    <table>
        <thead>
            <tr>
                <td>No.</td>
                <td>Name</td>
                <td>Type</td>
                <td>Price (per item)</td>
                <td>Qty</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
        {datas.map((data,i) => {
            return(
                <tr key={i}> 
                    <td>{data.id.slice(1)}</td>
                    <td>{data.name}</td>
                    <td>{data.type}</td>
                    <td>Rp {toRupiah(data.price,{symbol:null, floatingPoint: 0})}</td>
                    {/* <td>Rp {data.price}</td> */}
                    <td>{data.qty}</td>
                    <td className='action-btn'>
                        <button className='modify' onClick={() => modifyHandler(data)}>Modify</button>
                        <button className='delete' onClick={() => deleteHandler(data)}>Delete</button>
                    </td>
                </tr>
            )
        })}
        </tbody>

    </table>
    </div>

  )
}

export default ProductTable