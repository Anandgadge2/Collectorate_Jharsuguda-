import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <PageLayout>
      <div className="container center-content">
        <div className="error-card animate-fade-in">
          <h1 className="error-code">404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
