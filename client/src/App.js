import React from "react";
import { Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/header.js';
import Login from "./components/login/index.js";
import Issue from "./components/issue/issue.js";
import NewIssue from "./components/issue/newIssue/newIssue.js";

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
                <Route exact path="/issue" component={Issue}/>
                <Route exact path="/issue/create" component={NewIssue}/>
                <Route exact path="/" component={Login}/>
            </>
        </div>
    )
}

export default App;