import React, { useState } from 'react';
import ProfileContent from './ProfilContent';
import Card from './card';
import Category from './Category';
import { Link } from 'react-router-dom';

const Content = () => {
  const [viewAll, setViewAll] = useState(false);

  const handleViewAllClick = () => {
    setViewAll(true); // Set viewAll to true when "View All" is clicked
  };

  return (
    <div className="content">
      {!viewAll ? (
        <>
          <ProfileContent />
          <div className="deuxieme-content">
            <Card />
            <Category onViewAllClick={handleViewAllClick} />
          </div>
          <Link to="/categories" className="viewall-link">View All</Link> {/* Mettez à jour le lien pour naviguer vers CategoriesPage */}
        </>
      ) : (
        null
      )}
    </div>
  );
};

export default Content;
