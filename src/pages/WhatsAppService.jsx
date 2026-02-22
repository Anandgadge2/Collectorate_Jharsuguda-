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
            <SectionTitle title="Available Services" />
            <ul className="wa-feature-list">
              <li>
                <strong>📢 Grievance Submission</strong>
                <p>Register complaints directly with the administration and upload supporting documents.</p>
              </li>
              <li>
                <strong>📄 Application Status Check</strong>
                <p>Check the real-time status of your certificates and public service applications.</p>
              </li>
              <li>
                <strong>🔔 Public Notice Alerts</strong>
                <p>Subscribe to receive important alerts regarding weather, holidays, and recruitment notices.</p>
              </li>
              <li>
                <strong>⏳ Response Time Expectations</strong>
                <p>
                  Automated info: Instant<br />
                  Grievance Acknowledgment: Within 24 hours<br />
                  Resolution: As per Citizen's Charter timelines
                </p>
              </li>
            </ul>

            <div className="wa-privacy-note card">
              <h4>🔒 Data Privacy & Terms</h4>
              <p>
                Your privacy is our priority. Information submitted through this WhatsApp service 
                is used solely for grievance redressal and administrative communication. 
                Full details are available in our <a href="/privacy-policy" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Privacy Policy</a> and <a href="/terms" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Terms of Service</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WhatsAppService;
