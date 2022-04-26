import React from 'react'
import Content from './Content'

const Country = ({countries, setCountries}) => {  
  
    if(countries.length > 10){
        return(
            <p>Too many countries</p>
        )
    }
    else if ((countries.length > 2 && countries.length <10)|| countries.length === 0){
        return(
            <div>
                <ul>
                {countries.map((country,i) => <li key={i}>{country.name.common}<button onClick={() => setCountries([country])}>Show</button></li>)}
                </ul>
            </div>
        )
    }

    return(
        <div>
             <h2>{countries[0].name.common}</h2>
                <div>
                    capital: {countries[0].capital}
                </div> 
                <div>
                    area: {countries[0].area}
                </div>
                <div>
                    <h2>Languages</h2>
                    {Object.values(countries[0].languages).map((country,i) => <li key={i}>{country}</li>)}
                </div>
                <div>
                    <img src={countries[0].flags.png} alt='Country Flag'></img>
                </div>
                <Content countries={countries}/>
        </div>
    )

}

export default Country