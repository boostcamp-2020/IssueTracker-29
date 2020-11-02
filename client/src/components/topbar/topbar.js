import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FilterButton from './filterButton';
import { Link } from "react-router-dom";

const TopBarConatiner = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const SearchIssueContainer = styled.input``;

const LabelButton = styled.button``;

const MilestoneButton = styled.button``;

const NewIssueButton = styled.button`
    background-color: #2EA44F;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background: darken(0.1, #2EA44F);
    }
`;

const TopBar = (props) => {

    const [labelCount, setLabelCount] = useState();
    const [milestoneCount, setMilestoneCount] = useState();

    return (
        <TopBarConatiner>
            <FilterButton />
            <SearchIssueContainer placeholder="is:open is:issue"/>
            <LabelButton>Labels</LabelButton>
            <MilestoneButton>Milestones</MilestoneButton>
            <Link to="/issue/create">
                <NewIssueButton>New issue</NewIssueButton>
            </Link>
        </TopBarConatiner>
    )
}

export default TopBar;