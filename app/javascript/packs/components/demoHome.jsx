import React, { useState, useEffect } from 'react';
import { fetchAllCompanies } from './common/Api'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllCompanies = async () => {
            const data = await fetchAllCompanies();
            if (data) {
                setCompanies(data);
            }
        };

        getAllCompanies();
    }, []);

    const handleCompanyChange = (event) => {
        navigate(`/company/${event.target.value}`)
    };

    return (
        <div>
            {companies.length > 0 ? (
                <div>
                    <select onChange={handleCompanyChange}>
                        <option value="">Select a company</option>
                        {companies.map(company => (
                            <option key={company.slug} value={company.slug}>{company.name}</option>
                        ))}
                    </select>
                </div>
            ) : (
                <div>Company not found!</div>
            )}
        </div>
    );
}
export default Home;
