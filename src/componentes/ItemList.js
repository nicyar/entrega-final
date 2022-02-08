import React from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemList({ items }) {

  return (
    <>
    <section className='d-flex flex-row justify-content-around flex-wrap pb-3'>
      {items.map(item => <Item key={item.id} item={item} />
      )}
     </section>

    </>
  );
};

export default ItemList