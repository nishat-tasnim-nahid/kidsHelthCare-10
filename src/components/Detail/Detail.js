import React from 'react';

const Detail = (props) => {
    const { name, degree } = props.detail
    return (
        <div className='Service'>
            <h2>{name}</h2>
            <p>Degree: {degree}</p>
        </div>
    );
};

export default Detail;