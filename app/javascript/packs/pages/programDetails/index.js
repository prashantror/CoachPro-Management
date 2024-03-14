import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AxiosAPIHelper from '../../heplers/AxiosHelper';
import Loader from '../../constants/Loader';
import NoDataFound from '../../constants/NoDataFound';


const ProgramDetails = () => {
  const { program_slug } = useParams();
  const [companyProgram, setCompanyProgram] = useState('')
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    let splitted_slug = program_slug.split('-')
    let last_index = (splitted_slug.length - 1)
    let id = splitted_slug[last_index]
    let company_id = splitted_slug[last_index - 1]

    getCompanyProgramData(parseInt(company_id), parseInt(id))
  }, [program_slug]);

  const getCompanyProgramData = async (company_id, id) => {
    setIsloading(true)
    let CompanyProgramsData = await AxiosAPIHelper({ url: `/api/v1/companies/${company_id}/company_programs/${id}` })
    if (CompanyProgramsData.response) {
      setCompanyProgram(CompanyProgramsData.response)
      setIsloading(false)
    }
  }

  return (
    isLoading ? <Loader />
      : companyProgram ?
        <div>
          <div className='main-banner position-relative'>
            <img src={companyProgram.cover_image} className='cover-img position-absolute h-100 ' />
            <div className='position-absolute d-flex justify-content-left align-items-left gap-5 h-100 w-100 banner-holder'>
            </div>
          </div>
          <div className='heading w-75 m-auto my-5 company-desc-box p-2 company-desc-box'>
            <h4>Program</h4>
            <p>{companyProgram?.name}</p>
            <hr />
            <h4>Coach</h4>
            <p>{companyProgram?.coach_name}</p>
            <hr />
            <h4>About</h4>
            <p>{companyProgram?.description}</p>
          </div>
        </div>
        : <NoDataFound />
  );
}

export default ProgramDetails;