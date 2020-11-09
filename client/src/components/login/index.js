import React from 'react';
import {Link} from 'react-router-dom';

const Index = (props) => {
    const queryString = "is:open is:issue ";
    const redirect = () => {
        props.history.push("/" + queryString);
    }

    return (
      <>
        <Link to={`/issue`}><div>Hello</div></Link>
        <a href="/api/user/auth/github">Login To Github</a>
      </>
    );
}

export default Index;