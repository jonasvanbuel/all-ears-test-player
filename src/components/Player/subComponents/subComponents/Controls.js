import React, { useRef } from 'react';

import utils from '../../utils';

import Play from './Play';
import Pause from './Pause';
import Rwnd from './Rwnd';
import Fwd from './Fwd';

const Controls = () => {
  return (
    <div className="controls">
      <Play />
      <Pause />
      <Rwnd />
      <Fwd />
    </div>
  );
}

export default Controls;
