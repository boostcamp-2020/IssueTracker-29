import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Modal from '../common/modal';

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

  return (
    <div onClick={null}>
      <input type="button" value="Filters ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title={title} items={option} />
    </div>
  );
};

export default FilterButton;