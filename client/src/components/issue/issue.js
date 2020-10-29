import React, { useEffect, useState } from "react";
import axios from "axios";

const Issue = (props) => {
    const [issues, setIssues] = useState([]);
    let mappedIssue = ["안녕", "ㅎㅇ", "니하오", "Guten Morgen"];

    useEffect(() => {
    })

    let issueComponent = mappedIssue.map(item => <p>{item}</p>);

    return (
        <div>
            {issueComponent}
        </div>
    )
}

export default Issue;