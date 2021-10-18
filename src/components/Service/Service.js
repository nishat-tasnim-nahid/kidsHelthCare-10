import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name,img,description} = props.health
    return (
        <div className='Service'>
           
           <div>
           <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <button>Details</button>
           </div>
        </div>
    );
};

export default Service;