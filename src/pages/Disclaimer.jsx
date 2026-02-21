import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';

const Disclaimer = () => {
  return (
    <PageLayout title="Disclaimer">
      <div className="container policy-container">
        <SectionTitle title="Legal Disclaimer" />
        <div className="card policy-card">
          <h3>1. Official Communication</h3>
          <p>
            The content provided on this website and the WhatsApp chatbot is for general public information. 
            Official communication from the Collectorate Jharsuguda is typically issued via stamped documents, 
            government gazettes, or signed letters. Digital updates should be cross-verified with official 
            notifications for any legal or formal proceedings.
          </p>

          <h3>2. Non-binding Digital Communication</h3>
          <p>
            Information shared via the WhatsApp chatbot is facilitate communication and does not constitute 
            a binding legal contract or commitment unless explicitly stated in a formal administrative order. 
            The response timeline on the chatbot is indicative and may vary based on the nature of the query.
          </p>

          <h3>3. External Links</h3>
          <p>
            This portal may contain links to other government or external websites. The District Administration 
            is not responsible for the content or privacy practices of such external sites.
          </p>

          <h3>4. Accuracy of Information</h3>
          <p>
            While every effort is made to keep the information up to date and correct, we make no 
            representations or warranties of any kind about the completeness, accuracy, or reliability 
            of the information on the portal.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Disclaimer;
