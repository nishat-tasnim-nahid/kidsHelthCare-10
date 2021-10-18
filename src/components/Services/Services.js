import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';

const Services = () => {
    const [healthCare, setHealthCare] = useState([])
    useEffect(() => {
        fetch('./healthCare.json')
            .then(res => res.json())
            .then(data => setHealthCare(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='title'><b>SERVICES</b></h1>
            </div>
            <div className='Services'>

                {
                    healthCare.map(health => <Service
                        key={health.key}
                        health={health}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;