import React, { useEffect, useState } from "react";

import { useIssues, useIssueLabels, useLabels, useMilestones } from './issueHook.js';
import { ControlValueContext } from '../common/context.js';

import TopBar from '../topbar/topbar.js';
import TabList from './tabList.js';
import IssueItem from './issueItem.js';

const Issue = (props) => {
  const [issues, setIssues] = useIssues();
  const issueLabels = useIssueLabels();
  const labels = useLabels();
  const milestones = useMilestones();
  const [value, setValue] = useState('is:issue is:open ');
  const [condition, setCondition] = useState('');

  useEffect(() => {
    setCondition(getFilterCondition());
  }, []);

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

  const toggleIssueSelect = (idx) => {
    setIssues(issues.map((item, innerIdx) => idx === innerIdx ? {...item, checked: !item.checked} : item));
  }

  const issueComponent = issues.map((item, idx) => <IssueItem 
    key={item.id} article={item} labels={labelMap[item.id]} onClickCheckbox={() => toggleIssueSelect(idx)}/>);

  const getFilterCondition = () => {
    if(!props.location.search) return;
    const search = decodeURIComponent(props.location.search).split('=')[1].replace(/\+/g, ' ');
    const conditionList = search.match(/\w*:(?:"[\w@ ]*"|[\w@]*)/g);
    return conditionList;
    // TODO: condition에 따라 rendering할 issueItem을 filtering
  };

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
