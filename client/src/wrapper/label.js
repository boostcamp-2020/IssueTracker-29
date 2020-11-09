import { sendGetRequest, sendDeleteRequest, sendPostRequest, sendPutRequest } from '../components/common/api';
import { FETCH_LABEL, DELETE_LABEL, POST_LABEL, EDIT_LABEL, TOGGLE_ISEDIT } from '../reducer/label';

const asyncLabelWrapper = (dispatch) => async (action) => {
  switch (action.type) {
    case FETCH_LABEL: {
      const res = await sendGetRequest('/label');
      if (res) {
        dispatch({type: FETCH_LABEL, payload: { labels: res.map(item => ({...item, isEditting: false})) }});
        break;
      }
      dispatch({type: FETCH_LABEL, payload: {labels: []}});
      break;
    }
    case DELETE_LABEL: {
      const res = await sendDeleteRequest(`/label/${action.payload.id}`);
      if (res && res.success) {
        dispatch({type: DELETE_LABEL, payload: {id: action.paydload.id}});
      }
      break;
    }
    case POST_LABEL: {
      const {name, description, color} = action.payload;
      const res = await sendPostRequest('/label', { name, description, color });
      if (res && res.success) {
        const newLabel = {id: res.result, name, description, color, isEditting: false};
        dispatch({type: POST_LABEL, payload: {newLabel}});
      }
      break;
    }
    case EDIT_LABEL: {
      const {id, name, description, color} = action.payload;
      const res = await sendPutRequest(`/label/${id}`, {name, description, color} );
      if (res && res.success) {
        const newLabel = {id, name, description, color, isEditting: false};
        dispatch({type: EDIT_LABEL, payload: {newLabel}});
      }
      break;
    }
    case TOGGLE_ISEDIT: {
      dispatch({type: TOGGLE_ISEDIT, payload: {id: action.payload.id}});
    }
  }
};

export default asyncLabelWrapper;