import React, {useState, useEffect} from 'react';
import {MenuItem, Select, FormControl, CircularProgress} from "@material-ui/core";
import world from "../assets/image/world.svg";

const Header = () => {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('worldwide')

    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries").then((response) => 
                response.json()).then((data) => {
                    const countries = data.map(country => (
                        {
                            name: country.country,
                            value: country.countryInfo.iso2,
                            flag: country.countryInfo.flag
                        }
                    ))
                    setCountries(countries)
                })
        }
        getCountriesData();
        
    }, [])        

    const onCountryChange = (event) => {
        const countryCode = event.target.value;
        console.log('object', countryCode)
        setCountry(countryCode)
    }

    return (
        <div className="app__header">
      <h1>COVID-19 TRACKER </h1>
        <FormControl className="app__dropdown" >
          <Select 
          variant="outlined" 
          onChange={onCountryChange}
          value={country}>
          <MenuItem value="worldwide"><img src={world} style={{width:24,paddingRight:"2%"}}/>Worldwide</MenuItem>
            {/*Looping through the country*/}
            {
                countries.map(country => (
                <MenuItem value={country.value} key={country.name}><img src={country.flag} style={{width:24,paddingRight:"2%"}}/>{country.name}</MenuItem>
                ))
            }
          </Select>
      </FormControl>
      </div>
    )
}

export default Header;
