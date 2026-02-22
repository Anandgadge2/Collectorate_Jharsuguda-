import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';

const Terms = () => {
  return (
    <PageLayout title="Terms & Conditions">
      <div className="container policy-container">
        <SectionTitle title="Usage Terms" />
        <div className="card policy-card">
          <h3>1. Usage Limitations</h3>
          <p>
            This digital platform, including the official website and WhatsApp chatbot, is intended for 
            official administrative communication and public service facilitation only.
          </p>

          <h3>2. Misuse Policy</h3>
          <p>
            Any attempt to misuse this platform for spreading misinformation, harassment, or 
            unauthorized access to administrative data is strictly prohibited and subject to legal action.
          </p>

          <h3>3. Official Communication Disclaimer</h3>
          <p>
            Digital communications via this website or WhatsApp are for facilitation and do not bypass 
            established legal or administrative protocols. Official orders issued in writing by the 
            Collectorate remain the final authority.
          </p>

          <h3>4. Response Guarantee</h3>
          <p>
            While we strive for promptness, the District Administration provides no guarantee of an 
            immediate response. Urgent matters should be addressed through official physical channels 
            or emergency landlines.
          </p>

          <h3>5. Government Authority Disclaimer</h3>
          <p>
            The services provided through this platform are an extension of the District Administration 
            Jharsuguda, Government of Odisha. The administration reserves the right to suspend or 
            modify digital services at any time for security or administrative reasons.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
