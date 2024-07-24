import React from 'react';
import './categories.css'; // Assurez-vous d'avoir créé ce fichier CSS pour styliser vos catégories
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom
import History from '../../assets/history.jpg';
import Medcine from '../../assets/medecin.jpg';
import Technology from '../../assets/technology.jpg';
import Agriculture from '../../assets/agriculture.jpg';
import HistoryQuiz from './HistoryQuiz';

const Categories = () => {
    return (
        <div>
            <div className='FeaturedCategory'>
                <h1 className='select-topic'>Select Topic</h1>
                <p className='parag'>Featured Category</p>
            </div>

            <div className="content--category">
                <div className="category-container">
                    <Link to='/categories/history'>
                        <img src={History} alt="History" className="imgcategory" />
                        <p className='Medcinesoustitre'>History</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to=''>
                        <img src={Medcine} alt="Medicine" className="imgcategory" />
                        <p className='Medcinesoustitre'>Medicine</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to='/categories/history'>
                        <img src={History} alt="History" className="imgcategory" />
                        <p className='Medcinesoustitre'>History</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to=''>
                        <img src={Medcine} alt="Medicine" className="imgcategory" />
                        <p className='Medcinesoustitre'>Medicine</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to=''>
                        <img src={Technology} alt="Technology" className="imgcategory" />
                        <p className='Technologysoustitre'>Technology</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to=''>
                        <img src={Agriculture} alt="Agriculture" className="imgcategory" />
                        <p className='Agriculturesoustitre'>Agriculture</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to=''>
                        <img src={Technology} alt="Technology" className="imgcategory" />
                        <p className='Technologysoustitre'>Technology</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to=''>
                        <img src={Agriculture} alt="Agriculture" className="imgcategory" />
                        <p className='Agriculturesoustitre'>Agriculture</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to=''>
                        <img src={Technology} alt="Technology" className="imgcategory" />
                        <p className='Technologysoustitre'>Technology</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to=''>
                        <img src={Agriculture} alt="Agriculture" className="imgcategory" />
                        <p className='Agriculturesoustitre'>Agriculture</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to=''>
                        <img src={Technology} alt="Technology" className="imgcategory" />
                        <p className='Technologysoustitre'>Technology</p>
                    </Link>
                </div>
                <div className="category-container">
                    <Link to=''>
                        <img src={Agriculture} alt="Agriculture" className="imgcategory" />
                        <p className='Agriculturesoustitre'>Agriculture</p>
                    </Link>
                </div>
            </div>
            <div>
                <button className='button-more'>More</button>
            </div>
        </div>
    );
};

export default Categories;