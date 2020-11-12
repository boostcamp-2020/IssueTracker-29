import React from 'react';
import styled from 'styled-components';
import { sendPutRequest, sendGetRequest } from '../common/api';

const SideBarContainer = styled.div`
    width: 100%;
    // height: 50px;
    border: 1px solid black;
`;

const ColorBox = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
    border-radius: 5px;
`;

const ProfileBox = styled.img`
    width: 20px;
    height: 20px;
    src: ${props => props.src};
    border: 1px solid black;
`;

const FlexWrap = styled.div`
    display: flex;
`;

const LabelsWrap = styled.div``;

const MilestoneWrap = styled.div``;

const NewIssueSideBarItem = (props) => {
  const updateAssignees = async () => {
    if (!props.newAssignees.includes(props.user.id)) props.setNewAssignees(props.newAssignees.concat(props.user.id));
    else props.setNewAssignees(props.newAssignees.filter(item => item !== props.user.id));
  }

  const updateLabels = async () => {
    if (!props.newLabels.includes(props.label.id)) props.setNewLabels(props.newLabels.concat(props.label.id));
    else props.setNewLabels(props.newLabels.filter(item => item !== props.label.id));
  }

  const updateMilestone = async () => {
      props.setNewMilestone(props.milestone)
  }

  return (
    <SideBarContainer>
        {props.username ?
            <FlexWrap onClick={updateAssignees}>
                <ProfileBox src={props.profile} />
                <div>{props.username}</div>
            </FlexWrap>
        : null}
        {props.name ? 
            <LabelsWrap onClick={updateLabels}>
                <FlexWrap>
                    <ColorBox color={props.color} />
                    <div>{props.name}</div>
                </FlexWrap>
                <div>{props.description}</div>
            </LabelsWrap>
        : null}
        {props.title ? 
            <MilestoneWrap onClick={updateMilestone}>
                <p>{props.title}</p>
                <p>Due by {new Date(props.due_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </MilestoneWrap> 
        : null}
    </SideBarContainer>
  )
}

export default NewIssueSideBarItem;