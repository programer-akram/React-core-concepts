import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitedCountry, handleVisitedCountryFlag }) => {

    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    console.log(handleVisitedCountry)

    return (
        <div className={`box ${visited && 'visited'}`}>
            <h4>Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <h5>Population:{population}</h5>
            <h5>Area:{area}</h5>
            <h5>Code:{cca3}</h5>
            <div className='button-container'>
            <button onClick={()=> handleVisitedCountry(country)}>Mark visited</button> <br />
            <button onClick={()=> handleVisitedCountryFlag(country)}>Add flag</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit.'}
            </div>
        </div>
    );
};

export default Country;