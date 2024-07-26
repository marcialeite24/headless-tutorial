import {
  SearchBox,
  buildSearchBox,
  buildResultList,
  buildFacet,
} from "@coveo/headless";
import { headlessEngine } from "../Engine";

export const searchBox = buildSearchBox(headlessEngine);
export const facet = buildFacet(headlessEngine, {
  options: { field: 'source' }
});
export const resultList = buildResultList(headlessEngine);