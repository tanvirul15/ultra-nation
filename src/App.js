import "./App.css";
import React, { useState, useEffect } from "react";
import Country from "./components/country/Country";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      {countries.map((country) => (
        <Country country={country} key={country.numericCode} />
      ))}
    </div>
  );
}

export default App;
