import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCompanyData, fetchCompanyProgramsData } from './../common/Api'

const CompanyLanding = () => {
  const { slug } = useParams();
  const [company, setCompany] = useState({})
  const [companyPrograms, setCompanyPrograms] = useState([])
  const [loadingCompany, setLoadingCompany] = useState(true)
  const [loadingCompanyPrograms, setLoadingCompanyPrograms] = useState(true)

  useEffect(() => {
    const getCompanyData = async () => {
      const data = await fetchCompanyData(slug);
      if (data) {
        setCompany(data);
        setLoadingCompany(false);
      }
    };

    getCompanyData();
  }, [slug]);

  useEffect(() => {
    const getCompanyProgramsData = async () => {
      const data = await fetchCompanyProgramsData(company.id);
      if (data) {
        setCompanyPrograms(data);
        setLoadingCompanyPrograms(false);
      }
    };

    getCompanyProgramsData();
  }, [company.id]);

  return (
    <div>
      {!loadingCompany ? (
        <>
          {
            company.id ? (
              <div>
                <div className='main-banner'>
                  <img src={company.cover_photo} className='cover-img' />
                </div>

                {/* <div className='container'>
              <div className='logo-container'>
                <img src={company.logo} className='logo-img' />
              </div>
              <div>{company.heading}</div>
            </div> */}
              </div>
            ) : (
              <div>No Data Found...</div>
            )
          }
        </>
      ) : (
        <div>Loading...</div>
      )}

      {companyPrograms.length > 0 ? (
        <div>{companyPrograms.length}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div >
  );
}

export default CompanyLanding;
