import React from 'react';

const ContactCard = ({ icon, title, content, link }) => {
  return (
    <div className="card contact-card">
      <div className="icon-wrapper">{icon}</div>
      <div className="contact-info">
        <h4>{title}</h4>
        {link ? <a href={link}>{content}</a> : <p>{content}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
