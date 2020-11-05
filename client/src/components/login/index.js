import React from 'react';
import {Link} from 'react-router-dom';

const Index = (props) => {
    const queryString = "is:open is:issue ";
    const redirect = () => {
        props.history.push("/" + queryString);
    }

    return (<Link to={`/?q=${encodeURIComponent(queryString)}`}><div>Hello</div></Link>);
}

export default Index;