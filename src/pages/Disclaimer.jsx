import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';

const Disclaimer = () => {
  return (
    <PageLayout title="Disclaimer">
      <div className="container policy-container">
        <SectionTitle title="Legal Disclaimer" />
        <div className="card policy-card">
          <h3>1. Accuracy of Content</h3>
          <p>
            While the District Administration Jharsuguda makes every effort to ensure the accuracy of the 
            information on this website and via its WhatsApp service, the information is provided "as is". 
            The administration shall not be liable for any inaccuracies or omissions.
          </p>

          <h3>2. Non-liability Clause</h3>
          <p>
            The District Administration or its employees shall not be liable for any loss, injury, or 
            damage resulting from the use of information provided on this platform. Users are advised 
            to verify critical information through official gazettes or physical office records.
          </p>

          <h3>3. External Links Disclaimer</h3>
          <p>
            Links to other websites are provided for convenience only and do not constitute an 
            endorsement. We have no control over the content of external sites and accept no 
            responsibility for them.
          </p>

          <h3>4. Government Portals</h3>
          <p>
            This website is an official portal of the Government of Odisha. Any technical issues 
            should be reported to the IT cell for rectification.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Disclaimer;
