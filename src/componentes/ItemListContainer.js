import React, { useEffect, useState, useContext } from 'react';
import ItemList from './ItemList';
import db from './firebase/Firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchContext } from './SearchContext';

const ItemListContainer = () => {

  const { search } = useContext(SearchContext)

  const [items, setItems] = useState([]);
  const { catId } = useParams();
  const [loader, setLoader] = useState(true);

  useEffect(async () => {
    setLoader(true);

    const myItems = catId ?
      query(collection(db, 'arrayProductos'), where('category', '==', catId))

      :
      collection(db, 'arrayProductos');

    try {
      const querySnapshot = await getDocs(myItems)

      console.log(querySnapshot.docs)

      setItems(querySnapshot.docs.map(el => {
        return { ...el.data(), id: el.id }
      }))
    }
    catch {
      console.log("SE ROMPIO")
    }

    setLoader(false)

  }, [catId]);

  return loader ? (
    <div className='d-flex align-items-center'>
      <strong>Loading...</strong>
      <div className='spinner-border ms-auto text-success' role="status" aria-hidden="true"></div>
    </div>
  ) : (
    <div>

      {search ? <ItemList items={[search]} /> : <ItemList items={items} />}

    </div>
  );

};
export default ItemListContainer;
