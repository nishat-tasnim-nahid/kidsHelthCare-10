import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const { name, img, description } = props.health;
    const history = useHistory()
    const handleClick = () => {
        history.push('/details')
    }
    return (
        <div className='Service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <button onClick={handleClick}>Details</button>
        </div>
    );
};

export default Service;