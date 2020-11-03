import React from "react";

import { useIssues, useIssueLabels, useLabels, useMilestones } from './issueHook.js';

import TopBar from '../topbar/topbar.js';
import TabList from './tabList.js';
import IssueItem from './issueItem.js';

const Issue = (props) => {
  const [issues, setIssues] = useIssues();
  const issueLabels = useIssueLabels();
  const labels = useLabels();
  const milestones = useMilestones();

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

  return (
    <>
      <TopBar label_num={labels.length} milestone_num={milestones.length} />
      <TabList issues={issues} onClickCheckbox={() => toggleAllIssueSelect()}/>
      <div>
        {issueComponent}
      </div>
    </>
  )
}

export default Issue;