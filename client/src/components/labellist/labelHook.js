import {useEffect, useContext} from 'react';
import { FETCH_LABEL } from '../../reducer/label';
import { LabelContext } from '../common/context';



const useLabels = () => {
  const {labelState, labelDispatch} = useContext(LabelContext);

  useEffect(() => {
    labelDispatch({type: FETCH_LABEL});
  }, []);
  return [labelState, labelDispatch];
}

export { useLabels };