import React, { useReducer, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header/header.js';
import Login from "./components/login/index.js";
import Issue from "./components/issuelist/issuelist.js";
import Label from './components/labellist/labellist.js';
import NewIssue from "./components/newIssue/newIssue.js";
import IssueDetail from "./components/issueDetail/issueDetail.js";
import { IssueContext, LabelContext, MilestoneContext } from "./components/common/context.js";
import asyncLabelWrapper from './wrapper/label';
import { reducer as labelReducer} from './reducer/label';
import MilestoneList from "./components/milestone/milestoneList.js";
import NewMilestone from "./components/newMilestone/newMilestone.js";

const ResetStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const ContentsContainer = styled.div`
  padding: 0px 32px;
  margin: 0px auto;
  max-width: 1280px;
`;

const App = () => {
  const [issues, setIssues] = useState([]);
  const [milestones, setMilestones] = useState([]);

  const [labelState, labelDispatch] = useReducer(labelReducer, {labels: []});
  const asyncLabelDispatch = asyncLabelWrapper(labelDispatch);
  
  return (
    <div>
        <ResetStyle />
        <Header />
          <ContentsContainer>
            <IssueContext.Provider value={{issues, setIssues}}>
              <LabelContext.Provider value={{labelState, labelDispatch: asyncLabelDispatch}}>
                <MilestoneContext.Provider value={{milestones, setMilestones}}>
                  <Switch>
                    <Route exact path="/issue/create" component={NewIssue}/>
                    <Route exact path="/issue/:id" component={IssueDetail} />
                    <Route exact path="/issue" component={Issue}/>
                  </Switch>
                  <Route exact path='/label' component={Label}/>
                  <Route exact path="/" component={Login}/>
                  <Switch>
                    <Route exact path="/milestone/create" component={NewMilestone}/>
                    <Route exact path="/milestone" component={MilestoneList}/>
                  </Switch>
                </MilestoneContext.Provider>
              </LabelContext.Provider>
            </IssueContext.Provider>
          </ContentsContainer>
    </div>
  );
}

export default App;