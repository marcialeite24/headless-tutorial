
import { Facet as FacetController } from '@coveo/headless';
import { useEffect, useState, FunctionComponent } from 'react';
import { FacetSearch } from './FacetSearch';

interface FacetProps {
  controller: FacetController;
  title: string;
}

const Facet: FunctionComponent<FacetProps> = (props) => { 
  const { controller } = props;
  const [state, setState] = useState(controller.state);

  useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

  if (!state.values.length) {
    return (
      <div className="facet">
      <h3>{props.title}</h3>
      <div>No facet values</div>
    </div>
    );
  }

  return (
    <div className="facet">
      <h3>{props.title}</h3>
        <FacetSearch
          controller={controller.facetSearch} 
          facetSearchState={state.facetSearch} 
        />
      <ul>
        {state.values.map((value) => (
          <li key={value.value}>
            <input
              type="checkbox"
              checked={controller.isValueSelected(value)}
              onChange={() => controller.toggleSelect(value)}
              disabled={state.isLoading}
            />
            {value.value} ({value.numberOfResults})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Facet;
