import React from 'react';
import styled from 'styled-components';
import { sendPutRequest, sendGetRequest } from './api';

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

const SideBarItem = (props) => {
  const updateMilestone = async () => {
      const res = await sendPutRequest(`/issue/${props.issue_id}/milestone/${props.id}`);
      if (res && res.success) {
          const issue = await sendGetRequest(`/issue/${props.issue_id}`);
          props.setMilestoneTitle(issue.milestone_title);
      }
  }
  return (
    <SideBarContainer>
        {props.username ?
            <FlexWrap>
                <ProfileBox src={props.profile} />
                <div>{props.username}</div>
            </FlexWrap>
        : null}
        {props.name ? 
            <>
                <FlexWrap>
                    <ColorBox color={props.color} />
                    <div>{props.name}</div>
                </FlexWrap>
                <div>{props.description}</div>
            </>
        : null}
        {props.title ? <><p onClick={updateMilestone}>{props.title}</p><p>Due by {new Date(props.due_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p></> : null}
    </SideBarContainer>
  )
}

export default SideBarItem;