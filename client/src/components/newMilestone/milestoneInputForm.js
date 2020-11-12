import React from 'react';
import styled from 'styled-components';
import { TERTIARY_BACKGROUND_COLOR } from '../common/color';

const MilestoneInputContainer = styled.div`

  input {
    width: 40%;
    height: 30px;
  }

  input, textarea {
    border: 1px solid lightgray;
    border-radius: 4px;
    background-color: ${TERTIARY_BACKGROUND_COLOR};
  }
`;

const DateInput = styled.input`
  color: ${props => props.color};
`;

const MilestoneInputForm = ({ title, setTitle, dueDate, setDueDate, description, setDescription, dateColor }) => {
  return (
    <MilestoneInputContainer>
      <div>
        <h3>title</h3>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <h3>Due date (optional)</h3>
        <DateInput type="date" value={dueDate} color={dateColor} onChange={(e) => setDueDate(e.target.value)} />
      </div>
      <div>
        <h3>Description (optional)</h3>
        <textarea value={description} onChange={e => setDescription(e.target.value)} rows="15" cols="100" />
      </div>
    </MilestoneInputContainer>
  );
};

export default MilestoneInputForm;
