import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import FilterButton from './filterButton';
import { Redirect } from "react-router-dom";
import { LabelContext, MilestoneContext, ControlValueContext } from '../common/context';
import { COUNTER_BACKGROUND, PRIMARY_COLOR } from '../common/color';
import LabelIcon from '../common/icon/svgLabelIcon';
import MilestoneIcon from '../common/icon/svgMilestoneIcon';
import StyledInput from '../common/style/input';
import { LabelLink, LabelMilestoneNav, MilestoneLink, NewItemLink } from '../common/style/toplink';

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

const SearchIssueContainer = styled(StyledInput)`
  flex: 1 1 auto;
  padding: 5px 12px;

  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const CounterDiv = styled.div`
  padding: 0px 6px;
  background-color: ${COUNTER_BACKGROUND};
  border-radius: 5em;
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
    const { milestones } = useContext(MilestoneContext);
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
          <NewItemLink to="/issue/create">New issue</NewItemLink>
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