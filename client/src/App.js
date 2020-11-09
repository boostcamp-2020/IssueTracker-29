import React, { useReducer, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/header.js';
import Login from "./components/login/index.js";
import Issue from "./components/issuelist/issuelist.js";
import Label from './components/labellist/labellist.js';
import NewIssue from "./components/newIssue/newIssue.js";
import IssueDetail from "./components/issueDetail/issueDetail.js";
import { IssueContext, LabelContext, LabelReducerContext, MilestoneContext } from "./components/common/context.js";

import { DELETE_LABEL, POST_LABEL, EDIT_LABEL, reducer as labelReducer} from './reducer/label';

const ResetStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  const [issues, setIssues] = useState([]);
  const [labels, setLabels] = useState([]);
  const [milestones, setMilestones] = useState([]);

  const [labelState, labelDispatch] = useReducer(labelReducer, {labels: []});
  
  return (
    <div>
        <ResetStyle />
        <Header />
          <IssueContext.Provider value={{issues, setIssues}}>
            <LabelContext.Provider value={{labels, setLabels}}>
              <LabelReducerContext.Provider value={{labelState, labelDispatch}}>
                <MilestoneContext.Provider value={{milestones, setMilestones}}>
                  <Switch>
                    <Route exact path="/issue/create" component={NewIssue}/>
                    <Route exact path="/issue/:id" component={IssueDetail} />
                    <Route exact path="/issue" component={Issue}/>
                  </Switch>
                  <Route exact path='/label' component={Label}/>
                  <Route exact path="/" component={Login}/>
                </MilestoneContext.Provider>
              </LabelReducerContext.Provider>
            </LabelContext.Provider>
          </IssueContext.Provider>
    </div>
  );
}

export default App;