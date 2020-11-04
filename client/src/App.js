import React from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/header.js';
import Login from "./components/login/index.js";
import Issue from "./components/issuelist/issuelist.js";
import NewIssue from "./components/newIssue/newIssue.js";
import IssueDetail from "./components/issueDetail/issueDetail.js";

const ResetStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
    return (
        <div>
            <>
                <ResetStyle />
                <Header />
                <Switch>
                  <Route exact path="/issue/:id" component={IssueDetail} />
                  <Route exact path="/issue/create" component={NewIssue}/>
                  <Route exact path="/issue" component={Issue}/>
                </Switch>
                <Route exact path="/" component={Login}/>
            </>
        </div>
    )
}

export default App;