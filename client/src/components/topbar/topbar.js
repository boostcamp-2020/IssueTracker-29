import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import FilterButton from './filterButton';
import { Link, Redirect } from "react-router-dom";
import { LabelContext, MilestoneContext, ControlValueContext } from '../common/context';

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

    const {labels} = useContext(LabelContext);
    const {milestones} = useContext(MilestoneContext);
    const [redirect, setRedirect] = useState(false);
    const { value, setValue } = useContext(ControlValueContext);

    useEffect(() => {
      if(!props.search) return;
      const params = props.search.split('=')[1].split('+').map((v) => decodeURIComponent(v));
      setValue(params.join(' '));
    }, [props.search]);

    const submitEvent = (e) => {
      e.preventDefault();
      setRedirect(value);
    };

    return (
        <TopBarConatiner>
            <FilterButton />
            <form onSubmit={submitEvent}>
            <SearchIssueContainer
              onChange={(e) => setValue(e.target.value)}
              name='q'
              value={value}
              placeholder="Search all issues"/>
            </form>
            <LabelButton>Labels<div>{labels.length}</div></LabelButton>
            <MilestoneButton>Milestones<div>{milestones.length}</div></MilestoneButton>
            <Link to="/issue/create">
                <NewIssueButton>New issue</NewIssueButton>
            </Link>
            {(!redirect)? null : <Redirect to={`/issue?=${encodeURIComponent(redirect).replace(/%20/g, '+')}`}/>}
        </TopBarConatiner>
    )
}

export default TopBar;