import {useState, useEffect, useContext} from 'react';
import { sendGetRequest } from '../common/api';
import { LabelContext } from '../common/context';

const putLabelsInState = async (setLabels) => {
  const labels = await sendGetRequest('/label');
  setLabels(labels.map(item => ({...item, isEditting: false}) ));
}

const useLabels = () => {
  const {labels, setLabels} = useContext(LabelContext);

  useEffect(() => {
    putLabelsInState(setLabels);
  }, []);

  return [labels, setLabels];
}

export {useLabels};