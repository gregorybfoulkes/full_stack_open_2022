import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Content = ({countries}) => {

    const [weather,setWeather] = useState([])

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${countries[0].capitalInfo.latlng[0]}&lon=${countries[0].capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`

    useEffect(() => {
        console.log('weather')
        axios
          .get(API_URL)
          .then(response => {
            console.log('weather promise fulfilled')
            setWeather(response.data)
            //console.log(response.data)
          })
      }, [API_URL])

      

      return(
          <div>
              {console.log(weather.main)}
              <p>temperature: {}</p>
          </div>
      )

     
}

export default Content