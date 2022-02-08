import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import db from './firebase/Firebase';
import { getDoc, doc } from 'firebase/firestore';



export const ItemDetailContainer = () => {
    const [items, setItems] = useState({});
    const { itemId } = useParams();
  
    console.log(itemId);
  
    useEffect( () => {
      const ref =  doc(db, 'arrayProductos', itemId)

      getDoc(ref).then( querySnapshot => {
        setItems({...querySnapshot.data(), id: querySnapshot.id})
      })
      .catch(e => console.log(e))
  
    }, [itemId]);
  
    return    <div className="d-flex justify-content-between px-5 py-2"> <ItemDetail {...items} /></div> ;
  };

export default ItemDetailContainer
 
