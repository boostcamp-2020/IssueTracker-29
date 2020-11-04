import React from 'react';
import styled from 'styled-components';

const IssueBodyContainer = styled.div`
  border: 1px solid #d1d5da;
  width: 70%;
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