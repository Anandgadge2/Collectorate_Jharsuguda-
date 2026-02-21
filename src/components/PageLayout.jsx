import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children, title, subtitle }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        {title && (
          <header className="page-header">
            <div className="container animate-fade-in">
              <h1>{title}</h1>
              {subtitle && <p className="subtitle">{subtitle}</p>}
            </div>
          </header>
        )}
        <div className="page-body">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
