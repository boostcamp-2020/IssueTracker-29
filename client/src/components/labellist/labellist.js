import React, { useState } from 'react';
import styled from 'styled-components';
import LabelCreate from './labelCreate.js';
import LabelEdit from './labelEdit.js';

import { useLabels } from './labelHook.js';
import LabelItemViewer from './labelItemViewer.js';
import LabelMilestoneTab from '../topbar/labelMilestoneTab';
import { LabelLink, LabelMilestoneNav, MilestoneLink } from '../common/style/toplink.js';
import { PRIMARY_COLOR } from '../common/color.js';
import LabelIcon from '../common/icon/svgLabelIcon.js';
import MilestoneIcon from '../common/icon/svgMilestoneIcon.js';
import TabBar from '../common/style/tabbar.js';
import { OkButton } from '../common/style/button.js';

const LabelListContainer = styled.div`
`;

const TabTopbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LabelList = (props) => {
  const [labelState] = useLabels();
  const [isCreating, setIsCreating] = useState(false);

  const createLabel = isCreating ? <LabelCreate setIsCreating={setIsCreating} /> : null;
  const labelItems = labelState.labels.map(item => item.isEditting ? <LabelEdit key={item.id} label={item}/>: <LabelItemViewer key={item.id} label={item}/>);

  return (
    <div>
      <TabTopbarDiv>
        <LabelMilestoneNav>
          <LabelLink to='/label' selected><LabelIcon color={PRIMARY_COLOR}/> Labels</LabelLink>
          <MilestoneLink to='/milestone'><MilestoneIcon color={PRIMARY_COLOR}/>Milestones</MilestoneLink>
        </LabelMilestoneNav>
        <OkButton onClick={() => setIsCreating(!isCreating)}>New label</OkButton>
      </TabTopbarDiv>
      {createLabel}
      <TabBar>
        {labelState.labels.length} labels
      </TabBar>
      <LabelListContainer>
        {labelItems}
      </LabelListContainer>
    </div>
  );
};

export default LabelList;
