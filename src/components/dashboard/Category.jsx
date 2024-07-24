import React from 'react';
import { Link } from 'react-router-dom';
import History from '../../assets/history.jpg';
import Medcine from '../../assets/medecin.jpg';
import Technology from '../../assets/technology.jpg';
import Agriculture from '../../assets/agriculture.jpg';
import './category.css';

const Category = () => {
  return (
    <div>
      <div className='FeaturedCategory'>
        <h1 className='Featured-Category'>Featured Category</h1>
        <Link to="/categories" className="viewall-link">View All</Link>
      </div>

      <div className="category--content">
        <div className="image-container">
          <Link to="/categories/history">
            <img src={History} alt="History" className="imgHistory" />
            <p className='Medcinesoustitre'>History</p>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/categories/medicine">
            <img src={Medcine} alt="Medicine" className="imgMedicine" />
            <p className='Medcinesoustitre'>Medicine</p>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/categories/technology">
            <img src={Technology} alt="Technology" className="imgTechnology" />
            <p className='Technologysoustitre'>Technology</p>
          </Link>
        </div>
        <div className="image-container">
          <Link to="/categories/agriculture">
            <img src={Agriculture} alt="Agriculture" className="imgAgriculture" />
            <p className='Agriculturesoustitre'>Agriculture</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
