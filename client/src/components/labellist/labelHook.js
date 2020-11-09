import {useState, useEffect, useContext} from 'react';
import { FETCH_LABEL } from '../../reducer/label';
import { sendGetRequest } from '../common/api';
import { LabelReducerContext } from '../common/context';

const useLabels = () => {
  const {labelState, labelDispatch} = useContext(LabelReducerContext);

  useEffect(() => {
    labelDispatch({type: FETCH_LABEL});
  }, []);

  return [labelState, labelDispatch];
}

export { useLabels };