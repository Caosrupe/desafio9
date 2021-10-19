import {ItemDetail} from './ItemDetail';
import {useParams} from "react-router-dom";
import React, {useState,useEffect} from 'react';
import productos from './data.json'




const ItemDetailContainer = ({items}) => {



    const[producto,setProducto]=useState([])
    const {itemid}=useParams();
    useEffect(()=>{


    if(items)
    {
console.log("Muy bien item esta definido");

    }

    else{


items= productos;
console.log("esta mal");
    }



        const call=new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(items)
            },2000)
        })

        call.then(response=>{
            console.log(itemid);
            console.log(response[itemid-1]);
            setProducto(response[itemid-1]);
        })
    },[])


    return (
        <div className="select">
            <ItemDetail  jsonpack={producto} />
        </div>
    )
}

export default ItemDetailContainer;
