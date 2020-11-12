import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMilestones } from './milestoneHook';
import MilestoneItem from './milestoneItem';
import styled from 'styled-components';
import { LabelLink, LabelMilestoneNav, MilestoneLink, NewItemLink } from '../common/style/toplink';
import LabelIcon from '../common/icon/svgLabelIcon';
import MilestoneIcon from '../common/icon/svgMilestoneIcon';
import { PRIMARY_COLOR } from '../common/color';
import TabBar from '../common/style/tabbar';
import TabButton from './tabbutton';
import { sendDeleteRequest } from '../common/api';
import DeletePopup from '../common/deletepopup';

const TabTopbarDiv = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const MilestoneList = (props) => {
  const [milestones, setMilestones] = useMilestones();

  const [isOpenMode, setIsOpenMode] = useState(true);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [deleteMilestoneId, setDeleteMilestoneId] = useState(null);

  const numOpenMilestone = milestones.filter(item => item.is_open === 1).length;

  const milestoneItemComponent = isOpenMode 
  ? milestones.filter((item) => item.is_open).map((item) => <MilestoneItem key={item.id} milestone={item} onDelete={() => {
    setDeleteMilestoneId(item.id);
    setIsPopupActive(true);
  }}/>)
  : milestones.filter((item) => !item.is_open).map((item) => <MilestoneItem key={item.id} milestone={item} onDelete={() => {
    setDeleteMilestoneId(item.id);
    setIsPopupActive(true);
  }}/>)
  return (
    <div>
      <DeletePopup
        active={isPopupActive}
        setActive={setIsPopupActive}
        header='마일스톤 삭제'
        message='마일스톤을 삭제합니다. 이 경우 이슈에 달려있는 마일스톤과의 관계 또한 삭제되며 이는 복원이 불가능합니다. 진행하시겠습니까?'
        onYes={() => {
          const res = sendDeleteRequest(`/milestone/${deleteMilestoneId}`);
          if (res !== null) {
            setMilestones(milestones.filter(item => item.id !== deleteMilestoneId))
          }
        }}/>
      <TabTopbarDiv>
        <LabelMilestoneNav>
          <LabelLink to='/label'><LabelIcon color={PRIMARY_COLOR}/> Labels</LabelLink>
          <MilestoneLink to='/milestone' selected><MilestoneIcon color="#fff"/>Milestones</MilestoneLink>
        </LabelMilestoneNav>
        <NewItemLink to="/milestone/create">New milestone</NewItemLink>
      </TabTopbarDiv>
      <TabBar>
        <TabButton isOpen={isOpenMode} setIsOpen={setIsOpenMode} numOpen={numOpenMilestone} numClose={milestones.length - numOpenMilestone}/>
      </TabBar>
      <div>
        {milestoneItemComponent}
      </div>
    </div>
  )
}

export default MilestoneList;