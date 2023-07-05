import React from 'react';


function Header(props){
    return (
        <>
        <img 
        src={props.img}
        alt='food item'
        />
        </>
    );
}

export default Header;