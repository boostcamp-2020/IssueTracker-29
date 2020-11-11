import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMilestones } from './milestoneHook';
import MilestoneItem from './milestoneItem';
import LabelMilestoneTab from '../topbar/labelMilestoneTab';

const MilestoneList = (props) => {
  const milestones = useMilestones();

  const milestoneItemComponent = milestones.map((item) => <MilestoneItem milestone={item}/>);
  return (
    <div>
      <div>
        <LabelMilestoneTab selected='milestone' />
      </div>
      <div>
        {milestoneItemComponent}
      </div>
    </div>
  )
}

export default MilestoneList;