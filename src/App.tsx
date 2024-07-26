import { useEffect, useState } from 'react'
import SearchBox from "./components/SearchBox";
import Facet from "./components/Facet";
import ResultList from "./components/ResultList";

import {
  searchBox as SearchBoxController,
  facet as FacetController,
  resultList as ResultListController
} from './controllers/controllers'
import './App.css'

import { headlessEngine } from "./Engine";

let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      headlessEngine.executeFirstSearch();
    }
  }, []);

  return (
    <>
      <h1>Coveo Headless Search Interface</h1>
      <div className="search-section">
          <SearchBox controller={SearchBoxController} />
      </div>
      <div className="main-section">
          <div className="facet-section">
            <Facet controller={FacetController} title="Source" />
          </div>
          <div className="results-section">
            <ResultList controller={ResultListController} />
          </div>
      </div>
    </>
  )
}

export default App;
