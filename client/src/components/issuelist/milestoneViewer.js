import React from 'react';
import MilestoneIcon from '../common/icon/svgMilestoneIcon';


const MilestoneViewer = (props) => {
  return (
    <div>
      <MilestoneIcon />
      <p>{props.milestone_title}</p>
    </div>
  )
};

export default MilestoneViewer;
