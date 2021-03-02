import React, { useRef } from 'react';

import utils from '../../utils';

import PButton from './PButton';

const Controls = (props) => {
  const {
    handleRwnd,
    handleFwd,
    test
  } = utils;

  // useRef might not be required if externalising utils

  const rwndBtnRef = useRef();
  const fwdBtnRef = useRef();
  return (
    <div className="controls">

      <PButton />

      <button ref={rwndBtnRef} className="pBtn" onClick={handleRwnd}>rwnd</button>
      <button ref={fwdBtnRef} className="pBtn" onClick={handleFwd}>fwd</button>

      <button className="pBtn" onClick={test}>test utils</button>
    </div>
  );
}

export default Controls;
