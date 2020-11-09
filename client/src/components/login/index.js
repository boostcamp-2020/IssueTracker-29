import React from 'react';
import {Link} from 'react-router-dom';

const Index = (props) => {
    return (
      <>
        <Link to={`/issue`}><div>Hello</div></Link>
        <a href="/api/user/auth/github">Login To Github</a>
      </>
    );
}

export default Index;