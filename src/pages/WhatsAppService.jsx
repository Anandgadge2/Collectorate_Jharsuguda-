import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';

const WhatsAppService = () => {
  return (
    <PageLayout title="WhatsApp Service" subtitle="District Administration in your pocket">
      <div className="container">
        <div className="wa-grid">
          <div className="wa-info">
            <SectionTitle title="Digital Helpdesk" />
            <p className="intro">
              The Jharsuguda District Administration is pleased to introduce its official WhatsApp Service. 
              This chatbot is designed to provide citizens with easy access to information, 
              grievance submission, and service tracking.
            </p>

            <div className="wa-number-card card">
              <div className="wa-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="wa-number-details">
                <p>Register & Start Chatting</p>
                <h3>8999470824</h3>
              </div>
              <a href="https://wa.me/918999470824" className="btn-wa-action">Chat Now →</a>
            </div>

            <div className="wa-details grid grid-cols-2">
              <div className="wa-detail-card card">
                <h4>Operating Hours</h4>
                <p>24/7 (Automated Responses)</p>
                <p>9:30 AM – 6:00 PM (Live Agent Support)</p>
              </div>
              <div className="wa-detail-card card">
                <h4>Response Timeline</h4>
                <p>Immediate (Info Requests)</p>
                <p>24-48 Hours (Grievance Filing)</p>
              </div>
            </div>
          </div>

          <div className="wa-features">
            <SectionTitle title="What the Chatbot can do" />
            <ul className="wa-feature-list">
              <li>
                <strong>📢 Public Announcements</strong>
                <p>Get instant updates on weather, events, and government notifications.</p>
              </li>
              <li>
                <strong>⚖️ Grievance Filing</strong>
                <p>Submit complaints directly to the Collectorate with photo/document evidence.</p>
              </li>
              <li>
                <strong>📄 Document Status</strong>
                <p>Track the status of your certificates and applications.</p>
              </li>
              <li>
                <strong>📍 Office Locator</strong>
                <p>Find contact details and locations of various block and tehsil offices.</p>
              </li>
            </ul>

            <div className="wa-privacy-note card">
              <h4>🔒 Data Privacy Note</h4>
              <p>
                Your privacy is our priority. Information submitted through this WhatsApp chatbot 
                is used solely for grievance redressal and administrative communication. 
                Please refer to our <a href="/privacy-policy">Privacy Policy</a> for more details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WhatsAppService;
