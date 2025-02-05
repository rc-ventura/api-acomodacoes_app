import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './DynamicPageTitle.module.css'; // Importando estilos

const DynamicPageTitle = () => {
  
  const location = useLocation();
  const pathname = location.pathname;
  const pathParts = pathname.split('/');
  const pageName = pathParts[pathParts.length - 1];
  const formattedTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace('-', ' ');

  return (
    <div className={styles.pageTitleContainer}> {/* Usando CSS Module */}
      <h1>{formattedTitle}</h1>
    </div>
  );
};

export default DynamicPageTitle;
