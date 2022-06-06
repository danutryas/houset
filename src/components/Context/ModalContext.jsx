import React, { createContext, useState } from 'react'

const ModalContext = createContext({})

export function ModalProvider({children}) {
    const [modal,setModal] = useState(false)
    const [modifyModal,setModifyModal] = useState(false)
    const [deleteModal,setDeleteModal] = useState(false)
    const [addModal,setAddModal] = useState(false)
    
    const closeModal = () => {
        setModal(false)
        setModifyModal(false)
        setDeleteModal(false)
        setAddModal(false)
    }
    const addProductButton = () => {
        setModal(true)
        setAddModal(true)
        setModifyModal(false)
        setDeleteModal(false)
    }


    return (
    <ModalContext.Provider value={{addProductButton,modal,setModal,modifyModal,setModifyModal,addModal,setAddModal,deleteModal,setDeleteModal,closeModal}}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModalContext