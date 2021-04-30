import { useState } from 'react';

import './styles/index.scss'

import exhibitions from '../data';
import utils from '../Exhibition/Player/utils';

const AccessCodeForm = ({ setExhibition }) => {
  const [ userInput, setUserInput ] = useState('');

  const handleClick = e => {
    e.preventDefault();
    const accessCode = utils.formatAccessCode(userInput);

    // 1. Validate accessCode
    if (exhibitions[accessCode]) {
      // 2. If accessCode is found -> setExhibition
      setExhibition(exhibitions[accessCode])
    } else {
      // 3. TODO: if accessCode is NOT found -> add message...


    }
  }

  return (
    <div className="access-code-form">
      <div className="horizontal-container">
        <div id="form">
          <h2>Please enter your <span>access code</span> to view your demo</h2>
          <input
            className="user-input"
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
          <div className="submit-button-container">
            <button
              className="submit-button"
              onClick={e => handleClick(e)}
            >
              showme
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessCodeForm;
