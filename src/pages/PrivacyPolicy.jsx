import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';

const PrivacyPolicy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <div className="container policy-container">
        <SectionTitle title="Privacy Policy for WhatsApp Services" />
        <div className="card policy-card">
          <p className="last-updated">Last Updated: February 21, 2026</p>
          
          <h3>1. Introduction</h3>
          <p>
            The District Administration of Jharsuguda is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, and safeguard your information when you interact with our official 
            WhatsApp Chatbot (Service Number: 8999470824).
          </p>

          <h3>2. Data Collection</h3>
          <p>We collect the following information when you use our WhatsApp service:</p>
          <ul>
            <li>Mobile Number: Used as your unique identifier for communication.</li>
            <li>Profile Name: As provided in your WhatsApp settings.</li>
            <li>Conversation History: Text messages, documents, or photos sent for grievances or service requests.</li>
            <li>Location Data: If explicitly shared by you to report issues at a specific site.</li>
          </ul>

          <h3>3. Purpose of Collection</h3>
          <p>Your information is used solely for the following administrative purposes:</p>
          <ul>
            <li>Grievance redressal and administrative communication.</li>
            <li>Providing updates on government schemes and emergency alerts.</li>
            <li>Processing applications for public services.</li>
            <li>Improving the efficiency of digital governance in Jharsuguda.</li>
          </ul>

          <h3>4. Data Storage and Duration</h3>
          <p>
            Information submitted through the WhatsApp chatbot is securely stored in our administrative database. 
            We retain data only as long as necessary to fulfill the purpose of collection or as required by 
            government record-keeping laws (typically up to 3 years for resolved grievances).
          </p>

          <h3>5. Data Sharing</h3>
          <p>
            We do not sell or share your data with private third parties. Information may only be shared with 
            relevant government departments for the purpose of resolving your specific request or grievance.
          </p>

          <h3>6. Your Rights & Data Deletion</h3>
          <p>
            You have the right to request the deletion of your personal data from our chatbot records. 
            To request data deletion, please email us at <strong>dm-jharsuguda@nic.in</strong> with the subject 
            "WhatsApp Data Deletion Request" and your mobile number.
          </p>

          <h3>7. Contact Us</h3>
          <p>
            If you have questions about this policy, please contact us at:<br />
            Collectorate, Jharsuguda<br />
            Email: dm-jharsuguda@nic.in
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
