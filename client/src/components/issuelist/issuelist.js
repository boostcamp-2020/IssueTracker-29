import React from "react";

import { useIssues, useIssueLabels } from './api.js';

import TopBar from '../topbar/topbar.js';
import TabList from './tabList.js';
import IssueItem from './issueItem.js';

const Issue = (props) => {
  const issues = useIssues();
  const labels = useIssueLabels();

  console.log(labels);

  const labelMap = {};
  issues.forEach(item => {
    labelMap[item.id] = [];
  })
  labels.forEach(item => {
    if (labelMap[item.issue_id]) {
      labelMap[item.issue_id].push(item);
    }
  })
  
  let issueComponent = issues.map((item) => <IssueItem key={item.id} article={item} labels={labelMap[item.id]}/>);

  return (
    <>
      <TopBar />
      <TabList />
      <div>
        {issueComponent}
      </div>
    </>
  )
}

export default Issue;