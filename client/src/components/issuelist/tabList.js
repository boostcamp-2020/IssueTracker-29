import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Modal from '../common/modal';
import { sendGetRequest } from '../common/api';

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
  const currentSelectNum = props.issues.reduce((accu, item) => item.checked ? accu + 1: accu, 0);
  return(
    <TabContainer>
      <input type="checkbox" onClick={props.onClickCheckbox}/>
      <p>{currentSelectNum === 0 ? null : currentSelectNum + ' selected'} </p>
      <AuthorTab>Author ▼</AuthorTab>
      <div>Label ▼</div>
      <div>Milestones ▼</div>
      <div>Assignee ▼</div>
    </TabContainer>
  )
};

const AuthorTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const [option, setOption] = useState([]);

  // read all user
  useEffect(async () => {
    const data = await sendGetRequest('/user/all');
    setOption(data.map(v => v.username));
  }, [])

  return (
    <div>
      <input type="button" value="Author ▼" onClick={() => setOnModal(!onModal)} />
      <Modal onModal={onModal} title="Filter by author" items={option} />
    </div>
  );
};

const LabelTab = (props) => {
  // read all label
};

const MilestonesTab = (props) => {
  // read all milestone
};

const AssigneeTab = (props) => {
  // read all assignee
};

export default tabList;