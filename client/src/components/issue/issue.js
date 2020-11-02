import React, { useEffect, useState } from "react";
import axios from "axios";

import { useIssues } from './api.js';

import TopBar from '../topbar/topbar.js';
import IssueItem from './issueItem.js';

const Issue = (props) => {
  const issues = useIssues();
  
  let issueComponent = issues.map((item, idx) => <IssueItem key={idx} title={item.title} />);

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