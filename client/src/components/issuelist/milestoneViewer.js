import React from 'react';

import MilestoneLogo from './milestoneLogo';

const MilestoneViewer = (props) => {
  return (
    <div>
      <MilestoneLogo />
      <p>{props.milestone_title}</p>
    </div>
  )
};

export default MilestoneViewer;