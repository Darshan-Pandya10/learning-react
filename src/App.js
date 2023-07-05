import React from 'react';
import Card from './Card.js';
import foodList from './data.js';


function App() {
  return (  
    <>
    {foodList.map(item => {
     return (
        <Card key={item.index} img={item.img} name={item.name} price={item.price} rating={item.rating} address={item.address}/>
         );
    })}
    </>
  );
}

export default App;
