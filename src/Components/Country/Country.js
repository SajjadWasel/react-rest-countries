import React from 'react';
import "./Country.css";

const Country = (props) => {
    return (
        <div className="country-style">
            <h1>Country Name: {props.name}</h1>
            <h2>Captital Name: {props.capital}</h2>
            <p>Population: {props.population}</p>
        </div>
    );
};

export default Country;