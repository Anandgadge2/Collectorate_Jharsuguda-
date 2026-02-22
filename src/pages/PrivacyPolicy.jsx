import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';

const PrivacyPolicy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <div className="container policy-container">
        <SectionTitle title="Privacy Policy for WhatsApp Services" />
        <div className="card policy-card">
          <p className="last-updated">Last Updated: February 22, 2026</p>
          
          <h3>1. Data Collection</h3>
          <p>The District Administration Jharsuguda collects the following data via the official WhatsApp chatbot:</p>
          <ul>
            <li>Name and Profile Information</li>
            <li>Mobile Phone Number</li>
            <li>Grievance details, including text, photos, and documents submitted</li>
          </ul>

          <h3>2. Purpose of Use</h3>
          <p>
            Information collected through the WhatsApp chatbot is used solely for official communication, 
            grievance redressal, and administrative purposes in accordance with government regulations.
          </p>

          <h3>3. Data Storage</h3>
          <p>
            All data collected is stored securely within official government-managed servers. 
            The information is used only for official administrative use and is not shared with 
            third parties unless explicitly required by legal mandates.
          </p>

          <h3>4. Data Retention</h3>
          <p>
            Data is retained only as long as required for processing the specific request or grievance 
            in compliance with state record-keeping policies.
          </p>

          <h3>5. Data Deletion Request</h3>
          <p>
            Users can request deletion of their data from our active chatbot database by emailing 
            us at <strong>dm-jharsuguda@nic.in</strong> with their request and mobile number.
          </p>

          <h3>6. Contact Information</h3>
          <p>
            Collectorate, Jharsuguda<br />
            Odisha – 768204<br />
            Email: dm-jharsuguda@nic.in
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
