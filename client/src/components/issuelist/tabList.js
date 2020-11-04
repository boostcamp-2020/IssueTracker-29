import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/modal';
import { useOption } from './tabListHook';
import { FetchedDataContext } from './context.js';

const TabContainer = styled.div`
  display: flex;
  width: 80%;
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
  const currentSelectNum = props.issue_num;
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

  return (
    <div>
      <input type="button" value="Author ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title="Filter by author" items={option} />
    </div>
  );
};

const LabelTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const {labels} = useContext(FetchedDataContext);

  return (
    <div>
      <input type="button" value="Label ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title="Filter by label" items={['Unlabeled', ...labels.map(item => item.name)]} />
    </div>
  );
};

const MilestonesTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const {milestones} = useContext(FetchedDataContext);

  return (
    <div>
      <input type="button" value="Milestone ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title="Filter by milestone" items={['Issues with no milestone', ...milestones.map(item => item.title)]} />
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