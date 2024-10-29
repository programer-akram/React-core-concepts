import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedCountriesFlags, setVisitedCountriesFlags] = useState([])

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleVisitedCountry = country =>{
        const isAdded = visitedCountries.find((c) => c.cca3 === country.cca3);

        if(isAdded){
            alert('Already added')
        }
        else{
            const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry)
        }
        
    }

    const handleVisitedCountryFlag = flag =>{
        const isExist = visitedCountriesFlags.find((country) => country.cca3 === flag.cca3);

        if(isExist){
            alert('Already added')
        }
        else{
            const newVisitedCountryFlags = [...visitedCountriesFlags, flag];
        setVisitedCountriesFlags(newVisitedCountryFlags)
        }

        
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {visitedCountries.map(country => <li key={country.cca3}> {country.name.common}</li>)}
                </ul>
            </div>
            <div>
               {
                visitedCountriesFlags.map(flag =>  <img className='flag' src={flag.flags.png} alt="" />)
               }
            </div>
            <div className='country-container'>
               {
         countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedCountryFlag={handleVisitedCountryFlag} country={country}></Country>)
        } 
            </div>
        
        </div>
    );
};

export default Countries;