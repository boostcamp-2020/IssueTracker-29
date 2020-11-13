import React from 'react';
import styled from 'styled-components';

const IssueBodyContainer = styled.div`
  width: 70%;
  margin-right: 10px;
`;

const IssueDetailContent = (props) => {
    
    return (
        <>
            <IssueBodyContainer>
                {props.comments}
            </IssueBodyContainer>
        </>
    )
}

export default IssueDetailContent;