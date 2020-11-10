import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import FilterButton from './filterButton';
import { Link, Redirect } from "react-router-dom";
import { LabelContext, MilestoneContext, ControlValueContext } from '../common/context';
import { BORDER_COLOR, COUNTER_BACKGROUND, FOCUS_BORDER_COLOR, PRIMARY_COLOR } from '../common/color';
import LabelIcon from '../common/icon/svgLabelIcon';
import MilestoneIcon from '../common/icon/svgMilestoneIcon';

const TopBarConatiner = styled.div`
  margin-top: 100px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 14px;
`;

const FilterSearchContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

const SearchFormContainer = styled.form`
  display: flex;
  flex: 1 1 auto;
`;

const SearchIssueContainer = styled.input`
  flex: 1 1 auto;
  padding: 5px 12px;
  border: 1px solid ${BORDER_COLOR};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  
  &:focus {
    border: 1px solid ${FOCUS_BORDER_COLOR};
    box-shadow: 0 0 0 3px ${FOCUS_BORDER_COLOR + "55"}
  }
`;

const TopbarLink = styled(Link)`
  padding: 5px 16px;
`;

const LabelMilestoneLink = styled(TopbarLink)`
  display: flex;
  background-color: #00000000;
  color: ${PRIMARY_COLOR};
  border: 1px solid ${BORDER_COLOR};
  text-decoration: none;

  &:hover {
    background-color: #f6f8fa;
  }
`;

const LabelMilestoneNav = styled.nav`
  display: flex;
  margin: 0px 10px;
`;

const LabelLink = styled(LabelMilestoneLink)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

const MilestoneLink = styled(LabelMilestoneLink)`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const CounterDiv = styled.div`
  padding: 0px 6px;
  background-color: ${COUNTER_BACKGROUND};
  border-radius: 5em;
`;

const NewIssueLink = styled(TopbarLink)`
    background-color: #2EA44F;
    color: white;
    text-align: center;
    text-decoration: none;

    border-radius: 6px;

    &:hover {
        background: darken(0.5, #2EA44F);
    }
`;

const ResetButton = styled.input`
  display: block;
  margin: .5rem auto 1rem auto;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const TopBar = (props) => {

    const { labelState } = useContext(LabelContext);
    const {milestones} = useContext(MilestoneContext);
    const [redirect, setRedirect] = useState(false);
    const { value, setValue } = useContext(ControlValueContext);

    useEffect(() => {
      if(!props.search) return;
      const params = props.search.split('=')[1].split('+').map((v) => decodeURIComponent(v));
      setValue(params.join(' '));
      setRedirect(false);
    }, [props.search]);

    const submitEvent = (e) => {
      e.preventDefault();
      setRedirect(value);
    };

    const resetFilter = () => {
      setRedirect('is:issue is:open ');
    }

    return (
      <>
        <TopBarConatiner>
          <FilterSearchContainer>
            <FilterButton />
            <SearchFormContainer onSubmit={submitEvent}>
              <SearchIssueContainer
                onChange={(e) => setValue(e.target.value)}
                name='q'
                value={value}
                placeholder="Search all issues"/>
            </SearchFormContainer>
          </FilterSearchContainer>
          <LabelMilestoneNav>
            <LabelLink to='/label'><LabelIcon color={PRIMARY_COLOR}/> Labels<CounterDiv>{labelState.labels.length}</CounterDiv></LabelLink>
            <MilestoneLink to='milestone'><MilestoneIcon color={PRIMARY_COLOR}/>Milestones<CounterDiv>{milestones.length}</CounterDiv></MilestoneLink>
          </LabelMilestoneNav>
          <NewIssueLink to="/issue/create">New issue</NewIssueLink>
          {(!redirect)? null : <Redirect to={`/issue?=${encodeURIComponent(redirect).replace(/%20/g, '+')}`}/>}
        </TopBarConatiner>
        {(value === 'is:issue is:open ' || value === '')?
        null :
        <ResetButton
        type="button"
        value="❎ clear current search query, filters, and sorts"
        onClick={resetFilter} />}
      </>
    )
}

export default TopBar;

// <ResetButton onClick={resetFilter} value="clear"/>