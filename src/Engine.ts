import { 
  buildSearchEngine, 
  getSampleSearchEngineConfiguration,
  loadFieldActions,
  SearchEngine,
} from "@coveo/headless";


const FIELDS = [
  "ec_brand",
  "ec_images",
  "ec_price",
  "ec_promo_price",
  "ec_rating",
  "ec_reviews",
];

const registerAdditionalFields = (headlessEngine: SearchEngine) => {
  const fieldActions = loadFieldActions(headlessEngine);
  headlessEngine.dispatch(fieldActions.registerFieldsToInclude(FIELDS));
  return headlessEngine;
}

const buildEngine = buildSearchEngine({
  configuration: getSampleSearchEngineConfiguration(),
});

export const headlessEngine = registerAdditionalFields(buildEngine);