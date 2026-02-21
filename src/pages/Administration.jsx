import React from 'react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/SectionTitle';

const Administration = () => {
  const officers = [
    { name: 'Shri Kunal Motiram Chavan, IAS', designation: 'Collector & District Magistrate', contact: '06645-270070 / 8093178590', email: 'dm-jharsuguda@nic.in' },
    { name: 'Shri G.R. Raghavendra, IPS', designation: 'Superintendent of Police', contact: '06645-272431', email: 'spjsg.odpol@nic.in' },
    { name: 'Shri Prabhat Kumar Bhoi', designation: 'Additional District Magistrate (Gen)', contact: '06645-270001', email: 'adm-jharsuguda@nic.in' },
    { name: 'Smt. Mousumi Mishra', designation: 'Additional District Magistrate (Revenue)', contact: '06645-270002', email: 'admrev-jharsuguda@nic.in' },
  ];

  return (
    <PageLayout title="Administration" subtitle="Key Officials of Jharsuguda District">
      <div className="container">
        <section className="admin-list">
          <SectionTitle title="District Leadership" />
          <div className="grid grid-cols-2">
            {officers.map((officer, index) => (
              <div key={index} className="card officer-card">
                <div className="officer-header">
                  <h3>{officer.name}</h3>
                  <span className="designation">{officer.designation}</span>
                </div>
                <div className="officer-footer">
                  <p><strong>Phone:</strong> {officer.contact}</p>
                  <p><strong>Email:</strong> {officer.email}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-directory">
          <SectionTitle title="Administrative Directory" />
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Office Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Collectorate</td>
                  <td>Nazarat Deputy Collector</td>
                  <td>06645-272430</td>
                </tr>
                <tr>
                  <td>Revenue</td>
                  <td>Sub-Collector, Jharsuguda</td>
                  <td>06645-272210</td>
                </tr>
                <tr>
                  <td>Education</td>
                  <td>District Education Officer</td>
                  <td>06645-270030</td>
                </tr>
                <tr>
                  <td>Health</td>
                  <td>CDMO, Jharsuguda</td>
                  <td>06645-270050</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Administration;
