import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AxiosAPIHelper from '../../heplers/AxiosHelper';
import { fetchCompanyData } from '../../components/common/Api';

const CompanyLanding = () => {
    const { company_slug } = useParams();
    const [company, setCompany] = useState({})
    const [companyPrograms, setCompanyPrograms] = useState([])
    const [loadingCompany, setCompanyData] = useState(true)
    const [loadingCompanyPrograms, setLoadingCompanyPrograms] = useState(true)

    useEffect(() => {
        getCompanyData()
    }, []);

    const getCompanyData = async () => {
        let user = JSON.parse(localStorage.getItem('user'))
        let companySlug = user.company_slug
        let {response, error} = await AxiosAPIHelper({ url: `/api/v1/companies/${companySlug}/landing_page` })
        if(response){
            setCompanyData(response)
        }
        console.log(companyData , "::: companyData");
    }

    //   useEffect(() => {
    //     const getCompanyProgramsData = async () => {
    //       const data = await fetchCompanyProgramsData(company.id);
    //       if (data) {
    //         setCompanyPrograms(data);
    //         setLoadingCompanyPrograms(false);
    //       }
    //     };

    //     getCompanyProgramsData();
    //   }, [company.id]);

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