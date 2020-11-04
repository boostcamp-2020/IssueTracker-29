import React, {useState, useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import Modal from '../common/modal';
import filterCondition from '../common/filterCondition';
import { ControlValueContext } from '../issuelist/context';

const FilterButton = (props) => {
  const [onModal, setOnModal] = useState(false);
  const [title, setTitle] = useState('Filter issues');
  const [option, setOption] = useState([
    'Open issues',
    'Your issues',
    'Everything assigned to you',
    'Everything mentioning you',
    'Closed issues',
  ]);
  const { value, setValue } = useContext(ControlValueContext);
  const [redirect, setRedirect] = useState(false);

  const handleModalEvent = (e) => {
    const text = e.target.innerHTML;
    setValue(filterCondition[text]);
    setRedirect(true);
  };

  return (
    <div>
      <input type="button" value="Filters ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title={title} items={option} onEvent={handleModalEvent} />
      {redirect? <Redirect to={`/issue?=${encodeURIComponent(value).replace(/%20/g, '+')}`}/> : null}
    </div>
  );
};

export default FilterButton;