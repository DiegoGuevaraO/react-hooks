import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

const App = () => {
  const [isLoading, setIsLoading]             = useState(true);
  const [factsData, setFactsData]             = useState([]);
  const [searchInput, setSearchInput]         = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  //Fetch the data to get country facts
  useEffect(() => {
    axios
    .get('https://63db4515b8e69785e47e7435.mockAPI.io/country')
    .then((response) => {
      setFactsData(response.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  //Filter the data from the search
  useEffect(() => {
    const filteredData = factsData.filter((fact) => {
      return Object.values(fact)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    
    setFilteredResults(filteredData);
  }, [factsData, searchInput]);

  return (
    <div className="App">
      <header className="header">
        <h1 className="page-title">Random Country Facts</h1>

        <div className="form-input-group">
          <label className="search-input-label" htmlFor="search">
            <input
              className="search-input"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              required
            />
          </label>
        </div>
      </header>

      <main>
        {isLoading ? (
          <p className="message">loading...</p>
        ) : (
          <section className="cards-wrapper">
            {filteredResults.length === 0 ?
            factsData.map((data) => (
              <article className="card" key="index">
                <h2 className="short-fact">{data.shortFact}</h2>
                <p className="long-fact">{data.longFact}</p>
                <p className="country-name">{data.country}</p>
              </article>
            )) :
            filteredResults.map((data) => (
              <article className="card" key="index">
                <h2 className="short-fact">{data.shortFact}</h2>
                <p className="long-fact">{data.longFact}</p>
                <p className="country-name">{data.country}</p>
              </article>
            ))
            }
          </section>
        )}
      </main>
    </div>
  );
};

export default App;