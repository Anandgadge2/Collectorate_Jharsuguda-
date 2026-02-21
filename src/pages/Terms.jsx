import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';

const Terms = () => {
  return (
    <PageLayout title="Terms & Conditions">
      <div className="container policy-container">
        <SectionTitle title="Usage Terms" />
        <div className="card policy-card">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing this website or using the official WhatsApp Chatbot of Jharsuguda District Administration, 
            you agree to be bound by these Terms and Conditions.
          </p>

          <h3>2. Service Limitations</h3>
          <p>
            The digital services provided are for information and facilitation purposes. While we strive for 
            accuracy, the administration does not guarantee that the services will be uninterrupted or error-free. 
            Official documents issued offline or via official portals remain the final authority.
          </p>

          <h3>3. Usage Rules</h3>
          <p>Users must not:</p>
          <ul>
            <li>Use the platform to spread misinformation or hate speech.</li>
            <li>Submit fraudulent grievances or false identity information.</li>
            <li>Attempt to bypass security features of the portal or chatbot.</li>
            <li>Use automated scripts to spam the administrative channels.</li>
          </ul>

          <h3>4. No Misuse Policy</h3>
          <p>
            The WhatsApp chatbot is strictly for administrative and public service purposes. Any misuse of 
            the platform for personal gain, harassment, or commercial advertising is strictly prohibited 
            and may lead to legal action under the IT Act.
          </p>

          <h3>5. Modifications</h3>
          <p>
            The District Administration reserves the right to modify these terms at any time without prior notice. 
            Continued use of the services constitutes acceptance of the revised terms.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
