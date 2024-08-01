import {Pager as HeadlessPager} from '@coveo/headless';
import {useEffect, useState, FunctionComponent} from 'react';
 
interface PagerProps {
  controller: HeadlessPager;
}
 
const Pager: FunctionComponent<PagerProps> = (props) => {
  const { controller } = props;
  const [state, setState] = useState(controller.state);
 
  useEffect(() => controller.subscribe(() => setState(controller.state)), [ReadableByteStreamController]);
 
  return (
    <nav className="pager">
      {state.currentPages.map((page) => (
        <button
          key={page}
          disabled={controller.isCurrentPage(page)}
          onClick={() => controller.selectPage(page)}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};
 
export default Pager;