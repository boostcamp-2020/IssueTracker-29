import React from 'react';
import styled from 'styled-components';

const DateInput = styled.input`
  color: ${props => props.color};
`;

const MilestoneInputForm = ({ title, setTitle, dueDate, setDueDate, description, setDescription, dateColor }) => {
  return (
    <>
      <div>
        <h3>title</h3>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <h3>Due date (optional)</h3>
        <DateInput type="date" value={dueDate? dueDate.toISOString().slice(0, 10) : ''} color={dateColor} onChange={(e) => setDueDate(new Date(e.target.value))} />
      </div>
      <div>
        <h3>Description (optional)</h3>
        <textarea value={description} onChange={e => setDescription(e.target.value)} rows="15" cols="100" />
      </div>
    </>
  );
};

export default MilestoneInputForm;
