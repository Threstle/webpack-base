import React, {useRef} from 'react';
import './TestPage.less';

interface IProps {
  className?: string
}

const componentName = "TestPage";

/**
 * @name TestPage
 */
function TestPage (props: IProps) {

  // get root ref
  const rootRef = useRef<HTMLDivElement>(null);

  return <div ref={rootRef} className={componentName}>
      {componentName}
  </div>
}

export default TestPage
