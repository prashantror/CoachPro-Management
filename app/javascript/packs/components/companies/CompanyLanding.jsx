import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCompanyData } from './../common/Api'

const CompanyLanding = () => {
  const { slug } = useParams();
  const [company, setCompany] = useState({})

  useEffect(() => {
    const getCompanyData = async () => {
      const data = await fetchCompanyData(slug);
      if (data) {
        setCompany(data);
      }
    };

    getCompanyData();
  }, [slug]);

  return (
    <div>
      {company.id ? (
        <div>
          <div>{company.heading}</div>
          {/* Display other company data as needed */}
        </div>
      ) : (
        <div>Company not found!</div>
      )}
    </div>
  );
}

export default CompanyLanding;
