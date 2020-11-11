import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LabelMilestoneTabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: .5rem;
`;

const TabButton = styled.button`
color: ${props => props.color || 'black'};
  background-color: ${props => {
    if (props.color === 'white') return 'blue';
    else return 'white';
  }};
`;

const CreateButton = styled.button`
  color: white;
  background-color: green;
`;

const LabelMilestoneTab = ({selected, onCreateEvent, isEdit}) => {
  return (
    <LabelMilestoneTabContainer>
      <div>
        <Link to='/label'><TabButton color={selected === 'label'? 'white' : null}>Label</TabButton></Link>
        <Link to='/milestone'><TabButton color={selected === 'milestone'? 'white' : null}>Milestone</TabButton></Link>
      </div>
      <div>
        {
          selected === 'label'?
            <CreateButton onClick={onCreateEvent}>
              New {selected}
            </CreateButton>
            :
            isEdit?
            null
            :
            <Link to='/milestone/create'>
              <CreateButton>New {selected}</CreateButton>
            </Link>
        }
      </div>
    </LabelMilestoneTabContainer>
  );
};

export default LabelMilestoneTab;
