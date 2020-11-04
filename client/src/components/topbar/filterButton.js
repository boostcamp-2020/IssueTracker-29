import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
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

  const handleModalEvent = (e) => {
    const text = e.target.innerHTML;
    // TODO: value 변경 후 (change) handleSubmit 호출
    // props.setValue(filterCondition[text]);
  };

  return (
    <div>
      <input type="button" value="Filters ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title={title} items={option} onEvent={handleModalEvent} />
    </div>
  );
};

export default FilterButton;