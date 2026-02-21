import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <PageLayout title="About Jharsuguda" subtitle="The Industrial Heartland of Odisha">
      <div className="container">
        <section className="about-section">
          <SectionTitle title="Overview" />
          <p>
            Jharsuguda District was established on 1st January 1994. Earlier it was a part of Sambalpur District. 
            The district is situated in the western part of Odisha. It is bounded by Sundargarh District in the north, 
            Sambalpur District in the east, Bargarh District in the south and Chhattisgarh state in the west.
          </p>
          <p>
            The district is well known for its rich mineral resources and industrial growth. It has some of the 
            largest coal mines in Asia and several major industrial units like Vedanta, TRL Krosaki, and MCL. 
            The district also boasts significant infrastructure including the Veer Surendra Sai Airport.
          </p>
        </section>

        <section className="about-section">
          <SectionTitle title="Administrative Structure" />
          <p>
            The Collector and District Magistrate is the head of the district administration. 
            The Collector is assisted by ADMs, Sub-Collectors, and various district-level officers. 
            The district is divided into subdivisions and blocks for efficient administration.
          </p>
          <div className="admin-grid">
            <div className="card">
              <h4>Subdivisions</h4>
              <p>Jharsuguda</p>
            </div>
            <div className="card">
              <h4>Blocks</h4>
              <p>Jharsuguda, Laikera, Kolabira, Kirmira, Lakhanpur</p>
            </div>
            <div className="card">
              <h4>Municipalities</h4>
              <p>Jharsuguda, Brajrajnagar, Belpahar</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <SectionTitle title="Role of District Magistrate" />
          <p>
            The District Magistrate (DM) / Collector is the pivot of the district administration. 
            In the capacity of Collector, he/she is the head of the Revenue Department in the district 
            and is responsible for the collection of revenue and maintainance of land records.
          </p>
          <ul className="roles-list">
            <li>Maintenance of Law and Order in the district.</li>
            <li>Implementation of various government schemes and developmental projects.</li>
            <li>Grievance Redressal and public hearing.</li>
            <li>Supervision of health, education, and social welfare departments.</li>
            <li>Crisis management during natural calamities or emergencies.</li>
          </ul>
        </section>

        <section className="about-section">
          <SectionTitle title="Governance Functions" />
          <p>
            The district administration functions through various specialized departments to ensure 
            seamless delivery of public services. Transparency and accountability are the cornerstones 
            of our governance model.
          </p>
          <div className="functions-grid">
            <div className="card">
              <h5>Public Service Delivery</h5>
              <p>Issuance of certificates (Caste, Income, Residential), licenses, and permits.</p>
            </div>
            <div className="card">
              <h5>Development Planning</h5>
              <p>Coordination of rural and urban infrastructure projects under State and Central schemes.</p>
            </div>
            <div className="card">
              <h5>Digital Governance</h5>
              <p>Leveraging technology for paperless administration and citizen-centric services via portals and chatbots.</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
