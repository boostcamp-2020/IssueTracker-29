import React, { useState } from 'react';
import styled from 'styled-components';

const IssueHeadContainer = styled.div`
  border-bottom: 1px solid #d1d5da;
  margin-bottom: 20px;
`;

const EditTitleButton = styled.button`
  float: right;
  padding: 10px;
  margin-right: 100px;
`;

const SaveTitleButton = styled.button``;

const CancelTitleButton = styled.button``;

const EditContentsButton = styled.button``;

const IssueHeader = (props) => {
    const editTitle = (e) => {
        setTitle(e.target.value);
    };
    
    return (
        <>
            <IssueHeadContainer>
                <EditTitleButton onClick={editTitle}>Edit</EditTitleButton>
                <h3>{props.title} #{props.id}</h3>
                {props.is_open === 1 ? <p>Open</p> : <p>Closed</p>}
            </IssueHeadContainer>
        </>
    )
}

export default IssueHeader;