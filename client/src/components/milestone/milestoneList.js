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

const TabTopbarDiv = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const MilestoneList = (props) => {
  const milestones = useMilestones();

  const [isOpenMode, setIsOpenMode] = useState(true);

  const numOpenMilestone = milestones.filter(item => item.is_open === 1).length;

  const milestoneItemComponent = isOpenMode ? milestones.filter((item) => item.is_open).map((item) => <MilestoneItem key={item.id} milestone={item}/>)
                                  : milestones.filter((item) => !item.is_open).map((item) => <MilestoneItem key={item.id} milestone={item}/>)
  return (
    <div>
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