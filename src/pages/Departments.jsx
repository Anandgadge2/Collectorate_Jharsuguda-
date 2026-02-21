import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';

const Departments = () => {
  const departments = [
    {
      name: 'Revenue Department',
      description: 'Responsible for land records, revenue collection, and calamity management.',
      services: ['L-Forms', 'Caste Certificates', 'Income Certificates'],
      icon: '🏢'
    },
    {
      name: 'Health & Family Welfare',
      description: 'Ensuring quality healthcare services and public health administration in the district.',
      services: ['Blood Bank info', 'Maternity services', 'Immunization'],
      icon: '🏥'
    },
    {
      name: 'School & Mass Education',
      description: 'Overseeing government schools, teacher administration, and educational schemes.',
      services: ['Scholarships', 'Admission guidelines', 'Exam results'],
      icon: '🏫'
    },
    {
      name: 'Rural Development',
      description: 'Focusing on rural infrastructure, connectivity, and development projects.',
      services: ['Piped water supply', 'Rural roads', 'PMAY monitoring'],
      icon: '🚜'
    },
    {
      name: 'Grievance Cell',
      description: 'The nodal wing for collecting and resolving public grievances and complaints.',
      services: ['Jan Sunani', 'Online Complaint filing', 'WhatsApp Helpdesk'],
      icon: '⚖️'
    }
  ];

  return (
    <PageLayout title="Departments" subtitle="Operational Pillars of Jharsuguda Administration">
      <div className="container">
        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div key={index} className="card dept-card">
              <div className="dept-icon">{dept.icon}</div>
              <h3>{dept.name}</h3>
              <p>{dept.description}</p>
              <div className="dept-services">
                <h4>Key Services:</h4>
                <ul>
                  {dept.services.map((service, sIndex) => (
                    <li key={sIndex}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Departments;
