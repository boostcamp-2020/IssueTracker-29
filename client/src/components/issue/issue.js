import React from "react";

import { useIssues } from './api.js';

import TopBar from '../topbar/topbar.js';
import IssueItem from './issueItem.js';

const Issue = (props) => {
  const issues = useIssues();
  
  let issueComponent = issues.map((item) => <IssueItem key={item.id} article={item} />);

  return (
    <>
      <TopBar/>
      <div>
        {issueComponent}
      </div>
    </>
  )
}

export default Issue;