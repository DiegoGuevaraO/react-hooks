import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

const App = () => {
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
              required
            />
          </label>
        </div>
      </header>

      <main>
        <section className="cards-wrapper">
          <article className="card" key="index">
            <h2 className="short-fact">Title</h2>
            <p className="long-fact">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="country-name">Country name</p>
          </article>
          <article className="card" key="index">
            <h2 className="short-fact">Title</h2>
            <p className="long-fact">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="country-name">Country name</p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default App;