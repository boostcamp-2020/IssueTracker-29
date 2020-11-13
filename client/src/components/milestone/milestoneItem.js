import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { sendPutRequest } from '../common/api';
import { COLOR_DANGER, LINK_COLOR } from '../common/color';
import { TextButton } from '../common/style/button';
import ListItem from '../common/style/listitem';
import CustomProgress from '../common/style/progress';

const MilestoneItemContainer = styled(ListItem)`
  display: flex;
  justify-content: space-between;
`;

const MainInfoContainer = styled.div`
  flex: 1 1 0;
`;

const TitleContainer = styled.h2`
  margin: 0px;
`

const SubInfoContainer = styled.div`
  flex: 1 1 0;
`

const MarginCustomProgress = styled(CustomProgress)`
  margin-top: .5rem;
`;

const IssueOpenContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const IssueOpenText = styled.p`
  margin: .5rem .5rem 0 0;
`

const OptionContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const optionItemStyle = css`
  flex: 0 0 auto;
  margin: .5rem;
`;

const OptionLink = styled(Link)`
  ${optionItemStyle}
  margin-left: 0px;
  text-decoration: none;

  color: ${LINK_COLOR};
`;

const OptionOpen = styled.button`
  ${optionItemStyle}
  color: ${LINK_COLOR};
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
`;
const DeleteButtonContainer = styled(TextButton)`
  ${optionItemStyle}
  color: ${COLOR_DANGER};
  font-size: 16px;
  padding: 0px;
  cursor: pointer;
`;

const MilestoneItem = (props) => {
  const milestone = props.milestone;
  const {opened: openIssue, closed: closeIssue} = props.issueCount !== undefined ? props.issueCount : {opened: 0, closed: 0};
  const issueRatio = openIssue + closeIssue === 0 ? 0 : Math.ceil(closeIssue / (openIssue + closeIssue) * 100);

  const editMilestoneState = async () => {
    const res = await sendPutRequest(`/milestone/${milestone.id}/state`, { is_open: milestone.is_open ? 0 : 1 });
    if (res.success) {
      props.setMilestones(props.milestones.map(item => item.id === milestone.id ? {...item, is_open: !item.is_oopen} : item))
    }
  };

  return (
    <MilestoneItemContainer>
      <MainInfoContainer>
        <TitleContainer>{milestone.title}</TitleContainer>
        <p>{milestone.due_date === null ?
          'No due date' :
          `Due by ${new Date(milestone.due_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}
        </p>
        <p>{milestone.description}</p>
      </MainInfoContainer>
      <SubInfoContainer>
        <MarginCustomProgress percentage={issueRatio}/>
        <IssueOpenContainer>
          <IssueOpenText>{issueRatio}% complete</IssueOpenText>
          <IssueOpenText>{openIssue} open</IssueOpenText>
          <IssueOpenText>{closeIssue} close</IssueOpenText>
        </IssueOpenContainer>
        <OptionContainer>
          <OptionLink to={{pathname: `/milestone/${milestone.id}`, state: {
            oldTitle: milestone.title,
            oldDueDate: new Date(milestone.due_date).toISOString().slice(0, 10),
            oldDescription: milestone.description,
            isOpen: milestone.is_open,
            }
          }}>Edit</OptionLink>
          <OptionOpen onClick={() => editMilestoneState()}>{milestone.is_open? 'Close' : 'Open'}</OptionOpen>
          <DeleteButtonContainer onClick={() => props.onDelete()}>Delete</DeleteButtonContainer>
        </OptionContainer>
      </SubInfoContainer>
    </MilestoneItemContainer>
  )
}

export default MilestoneItem;

