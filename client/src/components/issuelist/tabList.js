import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/modal';
import { useOption } from './tabListHook';
import { FetchedDataContext, ControlValueContext } from './context.js';
import { Redirect } from 'react-router-dom';

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
  const { value, setValue } = useContext(ControlValueContext);
  const [redirect, setRedirect] = useState(false);

  const handleModalEvent = (e) => {
    const text = e.target.innerHTML;
    const newText = value.replace(/author:\w* /, '');
    if(!newText) return setValue(`author:${text} `);
    setValue(`${newText}author:${text} `);
    setRedirect(true);
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
      {redirect? <Redirect to={`/issue?=${encodeURIComponent(value).replace(/%20/g, '+')}`}/> : null}
    </div>
  );
};

const LabelTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const {labels} = useContext(FetchedDataContext);
  const { value, setValue } = useContext(ControlValueContext);
  const [redirect, setRedirect] = useState(false);

  const handleModalEvent = (e) => {
    const text = e.target.innerHTML;
    const newText = value.replace(/label:".*" /, '');
    if(!newText) return setValue(`label:"${text}" `);
    if (text === 'Unlabeled') return setValue(newText);
    setValue(`${newText}label:"${text}" `);
    setRedirect(true);
  };

  return (
    <div>
      <input type="button" value="Label ▼" onClick={() => setOnModal(!onModal)} />
      <Modal
      onModal={onModal}
      title="Filter by label"
      items={['Unlabeled', ...labels.map(item => item.name)]}
      onEvent={handleModalEvent} />
      {redirect? <Redirect to={`/issue?=${encodeURIComponent(value).replace(/%20/g, '+')}`}/> : null}
    </div>
  );
};

const MilestonesTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const {milestones} = useContext(FetchedDataContext);
  const { value, setValue } = useContext(ControlValueContext);
  const [redirect, setRedirect] = useState(false);

  const handleModalEvent = (e) => {
    const text = e.target.innerHTML;
    const newText = value.replace(/milestone:".*" /, '');
    if(!newText) return setValue(`milestone:"${text}" `);
    if (text === 'Issues with no milestone') return setValue(newText);
    setValue(`${newText}milestone:"${text}" `);
    setRedirect(true);
  };

  return (
    <div>
      <input type="button" value="Milestone ▼" onClick={() => setOnModal(!onModal)} />
      <Modal
      onModal={onModal}
      title="Filter by milestone"
      items={['Issues with no milestone', ...milestones.map(item => item.title)]}
      onEvent={handleModalEvent} />
      {redirect? <Redirect to={`/issue?=${encodeURIComponent(value).replace(/%20/g, '+')}`}/> : null}
    </div>
  );
};

const AssigneeTab = (props) => {
  const [onModal, setOnModal] = useState(false);
  const option = useOption('/user', 'username', 'Assigned to nobody');
  const { value, setValue } = useContext(ControlValueContext);
  const [redirect, setRedirect] = useState(false);

  const handleModalEvent = (e) => {
    const text = e.target.innerHTML;
    const newText = value.replace(/assignee:\w* /, '');
    if(!newText) return setValue(`assignee:${text} `);
    if (text === `Assigned to nobody`) return setValue(newText);
    setValue(`${newText}assignee:${text} `);
    setRedirect(true);
  };

  return (
    <div>
      <input type="button" value="Assignee ▼" onClick={() => setOnModal(!onModal)} />
      <Modal
      onModal={onModal}
      title="Filter by who's assigned"
      items={option}
      onEvent={handleModalEvent} />
      {redirect? <Redirect to={`/issue?=${encodeURIComponent(value).replace(/%20/g, '+')}`}/> : null}
    </div>
  );
};

export default tabList;