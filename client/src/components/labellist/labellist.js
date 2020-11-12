import React, { useState } from 'react';
import styled from 'styled-components';
import LabelCreate from './labelCreate.js';
import LabelEdit from './labelEdit.js';

import { useLabels } from './labelHook.js';
import LabelItemViewer from './labelItemViewer.js';
import { LabelLink, LabelMilestoneNav, MilestoneLink } from '../common/style/toplink.js';
import { PRIMARY_COLOR } from '../common/color.js';
import LabelIcon from '../common/icon/svgLabelIcon.js';
import MilestoneIcon from '../common/icon/svgMilestoneIcon.js';
import TabBar from '../common/style/tabbar.js';
import { OkButton } from '../common/style/button.js';
import DeletePopup from '../common/deletepopup.js';
import { DELETE_LABEL } from '../../reducer/label.js';

const LabelListContainer = styled.div`
`;

const TabTopbarDiv = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const LabelList = (props) => {
  const [labelState, labelDispatch] = useLabels();
  const [isCreating, setIsCreating] = useState(false);

  const [isPopupActive, setIsPopupActive] = useState(false);
  const [deleteLabelId, setdeleteLabelId] = useState(null);

  const createLabel = isCreating ? <LabelCreate setIsCreating={setIsCreating} /> : null;
  const labelItems = labelState.labels.map(item => item.isEditting ? 
      <LabelEdit key={item.id} label={item} onDelete={() => {
        setdeleteLabelId(item.id);
        setIsPopupActive(true);
      }}/> 
    : <LabelItemViewer key={item.id} label={item} onDelete={() => {
        setdeleteLabelId(item.id);
        setIsPopupActive(true);
      }}/>);

  return (
    <div>
      <DeletePopup
        active={isPopupActive}
        setActive={setIsPopupActive}
        header='라벨 삭제'
        message='라벨을 삭제합니다. 이 경우 이슈에 달려있는 라벨과의 관계 또한 삭제되며 이는 복원이 불가능합니다. 진행하시겠습니까?'
        onYes={() => labelDispatch({type: DELETE_LABEL, payload: {id: deleteLabelId}})}/>
      <TabTopbarDiv>
        <LabelMilestoneNav>
          <LabelLink to='/label' selected><LabelIcon color="#fff"/> Labels</LabelLink>
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
