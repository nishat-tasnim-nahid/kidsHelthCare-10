import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div>
                <img className='banner-img' src="https://st.depositphotos.com/3029723/4758/i/600/depositphotos_47580711-stock-photo-happy-kids-jumping-together.jpg" alt="" />
            </div>
            <div>
                <h1 className='title'>PREVENTION IS BETTER THAN CURE</h1>
                <p>Common child health issues include allergies, colds, conjunctivitis, gastro, hand, foot and mouth disease, impetigo, lice and worms. You can treat mild health issues at home. But if you're worried, see your GP. Handwashing is one of the best ways to prevent the spread of infection.</p>
            </div>
        </div>
    );
};

export default Banner;