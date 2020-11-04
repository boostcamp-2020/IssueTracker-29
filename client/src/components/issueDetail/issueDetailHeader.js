// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useIssues } from '../issuelist/issueHook.js';

// const IssueHeadContainer = styled.div`
//   border-bottom: 1px solid #d1d5da;
//   margin-bottom: 20px;
// `;

// const EditTitleButton = styled.button`
//   float: right;
//   padding: 10px;
//   margin-right: 100px;
// `;

// const Header = ({ match }) => {
//     const editTitle = (e) => {
//         setTitle(e.target.value);
//     };

//     const issues = useIssues();
//     const { id } = match.params;
//     console.log(id);
//     const issue = issues[id - 1];

//     return (
//         <>
//             <IssueHeadContainer>
//                 <EditTitleButton onClick={editTitle}>Edit</EditTitleButton>
//                 <h3>{issue.title} #{issue.id}</h3>
//                 {issue.is_open === 1 ? <p>Open</p> : <p>Closed</p>}
//             </IssueHeadContainer>
//         </>
//     )
// }

// export default Header;