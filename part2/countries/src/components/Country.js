import React from 'react'

const Country = ({countries}) => {

   // const languages = () => {
        
    //    for(const key in countries) {

        //    console.log(`${key}: ${countries[key]}`)

      //  }
    //}

    if(countries.length > 10){
        return(
            <p>Too many countries</p>
        )
    }
    else if ((countries.length > 2 && countries.length <10)|| countries.length === 0){
        return(
            <div>
                {countries.map((country,i) => <p key={i}>{country.name.common}</p>)}
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
                   
            

        </div>
    )

}

export default Country