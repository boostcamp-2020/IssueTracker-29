import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/modal';
import { useOption } from './tabListHook';

const TabContainer = styled.div`
  display: flex;
  width: 80%;
  height: 50px;
  margin: 0 auto;
  border: 1px solid lightgray;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: rgb(239, 239, 239);

  & > div {
    margin: 0 1rem;
  }
`;

const tabList = (props) => {
  const currentSelectNum = props.issues.filter(item => item.checked).length;
  return(
    <TabContainer>
      <input type="checkbox" onClick={props.onClickCheckbox}/>
      <p>{currentSelectNum === 0 ? null : currentSelectNum + ' selected'} </p>
      <AuthorTab>Author ▼</AuthorTab>
      <LabelTab>Label ▼</LabelTab>
      <MilestonesTab>Milestones ▼</MilestonesTab>
      <AssigneeTab>Assignee ▼</AssigneeTab>
    </TabContainer>
  )
};

const AuthorTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const option = useOption('/user', 'username');

  const handleModalEvent = (e) => {
    const text = e.target.innerHTML;
    // TODO: value 변경 후 (append) handleSubmit 호출
    // const newText = value.split(' ').filter(v => !v.includes('author:')).join(' ');
    // if(!newText) return setValue(`author:${text} `);
    // setValue(`${newText}author:${text} `);
  };

  return (
    <div>
      <input type="button" value="Author ▼" onClick={() => setOnModal(!onModal)} />
      <Modal
      onModal={onModal}
      setOnModal={setOnModal}
      title="Filter by author"
      items={option}
      onEvent={handleModalEvent} />
    </div>
  );
};

const LabelTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const option = useOption('/label', 'name', 'Unlabeled');

  return (
    <div>
      <input type="button" value="Label ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title="Filter by label" items={option} />
    </div>
  );
};

const MilestonesTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const option = useOption('/milestone', 'title', 'Issues with no milestone');

  return (
    <div>
      <input type="button" value="Milestone ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title="Filter by milestone" items={option} />
    </div>
  );
};

const AssigneeTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const option = useOption('/user', 'username', 'Assigned to nobody');

  return (
    <div>
      <input type="button" value="Assignee ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title="Filter by who's assigned" items={option} />
    </div>
  );
};

export default tabList;