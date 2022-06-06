import  axios  from "axios";
import { createContext, useContext, useEffect, useState} from "react";
import ModalContext from "./ModalContext";

const InputContext = createContext({});

export function InputProvider({children}) {
    const [datas,setDatas] = useState([])
    const [selectedData,setSelectedData] = useState({})
    const [name,setName] = useState("")
    const [type,setType] = useState("")
    const [price,setPrice] = useState(0)
    const [quantity,setQuantity] = useState(0)
    
    const {closeModal} = useContext(ModalContext);
    
    const url = "http://localhost:3004"


    const addProduct = () => {
        const nextId = getNextId()

        axios.post(`${url}/product`,{
            id: `p${nextId}`,
            name,type,price,
            qty:quantity
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

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
        const id = currData.id
        axios.put(`${url}/product/${id}`,
            {
                name,type,price,
                qty:quantity
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

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
    const deleteProductData = () => {
        const id = selectedData.id

        axios.delete(`${url}/product/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        setDatas(datas.filter((el) => el.id !== id))

        closeModal()
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
            return "00" + intId.toString()
        }else if (intId >= 10 && intId < 100) {
            return "0" + intId.toString()   
        }else {
            return intId.toString()
        }
    } 
    useEffect(() => {
        axios.get(`${url}/product`) 
        .then((data)=> setDatas(data.data))
        .catch((error)=> console.log(error))
    },[])


    return(
        <InputContext.Provider value={{deleteProductData,datas,setDatas,name,setName,type,setType,price,setPrice,quantity,setQuantity,addProduct,selectedData,setSelectedData,changeProduct}}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContext;