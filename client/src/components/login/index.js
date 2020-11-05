import React from 'react';
import {Link} from 'react-router-dom';

const Index = (props) => {
    const queryString = "is:open is:issue ";
    const redirect = () => {
        props.history.push("/" + queryString);
    }

    return (
      <>
        <Link to={`/issue?q=${encodeURIComponent(queryString)}`}><div>Hello</div></Link>
        <a href="https://github.com/login/oauth/authorize?client_id=c0c228aeba3f2b23bef5&redirect_uri=http://118.67.132.176/api/user/auth/github/callback">Login To Github</a>
      </>
    );
}

export default Index;