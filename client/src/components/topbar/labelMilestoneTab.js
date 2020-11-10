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

const LabelMilestoneTab = (props) => {
  return (
    <LabelMilestoneTabContainer>
      <div>
        <Link to='/label'><TabButton color={props.selected === 'label'? 'white' : null}>Label</TabButton></Link>
        <Link to='/milestone'><TabButton color={props.selected === 'milestone'? 'white' : null}>Milestone</TabButton></Link>
      </div>
      <div>
        {
          props.selected === 'label'?
            <CreateButton onClick={props.onCreateEvent}>
              New {props.selected}
            </CreateButton>
            :
            <Link to='/milestone/create'>
              <CreateButton>New {props.selected}</CreateButton>
            </Link>
        }
      </div>
    </LabelMilestoneTabContainer>
  );
};

export default LabelMilestoneTab;
