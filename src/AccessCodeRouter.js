import { useState, useEffect } from 'react';

import Exhibition from './Exhibition/Exhibition';
import AccessCodeForm from './AccessCodeForm/AccessCodeForm';

const AccessCodeRouter = () => {
  const [ exhibition, setExhibition ] = useState(null);
  // const [ exhibition, setExhibition ] = useState('bruce-naumann-yu82d');


  const renderAccessCodeForm = () => {
    return <AccessCodeForm setExhibition={setExhibition} />
  }

  const renderExhibition = () => {
    return <Exhibition exhibition={exhibition} />
  }

  return (
    exhibition ? renderExhibition() : renderAccessCodeForm()
  )
}

export default AccessCodeRouter;
