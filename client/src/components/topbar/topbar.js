import React, { useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import FilterButton from './filterButton';
import { Link } from "react-router-dom";
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
    const { value, setValue } = useContext(ControlValueContext);

    useEffect(() => {
      if(!props.search) return;
      const params = props.search.split('=')[1].split('+').map((v) => decodeURIComponent(v));
      setValue(params.join(' '));
    }, [props.search]);

    const handleSubmit = () => {
      // TODO: 수동 submit 수행 후 하위 컴포넌트들에게 이 메소드 props로 넘겨주기
    };

    return (
        <TopBarConatiner>
            <FilterButton />
            <form action="/issue" method="GET">
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
        </TopBarConatiner>
    )
}

export default TopBar;