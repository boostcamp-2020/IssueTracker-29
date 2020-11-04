import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/modal';
import { useOption } from './tabListHook';
import { IssueContext, LabelContext, MilestoneContext } from '../common/context';
import { sendPutRequest } from '../common/api';

const OPEN = 1;
const CLOSE = 0;

const OPEN_STRING = "Open";
const CLOSE_STRING = "Close";

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
  const { issues } = useContext(IssueContext);

  const currentSelectNum = issues.filter(item => item.checked).length;
  let tabList;
  if (currentSelectNum !== 0) {
    tabList = (
      <>
        <p>{currentSelectNum} selected</p>
        <MarkAsTab>Mark as ▼</MarkAsTab>
      </>
    )
  } else {
    tabList = (
      <>
        <AuthorTab>Author ▼</AuthorTab>
        <LabelTab>Label ▼</LabelTab>
        <MilestonesTab>Milestones ▼</MilestonesTab>
        <AssigneeTab>Assignee ▼</AssigneeTab>
      </>
    )
  }

  return(
    <TabContainer>
      <input type="checkbox" onClick={props.onClickCheckbox}/>
      {tabList}
    </TabContainer>
  )
};

const MarkAsTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const { issues, setIssues } = useContext(IssueContext);

  const sendIssueStateUpdate = async (e) => {
    const isOpen = (e.target.innerHTML === OPEN_STRING) ? 1 : 0;
    const checkedIds = issues.filter(item => item.checked).map(item => item.id);
    const result = await sendPutRequest("/issue/state", {isOpen: isOpen, ids: checkedIds}, {success: false});
    if (result.success) {
      setIssues(issues.map(item => (item.checked) ? {...item, is_open: isOpen, changed_at: new Date().toISOString()} : item));
    }
  }

  return (
    <div>
      <input type="button" value="Mark as ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title="Actions" items={[OPEN_STRING, CLOSE_STRING]} onEvent={sendIssueStateUpdate} />
    </div>
  );
}

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
  const {labels} = useContext(LabelContext);

  return (
    <div>
      <input type="button" value="Label ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title="Filter by label" items={['Unlabeled', ...labels.map(item => item.name)]} />
    </div>
  );
};

const MilestonesTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const {milestones} = useContext(MilestoneContext);

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