import React from 'react';

import './content.css';
import Winner from '../../assets/winner.png';
import Lucky from '../../assets/Lucky.png';
import Comeback from '../../assets/Comeback.png';
import './Card.css';

const Card = () => {
  return (
    <div>
    <h1 className='achievements'>Achievements</h1>
    <div className="achievements--content">
        <div className="image-container">
            <a href=''>
                <img src={Winner} alt="Winner" className="image_achievements1" />
                <p className='winnersoustitre'>Winner</p>
            </a>
        </div>
        <div className="image-container">
            <a href=''>
                <img src={Comeback} alt="Comeback" className="image_achievements3" />
                <p className='comebacksoustitre'>Comeback</p>
            </a>
        </div>
        <div className="image-container">
            <a href=''>
                <img src={Lucky} alt="Lucky" className="image_achievements2" />
                <p className='luckysoustitre'>Lucky</p>
            </a>
        </div>
        <hr className="separator" />
        <a href='#' className="view-all-link">View All</a>

    </div>
</div>
  );
}


export default Card;
