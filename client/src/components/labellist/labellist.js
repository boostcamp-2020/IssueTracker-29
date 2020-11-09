import React, { useState } from 'react';
import styled from 'styled-components';
import LabelCreate from './labelCreate.js';
import LabelEdit from './labelEdit.js';

import { useLabels } from './labelHook.js';
import LabelItemViewer from './labelItemViewer.js';

const LabelListContainer = styled.div`
`;

const LabelList = (props) => {
  const [labels, setLabels] = useLabels();
  const [isCreating, setIsCreating] = useState(false);

  const createLabel = isCreating ? <LabelCreate setIsCreating={setIsCreating}/> : null;
  const labelItems = labels.map(item => item.isEditting ? <LabelEdit key={item.id} label={item} setLabels={setLabels}/>: <LabelItemViewer key={item.id} label={item} setLabels={setLabels}/>);

  return (
    <div>
      <div>Labels</div>
      <button>Milestones</button>
      <button onClick={() => {setIsCreating(!isCreating)}}>New labels</button>
      {createLabel}
      <LabelListContainer>
        {labelItems}
      </LabelListContainer>
    </div>
  );
};

export default LabelList;
