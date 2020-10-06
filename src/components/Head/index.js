import React, { useEffect } from 'react';

import './styles.css';

const Head = (props) => {
  useEffect(() => {
    document.title = 'StartArt | ' + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.description);
  }, [props]);

  return <></>;
};

export default Head;
