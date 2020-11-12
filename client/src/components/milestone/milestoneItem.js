import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListItem from '../common/style/listitem';
import CustomProgress from '../common/style/progress';

const MilestoneItemContainer = styled(ListItem)`
  display: flex;
  justify-content: space-between;
`;

const OptionContainer = styled.div`
  & > * {
    margin: .5rem;
  }
`;

const MilestoneItem = ({ milestone }) => {
  return (
    <MilestoneItemContainer>
      <div>
        <h2>{milestone.title}</h2>
        <p>{milestone.due_date === null ?
          'No due date' :
          `Due by ${new Date(milestone.due_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}
        </p>
        <p>{milestone.description}</p>
      </div>
      <div>
        <CustomProgress percentage={Math.random() * 50}/>
        <OptionContainer>
          <Link to={{pathname: `/milestone/${milestone.id}`, state: {
            oldTitle: milestone.title,
            oldDueDate: new Date(milestone.due_date).toISOString().slice(0, 10),
            oldDescription: milestone.description,
            isOpen: milestone.is_open,
            }
          }}>Edit</Link>
          <span>{milestone.is_open? 'Close' : 'Open'}</span>
          <span>Delete</span>
        </OptionContainer>
      </div>
    </MilestoneItemContainer>
  )
}

export default MilestoneItem;

