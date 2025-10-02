import {
  ResultTemplatesManager,
  Result,
  buildResultTemplatesManager,
  ResultTemplatesHelpers, 
} from '@coveo/headless';
import { InteractiveResult } from '../components/InteractiveResult';
import { headlessEngine } from '../Engine';

export const resultTemplatesManager: ResultTemplatesManager<
  (result: Result) => JSX.Element
> = buildResultTemplatesManager(headlessEngine);

resultTemplatesManager.registerTemplates(
  {
    conditions: [],
    content: (result: Result) => (
      <li key={result.uniqueId}>
        <article>
          <h2>
            <InteractiveResult result={result}>
              {result.title}
            </InteractiveResult>
          </h2>
          <p>{result.excerpt}</p>
        </article>
      </li>
    ),
  },
  {
    priority: 1,
    conditions: [
      ResultTemplatesHelpers.fieldMustMatch('sourcetype',   ['YouTube']),
    ],
    content: (result: Result) => (
      <li key={result.uniqueId}>
        <article className="youtube-result">
          <div>
            <h2>
              <InteractiveResult result={result}>
                {result.title}
              </InteractiveResult>
            </h2>
            <p>{result.excerpt}</p>
          </div>
          <div>
            <img
              src={result.raw.ytthumbnailurl as string}
              alt="Thumbnail"
            ></img>
          </div>
        </article>
      </li>
    ),
    fields: ['ytthumbnailurl'],
  }
);