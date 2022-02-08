import React, { useState, useContext } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap'
import db from './firebase/Firebase';
import { collection, getDocs, query, where, } from 'firebase/firestore';
import { SearchContext } from './SearchContext'

const Search = () => {
  const { addSearch } = useContext(SearchContext)

  const [search, setSearch] = useState("")
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    e.preventDefault();
    const productRef = collection(db, "arrayProductos");
    const q = query(productRef, where("title", "==", `${search}`));
    console.log(`${search}`);
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      addSearch(doc.data())
    });
  };


  return (
    <>
      <Form className="d-flex" >
        <FormControl
        
          name='search'
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
        
        />
        <Button variant="outline-dark" type='submit' onClick={onClick}>Search</Button>
      </Form>

    </>)

};

export default Search;
