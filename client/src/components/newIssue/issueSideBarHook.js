import { useState, useEffect } from 'react';
import { sendGetRequest } from '../common/api.js';


const useIssueSideBarLabels = (id) => {
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        getIssueLabelsById(setLabels, id);
    }, []);

    return labels;
}

const getIssueLabelsById = async (setLabels, id) => {
    const labels = await sendGetRequest(`/issue/${id}/label`);
  
    setLabels(labels);
}

export { useIssueSideBarLabels };