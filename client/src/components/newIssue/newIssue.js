import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Content from './contentContainer';

const NewIssueContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;


const NewIssue = (props) => {
    
    return (
        <NewIssueContainer>
            <Content />
        </NewIssueContainer>
    )
};

export default NewIssue;