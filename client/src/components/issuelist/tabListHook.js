import { useState, useEffect } from 'react';
import { sendGetRequest } from '../common/api';

const useOption = (url, attribute, none=null) => {
  const [option, setOption] = useState([]);

  useEffect(async () => {
    const data = await sendGetRequest(url);
    setOption([none, ...data.map(v => v[attribute])]);
  }, []);

  return option;
};

export { useOption };
