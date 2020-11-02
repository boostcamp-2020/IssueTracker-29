import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const TopBarConatiner = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const FilterButton = styled.select``;

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
            <FilterButton>
              <option selected disabled hidden>Filters</option>
              <option disabled>Filter issues</option>
              <option>Open issues</option>
              <option>Your issues</option>
              <option>Everything assigned to you</option>
              <option>Everything mentioning you</option>
              <option>Closed issues</option>
            </FilterButton>
            <SearchIssueContainer placeholder="is:open is:issue"/>
            <LabelButton>Labels</LabelButton>
            <MilestoneButton>Milestones</MilestoneButton>
            <NewIssueButton>New issue</NewIssueButton>
        </TopBarConatiner>
    )
}

export default TopBar;