import { createContext, useContext, useEffect, useState} from "react";
import ModalContext from "./ModalContext";

const InputContext = createContext({});

export function InputProvider({children}) {
    const [datas,setDatas] = useState([
    {
        "id": "p001",
        "name": "Meja Kantor",
        "type": "Meja",
        "price": "500000",
        "qty": "10"
    },
    {
        "id": "p002",
        "name": "Meja Kamar",
        "type": "Meja",
        "price": "250000",
        "qty": "20"
    },
    {
        "id": "p003",
        "name": "Sofa Ruang Keluarga",
        "type": "Sofa",
        "price": "600000",
        "qty": "4"
    },
    {
        "id": "p004",
        "name": "Kursi Kantor",
        "type": "Kursi",
        "price": "100000",
        "qty": "40"
    },
    {
        "id": "p005",
        "name": "Sofa Tamu",
        "type": "Sofa",
        "price": "700000",
        "qty": "2"
    },
    {
        "id": "p006",
        "name": "Kasur Double",
        "type": "Kasur",
        "price": "220000",
        "qty": "7"
    },
    {
        "id": "p007",
        "name": "Kasur Single",
        "type": "Kasur",
        "price": "150000",
        "qty": "14"
    },
    {
        "id": "p008",
        "name": "Meja Makan",
        "type": "Meja",
        "price": "1000000",
        "qty": "10"
    },
    {
        "id": "p009",
        "name": "Lemari Baju",
        "type": "Lemari",
        "price": "400000",
        "qty": "10"
    },
    {
        "id": "p010",
        "name": "Lemari Pajangan",
        "type": "Lemari",
        "price": "500000",
        "qty": "20"
    }
])
    const [selectedData,setSelectedData] = useState({})
    const [name,setName] = useState("")
    const [type,setType] = useState("")
    const [price,setPrice] = useState(0)
    const [quantity,setQuantity] = useState(0)

    const {setModal,setModifyModal,setDeleteModal,setAddModal,closeModal} = useContext(ModalContext);


    const addProduct = () => {
        const nextId = getNextId()
        setDatas(() => [...datas,{
            id: `p${nextId}`,
            name,type,price,
            qty:quantity
        }])     
        clearInput()
        closeModal()
    }
    const changeProduct = () => {
        const currData = selectedData
        setDatas(
            datas.map((data)=> {
                if(currData.id === data.id) {
                    return {
                    ...data,
                    name,type,price,
                    qty:quantity
                    }
                }
                return data;
            })
        )
        closeModal()
        clearInput()
    }
    const clearInput = () => {
        setSelectedData({})
        setName("")
        setType("")
        setPrice(0)
        setQuantity(0)
    }

    const getNextId = () => {

        const lastItem = datas.slice(-1) 
        const getId = lastItem[0].id.slice(1)
        let intId = parseInt(getId)
        intId++
        if (intId < 10) {
            return "00"+intId.toString()
        }else if (intId >= 10 && intId < 100) {
            return "0"+intId.toString()   
        }else {
            return intId.toString()
        }
    } 


    useEffect(() => {
        console.log(selectedData)
    },[selectedData])
    useEffect(() => {
      console.log(datas)
    },[datas])

    return(
        <InputContext.Provider value={{datas,setDatas,name,setName,type,setType,price,setPrice,quantity,setQuantity,addProduct,selectedData,setSelectedData,changeProduct}}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContext;