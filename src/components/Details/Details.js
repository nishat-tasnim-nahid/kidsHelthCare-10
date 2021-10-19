import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';

const Details = () => {
    const [doctorInfo, setDoctorInfo] = useState([])
    useEffect(() => {
        fetch('./doctorInfo.json')
            .then(res => res.json())
            .then(data => setDoctorInfo(data))
    }, [])

    return (
        <div>
            <h2 className='title'>Doctor Information</h2>
            <div className='Services'>

                {
                    doctorInfo.map(detail => <Detail
                        key={detail.key}
                        detail={detail}
                    ></Detail>)
                }
            </div>
        </div>
    );
};

export default Details;