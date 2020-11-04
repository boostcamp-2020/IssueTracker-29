import React, {useState, useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import Modal from '../common/modal';
import filterCondition from '../common/filterCondition';

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
  const [redirect, setRedirect] = useState(false);

  const handleModalEvent = (e) => {
    const text = e.target.innerHTML;
    setRedirect(filterCondition[text]);
  };

  return (
    <div>
      <input type="button" value="Filters ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title={title} items={option} onEvent={handleModalEvent} />
      {(!redirect)? null : <Redirect to={`/issue?=${encodeURIComponent(redirect).replace(/%20/g, '+')}`}/>}
    </div>
  );
};

export default FilterButton;