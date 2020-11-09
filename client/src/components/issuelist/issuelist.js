import React, { useEffect, useState } from "react";

import { useIssues, useIssueLabels, useLabels, useMilestones } from './issueHook.js';
import { ControlValueContext } from '../common/context.js';

import TopBar from '../topbar/topbar.js';
import TabList from './tabList.js';
import IssueItem from './issueItem.js';

const Issue = (props) => {
  const [issues, setIssues] = useIssues();
  const [filteredIssue, setFilteredIssue] = useState(null);
  const issueLabels = useIssueLabels();
  const labels = useLabels();
  const milestones = useMilestones();
  const [value, setValue] = useState('is:issue is:open ');

  useEffect(() => {
    const condition = getFilterCondition();
    if(!condition || !issues.length || !issueLabels.length) return;
    let result = [...issues];
    condition.forEach((v) => {
      result = result.filter(item => setIssuesByFilterCondition(v).includes(item));
    });
    setFilteredIssue(result);
  }, [props.location, issues, issueLabels]);

  const labelMap = {};
  issues.forEach(item => {
    labelMap[item.id] = [];
  });
  issueLabels.forEach(item => {
    if (labelMap[item.issue_id]) {
      labelMap[item.issue_id].push(item);
    }
  });

  const toggleAllIssueSelect = () => {
    if (issues.filter(item => item.checked).length === issues.length) {
      setIssues(issues.map(item => ({...item, checked: false})));
      return;
    }
    setIssues(issues.map(item => ({...item, checked: true})));
  }

  const toggleIssueSelect = (id) => {
    setIssues(issues.map((item) => item.id === id ? {...item, checked: !item.checked} : item));
  }

  const issueComponent = ((!filteredIssue)? issues : filteredIssue).map((item) => <IssueItem 
    key={item.id} article={item} labels={labelMap[item.id]} onClickCheckbox={() => toggleIssueSelect(item.id)}/>);

  const getFilterCondition = () => {
    if(!props.location.search) return ['is:open'];
    const search = decodeURIComponent(props.location.search).split('=')[1].replace(/\+/g, ' ');
    const conditionList = search.match(/\w*:(?:(?:".*")|(?:[\w@]*))/g);
    return conditionList;
  };

  const setIssuesByFilterCondition = (condition) => {
    const [key, value] = condition.split(':');
    switch(key) {
      case 'is':
        if (value === 'issue') return [...issues];
        return issues.filter(item => (value === 'open')? item.is_open : !item.is_open);
      case 'author':
        if(value !== '@me') // user 식별 미구현
          return issues.filter(item => item.username === value);
      case 'milestone':
        return issues.filter(item => `"${item.milestone_title}"` === value);
      case 'label':
        const filteredIssueID = issueLabels.filter(item => `"${item.name}"` === value).map(item => item.issue_id);
        return issues.filter(item => filteredIssueID.includes(item.id));
      default:
        return [];
    }
  }

  return (
    <div>
      <ControlValueContext.Provider value={{value, setValue}}>
        <TopBar search={props.location.search} />
        <TabList
          labels={labels}
          milestones={milestones}
          onClickCheckbox={() => toggleAllIssueSelect()}/>
        <div>
          {issueComponent}
        </div>
      </ControlValueContext.Provider>
    </div>
  );
}

export default Issue;
