import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { sendPostRequest } from '../common/api';
import Content from '../newIssue/contentContainer';

const DateInput = styled.input`
  color: ${props => props.color};
`;

const NewMilestone = (props) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [dateColor, setDateColor] = useState('black');
  const [description, setDescription] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    verifyDate(dueDate);
  }, [dueDate])

  const verifyDate = (dueDate) => {
    // TODO: due date가 유효한지 (현재 날짜보다 이후의 날짜인지) 체크 -> 유효하지 않으면 빨간색으로 표시
    const current = new Date();
    if (current.getFullYear() > dueDate.getFullYear() || current.getMonth() > dueDate.getMonth() || current.getDate() > dueDate.getDate())
      setDateColor('red');
    else
      setDateColor('black');
  };

  const createMilestone = async () => {
    // TODO: Title Null 체크, 마일스톤 생성 후 마일스톤 목록 페이지로 리다이렉트
    if (!title.length) return alert('제목을 입력해주세요.');
    if (dateColor === 'red') return alert('유효한 날짜를 입력해주세요.');
    await sendPostRequest('/milestone', {title, dueDate: dueDate.toISOString().slice(0, 10), description});
    setRedirect(true);
  };

  return (
    <div>
      <div>
        <h2>New Milestone</h2>
        Create a new milestone to help organize your issues and pull requests. Learn more about milestones and issues.
      </div>
      <hr />
      <div>
        <h3>title</h3>
        <input type="text" onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <h3>Due date (optional)</h3>
        <DateInput type="date" color={dateColor} onChange={(e) => setDueDate(new Date(e.target.value))} />
      </div>
      <div>
        <h3>Description (optional)</h3>
        <textarea value={description} onChange={e => setDescription(e.target.value)} rows="15" cols="100" />
      </div>
      <div>
        <button onClick={createMilestone}>Create milestone</button>
      </div>
      {redirect? <Redirect to='/milestone' /> : null}
    </div>
  )
}

export default NewMilestone;