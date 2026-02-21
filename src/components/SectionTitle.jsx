import React from 'react';

const SectionTitle = ({ title, subtitle, center = false }) => {
  return (
    <div className={`section-title ${center ? 'center' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <div className="title-underline"></div>
    </div>
  );
};

export default SectionTitle;
