import {useEffect, useContext} from 'react';
import { FETCH_LABEL } from '../../reducer/label';
import { LabelReducerContext } from '../common/context';



const useLabels = () => {
  const {labelState, labelDispatch} = useContext(LabelReducerContext);

  useEffect(() => {
    labelDispatch({type: FETCH_LABEL});
  }, []);
  return [labelState, labelDispatch];
}

export { useLabels };