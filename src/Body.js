import React from 'react';


function Body(props){
    return (
        <>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <p>{props.rating}</p>
        <p>{props.address}</p>
        </>
    );
}

export default Body;