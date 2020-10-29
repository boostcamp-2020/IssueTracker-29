import React from "react";
import { Route } from "react-router-dom";

import Index from "./components/index/index.js";
import Issue from "./components/issue/issue.js";

const App = () => {
    return (
        <div>
            <Route exact path="/issue" component={Issue}/>
            <Route exact path="/" component={Index}/>
        </div>
    )
}

export default App;