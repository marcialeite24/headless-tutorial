import { useEffect } from 'react'
import SearchBox from "./components/SearchBox";
import Facet from "./components/Facet";
import ResultList from "./components/ResultList";
import Pager from './components/Pager';
import { resultTemplatesManager } from './controllers/ResultTemplatesManager';

import {
  searchBox as SearchBoxController,
  facet as FacetController,
  pager as PagerController,
  dateFacet as DateFacetController,
  resultList,
  sort,
} from './controllers/controllers'
import './App.css'

import { headlessEngine } from "./Engine";
import { criteria, Sort } from './components/Sort';
import DateFacet from './components/DateFacet';

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
          <div className="facet-section column">
            <Facet controller={FacetController} title="Source" />
            <DateFacet controller={DateFacetController} title="Date" />
          </div>
          <div className="results-section column">
            <Sort controller={sort} criteria={criteria}/>
            <ResultList controller={resultList} resultTemplatesManager={resultTemplatesManager} />
            <Pager controller={PagerController} />
          </div>
      </div>
    </>
  )
}

export default App;
