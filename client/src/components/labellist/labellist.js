import React, { useState } from 'react';
import styled from 'styled-components';
import LabelCreate from './labelCreate.js';
import LabelEdit from './labelEdit.js';

import { useLabels } from './labelHook.js';
import LabelItemViewer from './labelItemViewer.js';
import LabelMilestoneTab from '../topbar/labelMilestoneTab';

const LabelListContainer = styled.div`
`;

const LabelList = (props) => {
  const [labelState] = useLabels();
  const [isCreating, setIsCreating] = useState(false);

  const createLabel = isCreating ? <LabelCreate setIsCreating={setIsCreating} /> : null;
  const labelItems = labelState.labels.map(item => item.isEditting ? <LabelEdit key={item.id} label={item}/>: <LabelItemViewer key={item.id} label={item}/>);

  return (
    <div>
      <LabelMilestoneTab selected='label' onCreateEvent={() => {setIsCreating(!isCreating)}} />
      {createLabel}
      <LabelListContainer>
        {labelItems}
      </LabelListContainer>
    </div>
  );
};

export default LabelList;
